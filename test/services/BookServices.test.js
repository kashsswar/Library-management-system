const assert = require('chai').assert;
const BookService = require('../src/services/BookService');

describe('BookService', () => {
  describe('getBooks()', () => {
    it('should return an array of books', () => {
      const books = BookService.getBooks();
      assert.isArray(books);
    });

    it('should return an empty array if there are no books', () => {
      const books = BookService.getBooks();
      assert.isEmpty(books);
    });
  });

  describe('getBookById(id)', () => {
    it('should return a book object if the book exists', () => {
      const book = BookService.getBookById(1);
      assert.isObject(book);
      assert.property(book, 'id');
      assert.property(book, 'title');
      assert.property(book, 'author');
      assert.property(book, 'publicationDate');
      assert.property(book, 'price');
    });

    it('should return undefined if the book does not exist', () => {
      const book = BookService.getBookById(100);
      assert.isUndefined(book);
    });
  });

  describe('addBook(book)', () => {
    it('should add a book to the list of books', () => {
      const initialLength = BookService.getBooks().length;
      const newBook = {
        id: 4,
        title: 'New Book',
        author: 'John Doe',
        publicationDate: '2022-01-01',
        price: 20.99
      };
      BookService.addBook(newBook);
      const books = BookService.getBooks();
      assert.lengthOf(books, initialLength + 1);
      assert.include(books, newBook);
    });
  });

  describe('updateBook(book)', () => {
    it('should update the book with the given id', () => {
      const bookToUpdate = {
        id: 1,
        title: 'Updated Title',
        author: 'Updated Author',
        publicationDate: '2022-02-01',
        price: 15.99
      };
      BookService.updateBook(bookToUpdate);
      const updatedBook = BookService.getBookById(1);
      assert.deepEqual(updatedBook, bookToUpdate);
    });

    it('should return undefined if the book does not exist', () => {
      const bookToUpdate = {
        id: 100,
        title: 'Updated Title',
        author: 'Updated Author',
        publicationDate: '2022-02-01',
        price: 15.99
      };
      const result = BookService.updateBook(bookToUpdate);
      assert.isUndefined(result);
    });
  });

  describe('deleteBook(id)', () => {
    it('should remove the book with the given id', () => {
      const initialLength = BookService.getBooks().length;
      BookService.deleteBook(1);
      const books = BookService.getBooks();
      assert.lengthOf(books, initialLength - 1);
      assert.notInclude(books, { id: 1 });
    });

    it('should return undefined if the book does not exist', () => {
      const result = BookService.deleteBook(100);
      assert.isUndefined(result);
    });
  });
});
