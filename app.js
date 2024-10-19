// Book Class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    let storedBooks = [
      {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9809",
      },
      {
        title: "Ikigai",
        author: "Lee",
        isbn: "8766",
      },
      {
        title: "Harry Potter",
        author: "J.K",
        isbn: "9347",
      },
    ];

    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href = "#" class= "btn btn-danger btn-sm delete">X</a></td>
      `;

    list.appendChild(row);
  }
}
//Store Class: Handle Storage

//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a Book

//Event: Remove a Book
