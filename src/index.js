const fs = require('fs');
const csv = require('csv-parser');
const Author = require('./models/author');
const Book = require('./models/book');
const Magazine = require('./models/magazine');
const { readAllCSVs } = require('./utils/csvReader');
const printBooksAndMagazines = async () => {
    const { books, magazines } = await readAllCSVs();
  
    console.log('Books:');
    console.table(books);
  
    console.log('\nMagazines:');
    console.table(magazines);
  };
  
  printBooksAndMagazines();
  const findItemByISBN = async (isbn) => {
    const { books, magazines } = await readAllCSVs();
  
    const book = findByISBN(books, isbn);
    if (book) {
      console.log('Book:');
      console.table(book);
      return;
    }
  
    const magazine = findByISBN(magazines, isbn);
    if (magazine) {
      console.log('Magazine:');
      console.table(magazine);
      return;
    }
  
    console.log(`Item with ISBN ${isbn} not found.`);
  };
  
  findItemByISBN('978-3-16-148410-0');
    