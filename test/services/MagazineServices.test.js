const assert = require('assert');
const MagazineService = require('../../src/services/MagazineService');

describe('MagazineService', function() {
  let magazineService;

  beforeEach(function() {
    magazineService = new MagazineService();
  });

  describe('#getAllMagazines()', function() {
    it('should return an array of magazines', function() {
      const magazines = magazineService.getAllMagazines();
      assert(Array.isArray(magazines));
      assert(magazines.length > 0);
      assert(magazines[0].title);
      assert(magazines[0].publishedAt);
      assert(magazines[0].price);
    });
  });

  describe('#getMagazineByTitle(title)', function() {
    it('should return the magazine with the given title', function() {
      const title = 'National Geographic';
      const magazine = magazineService.getMagazineByTitle(title);
      assert(magazine);
      assert.strictEqual(magazine.title, title);
    });

    it('should return undefined if magazine is not found', function() {
      const title = 'Invalid Magazine Title';
      const magazine = magazineService.getMagazineByTitle(title);
      assert.strictEqual(magazine, undefined);
    });
  });

  describe('#searchMagazines(query)', function() {
    it('should return an array of magazines that match the query', function() {
      const query = 'geographic';
      const magazines = magazineService.searchMagazines(query);
      assert(Array.isArray(magazines));
      assert(magazines.length > 0);
      assert(magazines.every(magazine => magazine.title.toLowerCase().includes(query.toLowerCase())));
    });

    it('should return an empty array if no magazines match the query', function() {
      const query = 'invalid query';
      const magazines = magazineService.searchMagazines(query);
      assert(Array.isArray(magazines));
      assert.strictEqual(magazines.length, 0);
    });
  });
});
