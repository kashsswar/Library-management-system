const assert = require('chai').assert;
const CSVReader = require('../../src/utils/CSVReader');

describe('CSVReader', function() {
  describe('#parse()', function() {
    it('should return an array of objects', function() {
      const csvData = 'title,author,published\ncode complete,steve mcconnell,1993\nthe pragmatic programmer,andrew hunt and david thomas,1999';
      const expectedOutput = [
        { title: 'code complete', author: 'steve mcconnell', published: '1993' },
        { title: 'the pragmatic programmer', author: 'andrew hunt and david thomas', published: '1999' }
      ];
      const result = CSVReader.parse(csvData);
      assert.deepEqual(result, expectedOutput);
    });

    it('should handle empty input', function() {
      const csvData = '';
      const expectedOutput = [];
      const result = CSVReader.parse(csvData);
      assert.deepEqual(result, expectedOutput);
    });

    it('should handle invalid input', function() {
      const csvData = 'title,author,published\ncode complete,steve mcconnell\nthe pragmatic programmer,andrew hunt and david thomas,1999';
      const expectedOutput = [
        { title: 'code complete', author: 'steve mcconnell', published: '' },
        { title: 'the pragmatic programmer', author: 'andrew hunt and david thomas', published: '1999' }
      ];
      const result = CSVReader.parse(csvData);
      assert.deepEqual(result, expectedOutput);
    });
  });
});
