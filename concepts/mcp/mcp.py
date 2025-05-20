import asyncio
from mcp.server.fastmcp import FastMCP
from mcp.server.stdio import stdio_server
import requests
from bs4 import BeautifulSoup
import re
import json

# Create the MCP server
mcp = FastMCP("errorSolver")

def clean_error_message(error: str) -> str:
    """Clean the error message for better search results"""
    # Remove file paths and line numbers
    cleaned = re.sub(r'File ".*?", line \d+,', '', error)
    cleaned = re.sub(r'at line \d+', '', cleaned)
    # Remove multiple spaces and newlines
    cleaned = ' '.join(cleaned.split())
    return cleaned

@mcp.tool()
def search_stackoverflow(error_message: str) -> str:
    """Search Stack Overflow for solutions to the given error message"""
    # Clean the error message
    query = clean_error_message(error_message)
    
    # Search Stack Overflow
    url = "https://api.stackexchange.com/2.3/search"
    params = {
        "order": "desc",
        "sort": "relevance",
        "site": "stackoverflow",
        "intitle": query,
        "filter": "withbody"  # Include answer body in response
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if not data.get("items"):
            return "No relevant solutions found on Stack Overflow."
            
        # Get the most relevant answer
        top_result = data["items"][0]
        
        # Clean up HTML in the answer body
        soup = BeautifulSoup(top_result.get("body", ""), "html.parser")
        answer_text = soup.get_text(strip=True)
        
        return f"""
Solution from Stack Overflow:
Title: {top_result.get('title', 'No title')}
Score: {top_result.get('score', 0)}
Answer: {answer_text[:500]}...
Link: {top_result.get('link', 'No link available')}
"""
    except Exception as e:
        return f"Error searching Stack Overflow: {str(e)}"

@mcp.resource("error://{error_id}")
def get_error_history(error_id: str) -> str:
    """Get the history of a particular error ID if it exists in the system
    
    Args:
        error_id: The unique identifier for the error
        
    Returns:
        The error history as a string
    """
    # This is a placeholder - in a real implementation, this would query a database
    return f"Error history for {error_id} would be retrieved here"

async def main():
    """Run the MCP server using stdio transport"""
    async with stdio_server() as (read_stream, write_stream):
        await mcp.run_with_streams(read_stream, write_stream)

if __name__ == "__main__":
    asyncio.run(main()) 