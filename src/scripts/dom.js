const UNCOMPLETED_BOOK_ID = "listUncompletedBooks";
const COMPLETED_BOOK_ID = "listCompletedBooks";

function createBookItem({title, author, year, status}) {
  const textBookTitle = document.createElement("h4");
  textBookTitle.innerHTML = title;

  const textBookAuthor = document.createElement("h5");
  textBookAuthor.innerHTML = author;

  const textBookYear = document.createElement("h6");
  textBookYear.innerHTML = year;

  const textBookStatus = document.createElement("h6");  
  textBookStatus.innerHTML = status;

  const textContainer = document.createElement("div");
  textContainer.classList.add("list-desc");
  textContainer.append(textBookTitle, textBookAuthor, textBookYear, textBookStatus);

  const itemContainer = document.createElement("article");
  itemContainer.classList.add("list-item", "uncompleted");
  itemContainer.append(textContainer);
 
  return itemContainer;

}

function addBook() {
  const uncompletedBookList = document.getElementById(UNCOMPLETED_BOOK_ID);

  const bookTitle = document.querySelector("#bookTitle").value;
  const bookAuthor = document.querySelector("#bookAuthor").value;
  const bookYear = document.querySelector("#bookYear").value;
  const bookStatus = document.querySelectorAll("input[name=bookStatus]:checked")[0].value;

  const book = createBookItem({
    title : bookTitle, 
    author: bookAuthor, 
    year: bookYear, 
    status: bookStatus
  });

  uncompletedBookList.append(book);

}
