const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function writeCSV(filename, data) {
  const csvWriter = createCsvWriter({
    path: filename,
    header: Object.keys(data[0]).map(key => ({ id: key, title: key }))
  });

  return csvWriter.writeRecords(data);
}

module.exports = writeCSV;
