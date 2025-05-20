import { describe, it, expect } from '../../test/testUtils.js';
import { createUser, getUserById, deleteUser } from './tdd.js';

describe('User Service', async () => {
  it('should create a user with valid input', async () => {
    const user = await createUser({
      name: 'Alice',
      email: 'alice@example.com',
      age: 30
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Alice');
    expect(user.email).toBe('alice@example.com');
    expect(user.age).toBe(30);
  });

  it('should reject creation with missing fields', async () => {
    await expect(
      createUser({ email: 'bob@example.com' })
    ).rejects.toThrow('Name and age are required');
  });

  it('should reject creation with invalid email', async () => {
    await expect(
      createUser({ name: 'Bob', email: 'not-an-email', age: 25 })
    ).rejects.toThrow('Invalid email format');
  });

  it('should retrieve a user by ID', async () => {
    const newUser = await createUser({
      name: 'Carol',
      email: 'carol@example.com',
      age: 40
    });

    const found = await getUserById(newUser.id);
    expect(found).toEqual(newUser);
  });

  it('should return null for non-existent user', async () => {
    const result = await getUserById('non-existent-id');
    expect(result).toBeNull();
  });

  it('should delete a user by ID', async () => {
    const newUser = await createUser({
      name: 'Dan',
      email: 'dan@example.com',
      age: 22
    });

    await deleteUser(newUser.id);
    const result = await getUserById(newUser.id);
    expect(result).toBeNull();
  });

  it('should handle deleting a non-existent user gracefully', async () => {
    await expect(deleteUser('missing-id')).resolves.toBeUndefined();
  });
});

// Run all tests
(async () => {
  try {
    await describe('User Service', async () => {
      // Tests will run automatically
    });
  } catch (error) {
    console.error('Test suite failed:', error);
  }
})();