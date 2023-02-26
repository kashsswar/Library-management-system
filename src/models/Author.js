class Author {
    constructor(firstName, lastName, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    static fromCsvRow(csvRow) {
      const [firstName, lastName, email] = csvRow;
      return new Author(firstName, lastName, email);
    }
  
    toCsvRow() {
      return [this.firstName, this.lastName, this.email];
    }
  }
  
  module.exports = Author;
  