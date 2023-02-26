const BookService = require('./BookService');
const MagazineService = require('./MagazineService');

class SearchService {
  static search(query) {
    const books = BookService.search(query);
    const magazines = MagazineService.search(query);
    return [...books, ...magazines];
  }
}

module.exports = SearchService;
