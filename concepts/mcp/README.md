# Model Control Protocol (MCP) in Cursor

This directory explores the Model Control Protocol (MCP), the underlying communication system that powers Cursor's AI interactions.

## What is MCP?

MCP (Model Control Protocol) is the interface that allows Cursor to communicate with AI models in a structured way. It enables:

- Structured communication between Cursor and AI models
- Extensible tool usage for AI assistants
- Custom tool and resource definitions
- Streaming responses and real-time interactions

## Key MCP Concepts

### Tools

Tools are functions that AI models can use to interact with external systems, retrieve information, or perform actions. The example in this directory demonstrates:

- Defining custom tools with the `@mcp.tool()` decorator
- Implementing a Stack Overflow search tool
- Handling parameters and returning structured results

### Resources

Resources provide a way to access and manipulate structured data:

- Resources are defined with the `@mcp.resource()` decorator
- They can accept parameters in URL-like patterns
- They return structured data that the AI can use

### Streams

MCP uses asynchronous streams for communication:

- Supports real-time, bidirectional communication
- Enables streaming responses from AI models
- Allows for interactive, conversational experiences

## Practical Example

The `mcp.py` file in this directory demonstrates a practical application of MCP:

- Creating an error-solving assistant that can search Stack Overflow
- Defining custom tools for error processing
- Implementing resource endpoints for error history
- Setting up an MCP server with stdio transport

## Exercises

Use the files in this directory to practice working with MCP:

1. **Understanding MCP Structure**:
   - Examine the `mcp.py` file to understand the structure of MCP tools and resources
   - See how the Stack Overflow search tool is implemented
   - Note how error messages are processed and cleaned

2. **Creating Custom Tools**:
   - Try modifying the `mcp.py` file to add your own custom tools
   - Experiment with different types of external API integrations
   - Test your tools with the provided `mcp.js` stub file

3. **Running the MCP Server**:
   - Install the required dependencies from `requirements.txt`
   - Run the MCP server to see how it processes messages
   - Try sending different error messages to the server

## Key Files

- **mcp.py**: A Python implementation of an MCP server with custom tools
- **mcp.js**: A JavaScript stub for testing MCP functionality
- **requirements.txt**: Required Python packages for running the MCP server
- **prompt.txt**: Empty file for adding your own test prompts

Understanding MCP helps you grasp how Cursor communicates with AI models and how you can extend and customize these interactions for your specific needs. 