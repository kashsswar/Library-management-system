const Book = require('../models/Book');
const CSVReader = require('../utils/CSVReader');
const SearchService = require('./SearchService');

class BookService {
  constructor() {
    this.books = [];
    this.reader = new CSVReader();
    this.searchService = new SearchService();
  }

  async init() {
    try {
      const data = await this.reader.read('data/books.csv');
      this.books = data.map(row => new Book(row));
      console.log(`Loaded ${this.books.length} books`);
    } catch (err) {
      console.error('Failed to load books:', err);
    }
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.searchService.findById(this.books, id);
  }

  searchBooks(query) {
    return this.searchService.search(this.books, query);
  }

  addBook(book) {
    const newBook = new Book(book);
    this.books.push(newBook);
    return newBook;
  }

  updateBook(id, updates) {
    const book = this.getBookById(id);
    if (book) {
      book.update(updates);
      return book;
    }
    return null;
  }

  deleteBook(id) {
    const index = this.books.findIndex(book => book.id === id);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = BookService;
