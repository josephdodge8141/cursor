// Simple assertion utilities
export function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toEqual(expected) {
      const actualStr = JSON.stringify(actual);
      const expectedStr = JSON.stringify(expected);
      if (actualStr !== expectedStr) {
        throw new Error(`Expected ${expectedStr} but got ${actualStr}`);
      }
    },
    toBeNull() {
      if (actual !== null) {
        throw new Error(`Expected null but got ${actual}`);
      }
    },
    toHaveProperty(prop) {
      if (!(prop in actual)) {
        throw new Error(`Expected object to have property ${prop}`);
      }
    },
    rejects: {
      async toThrow(expectedError) {
        try {
          await actual;
          throw new Error('Expected promise to reject but it resolved');
        } catch (error) {
          if (!error.message.includes(expectedError)) {
            throw new Error(`Expected error message "${expectedError}" but got "${error.message}"`);
          }
        }
      }
    },
    resolves: {
      async toBeUndefined() {
        const result = await actual;
        if (result !== undefined) {
          throw new Error(`Expected undefined but got ${result}`);
        }
      }
    }
  };
}

// Test runner utilities
export function describe(name, fn) {
  console.log(`\n${name}`);
  fn();
}

export async function it(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
  } catch (error) {
    console.log(`  ✗ ${name}`);
    console.error(`    ${error.message}`);
  }
} 