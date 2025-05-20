# Understanding AI Models in Cursor

This directory explores the different AI models available in Cursor and helps you understand which model to use for different tasks.

## AI Models Overview

Cursor provides access to several leading AI models from different providers:

### Anthropic - Claude

| Name           | Included | Cost/1K tokens | Context | Output | Thinking | Recommendation                     |
|----------------|----------|----------------|---------|--------|----------|-----------------------------------|
| 3.5-sonnet     | Yes      | $0.04          | 200k    | 8,192  | No       | Small, poorly defined tasks       |
| 3.7-sonnet     | Yes      | $0.04          | 200k    | 64,000 | No       | Prototyping, Large poorly defined tasks |
| 3.5-haiku      | Yes      | $0.04          | 200k    | 8,192  | No       | Small, well defined tasks         |
| 3.7-sonnet-max | No       | $0.05          | 200k    | 64,000 | Yes      | Prototyping, Large scale tasks    |

### OpenAI

| Name       | Included | Cost/1K tokens | Context | Output  | Thinking | Recommendation                    |
|------------|----------|----------------|---------|---------|----------|------------------------------------|
| gpt-4.1    | Yes      | $0.04          | 1m      | 32,768  | No       | Simple fast tasks                  |
| gpt-4o     | Yes      | $0.04          | 128k    | 16,384  | No       | Small, well defined tasks          |
| gpt-4      | Yes      | $0.04          | 8,192   | 8,192   | No       | Avoid                              |
| o3         | No       | $0.30          | 200k    | 100k    | Yes      | Prototyping, Large well defined tasks |
| o4-mini    | Yes      | $0.04          | 200k    | 100k    | Yes      | Prototyping, Large tasks           |

### Google - Gemini

| Name            | Included | Cost/1K tokens | Context | Output  | Thinking | Recommendation                    |
|-----------------|----------|----------------|---------|---------|----------|------------------------------------|
| 2.5-pro-exp     | Yes      | $0.04          | 1m      | 65,535  | Yes      | Prototyping, Refactoring           |
| 2.5-pro-preview | Yes      | $0.04          | 1m      | 65,535  | Yes      | Prototyping, Refactoring           |
| 2.5-flash       | Yes      | $0.04          | 1m      | 65,535  | Yes      | Prototyping, Refactoring           |
| 2.5-pro-max     | No       | $0.05          | 1m      | 65,535  | Yes      | Prototyping, Large well defined tasks |

## Key Model Characteristics

### Context Window
The maximum amount of text (in tokens) the model can consider at once. Larger context windows allow the model to understand more of your codebase.

### Output Tokens
The maximum length of the response the model can generate in a single turn.

### Thinking
Whether the model has "thinking" capabilities, which can help with more complex reasoning tasks.

### Cost
The price per 1,000 tokens, which affects your usage costs.

## How to Choose the Right Model

Consider these factors when selecting a model:

1. **Task Complexity**: More complex tasks may benefit from models with larger context windows and thinking capabilities
2. **Code Size**: Larger codebases require models with larger context windows
3. **Speed**: Some models are optimized for fast responses (like Claude 3.5 Haiku or GPT-4o)
4. **Cost**: If you're concerned about costs, stick with included models

## Exercises

Use the files in this directory to experiment with different models:

1. **Model Comparison**:
   - Open the empty `models.js` file
   - Add some complex code
   - Try the same queries with different models to compare responses
   - Note differences in accuracy, speed, and detail

2. **Model Selection**:
   - Use the `prompt.txt` file to write different types of prompts
   - Test which models perform best for different types of tasks

Understanding the strengths and limitations of each model will help you choose the right one for your specific coding needs. 