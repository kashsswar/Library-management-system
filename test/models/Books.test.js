const assert = require('assert');
const Book = require('../src/models/Book');

describe('Book', () => {
  it('should create a new book object with the given properties', () => {
    const book = new Book('1234567890', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'classic');
    assert.strictEqual(book.isbn, '1234567890');
    assert.strictEqual(book.title, 'The Great Gatsby');
    assert.strictEqual(book.author, 'F. Scott Fitzgerald');
    assert.strictEqual(book.year, 1925);
    assert.strictEqual(book.genre, 'classic');
  });

  it('should return a string representation of the book', () => {
    const book = new Book('1234567890', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'classic');
    assert.strictEqual(book.toString(), 'The Great Gatsby by F. Scott Fitzgerald (1925)');
  });
});
