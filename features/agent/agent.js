function generateGreeting(name) {
    return `Hello, ${name}!`;
}

function test_generateGreeting() {
    const expected = "Hello, Alice!";
    const result = generateGreeting("Alice");
    
    if (result !== expected) {
        throw new Error(`Test failed! Expected "${expected}" but got "${result}"`);
    }
    console.log("Test passed!");
}

test_generateGreeting();

module.exports = { generateGreeting, test_generateGreeting };
