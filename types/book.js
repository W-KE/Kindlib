class Book {
  constructor(book = {}) {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.description = book.description;
    this.isbn = book.isbn;
    this.rating = book.rating;
    this.cover = book.cover;
    this.year = book.year;
    this.publisher = book.publisher;
    this.language = book.language;
  }
}

export default Book;
