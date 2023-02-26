const assert = require('assert');
const Magazine = require('../src/models/Magazine');

describe('Magazine', function () {
  describe('#constructor', function () {
    it('should create a new Magazine object', function () {
      const magazine = new Magazine('title', 'publisher', 2021, 'monthly');
      assert.strictEqual(magazine.title, 'title');
      assert.strictEqual(magazine.publisher, 'publisher');
      assert.strictEqual(magazine.yearOfPublication, 2021);
      assert.strictEqual(magazine.frequency, 'monthly');
    });
  });

  describe('#getFrequency', function () {
    it('should return the frequency of the magazine', function () {
      const magazine = new Magazine('title', 'publisher', 2021, 'weekly');
      const frequency = magazine.getFrequency();
      assert.strictEqual(frequency, 'weekly');
    });
  });
});
