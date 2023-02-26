const assert = require('assert');
const Author = require('../src/models/Author');

describe('Author', () => {
  describe('#constructor', () => {
    it('should create an author object with the given properties', () => {
      const author = new Author(1, 'John Doe', 'john.doe@example.com');
      assert.strictEqual(author.id, 1);
      assert.strictEqual(author.name, 'John Doe');
      assert.strictEqual(author.email, 'john.doe@example.com');
    });
  });

  describe('#toJSON', () => {
    it('should return a JSON representation of the author object', () => {
      const author = new Author(2, 'Jane Doe', 'jane.doe@example.com');
      const expectedJson = {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      };
      assert.deepStrictEqual(author.toJSON(), expectedJson);
    });
  });
});
