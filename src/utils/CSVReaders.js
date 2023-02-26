const fs = require('fs');
const csv = require('csv-parser');

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const readAllCSVs = async () => {
  const authors = await readCSV('./data/Authors.csv');
  const books = await readCSV('./data/Books.csv');
  const magazines = await readCSV('./data/Magazines.csv');

  return { authors, books, magazines };
};

module.exports = {
  readAllCSVs,
};
const findByISBN = (data, isbn) => {
    return data.find((item) => item.ISBN === isbn);
  };
  const findByAuthorEmail = (data, email) => {
    return data.filter((item) => item.Email === email);
  };
    