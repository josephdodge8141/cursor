# Common Pitfalls When Using Cursor

This directory highlights common mistakes and misconceptions when working with AI-assisted coding tools like Cursor, and provides strategies to avoid them.

## "Vibe Coding" and Other Common Traps

### What to Avoid

#### 1. Accepting Without Reading
- **Pitfall**: Blindly accepting AI suggestions without reviewing them
- **Risk**: Introducing bugs, security vulnerabilities, or code that doesn't match requirements
- **Example**: Accepting a database query without checking for SQL injection vulnerabilities

#### 2. Letting Cursor Write Code You Don't Comprehend
- **Pitfall**: Using AI to write complex code you don't understand
- **Risk**: Inability to maintain, debug, or explain the code later
- **Example**: Implementing advanced algorithms without understanding the underlying principles

#### 3. Assuming Contextual Awareness
- **Pitfall**: Assuming Cursor knows everything about your project without providing context
- **Risk**: Generated code that doesn't integrate well with existing systems
- **Example**: Asking for "a function to process user data" without specifying format or requirements

### How to Avoid These Pitfalls

#### 1. Ask About the Code It Writes
- **Strategy**: Question Cursor about unfamiliar patterns or approaches
- **Benefit**: Build your understanding while leveraging AI assistance
- **Example**: "Can you explain why you chose this particular approach?"

#### 2. Use New Terminology as a Learning Opportunity
- **Strategy**: When Cursor introduces unfamiliar concepts, ask for explanations
- **Benefit**: Expand your knowledge while getting work done
- **Example**: "You mentioned using a 'decorator pattern' here - can you explain what that is?"

#### 3. Provide Clear Context
- **Strategy**: Be specific about requirements and include relevant files
- **Benefit**: More accurate and appropriate code suggestions
- **Example**: Use @mentions to include relevant files or sections in your prompts

## Common Problematic Requests

### 1. "Fix This Error Message"
- **Problem**: Vague request without context about what you're trying to accomplish
- **Better Approach**: Share the error, relevant code, and what you're trying to achieve

### 2. "Change A to B"
- **Problem**: Lacks context about why the change is needed and what constraints exist
- **Better Approach**: Explain the purpose of the change and any requirements it needs to meet

## Best Practices for Working with Cursor

1. **Review All Generated Code**: Always read and understand what's being added to your codebase
2. **Provide Detailed Context**: The more information you provide, the better the results
3. **Ask Follow-up Questions**: If something isn't clear, ask Cursor to explain
4. **Maintain Ownership**: You should always be the final decision-maker for your code
5. **Use as a Learning Tool**: Treat AI assistance as an opportunity to learn, not just a shortcut

By avoiding these common pitfalls, you can use Cursor effectively as a productivity tool while continuing to grow as a developer. 