import { BookService } from "./services/BookService.js";
import { MagazineService } from "./services/MagazineService.js";

export class UI {
  constructor() {
    this.bookService = new BookService();
    this.magazineService = new MagazineService();

    this.bookTable = document.getElementById("book-table");
    this.magazineTable = document.getElementById("magazine-table");

    this.bookService.getAll().then((books) => {
      this.displayBooks(books);
    });

    this.magazineService.getAll().then((magazines) => {
      this.displayMagazines(magazines);
    });
  }

  displayBooks(books) {
    for (let book of books) {
      let row = this.bookTable.insertRow();
      let titleCell = row.insertCell();
      let authorCell = row.insertCell();
      let publisherCell = row.insertCell();
      let yearCell = row.insertCell();

      titleCell.innerText = book.title;
      authorCell.innerText = book.author;
      publisherCell.innerText = book.publisher;
      yearCell.innerText = book.year;
    }
  }

  displayMagazines(magazines) {
    for (let magazine of magazines) {
      let row = this.magazineTable.insertRow();
      let titleCell = row.insertCell();
      let issueCell = row.insertCell();
      let publisherCell = row.insertCell();
      let yearCell = row.insertCell();

      titleCell.innerText = magazine.title;
      issueCell.innerText = magazine.issue;
      publisherCell.innerText = magazine.publisher;
      yearCell.innerText = magazine.year;
    }
  }
}
