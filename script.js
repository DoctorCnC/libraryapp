let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Get input values from the form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  // Create a new Book object with the input values
  let newBook = new Book(title, author, pages, read);

  // Add the new Book object to the library array
  myLibrary.push(newBook);

  // Clear the form fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;

  // Refresh the display
  displayBooks();
}

function removeBook(index) {
  // Remove the book from the library array
  myLibrary.splice(index, 1);

  // Refresh the display
  displayBooks();
}

function toggleReadStatus(index) {
  // Toggle the read status of the book
  myLibrary[index].read = !myLibrary[index].read;

  // Refresh the display
  displayBooks();
}

function displayBooks() {
  // Get the container element to display the books
  let container = document.getElementById("container");
  container.innerHTML = ""; // Clear the previous content

  // Loop through the library array and create a display for each book
  myLibrary.forEach(function(book, index) {
    // Create a div element for the book card
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Create a paragraph element for the book details
    let bookDetails = document.createElement("p");
    bookDetails.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;

    // Create buttons for removing the book and toggling its read status
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      removeBook(index);
    });

    let toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Read";
    toggleButton.addEventListener("click", function() {
      toggleReadStatus(index);
    });

    // Append the book details and buttons to the book card
    bookCard.appendChild(bookDetails);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleButton);

    // Append the book card to the container
    container.appendChild(bookCard);
  });
}
