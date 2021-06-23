const UNCOMPLETED_BOOK_ID = "listUncompletedBooks";
const COMPLETED_BOOK_ID = "listCompletedBooks";

function createBookItem({idBook, title, author, year, status, typeClass, isRead}) {
  const textBookId = document.createElement("h4"); 
  textBookId.classList.add("idBook", "hidden");
  textBookId.innerHTML = idBook;

  const textBookTitle = document.createElement("h4");
  textBookTitle.classList.add("title");
  textBookTitle.innerHTML = title;

  const textBookAuthor = document.createElement("h5");
  textBookAuthor.classList.add("author");
  textBookAuthor.innerHTML = author;

  const textBookYear = document.createElement("h6");
  textBookYear.classList.add("year");
  textBookYear.innerHTML = year;

  const textBookStatus = document.createElement("h6");  
  textBookStatus.classList.add("status", "hidden");
  textBookStatus.innerHTML = status;

  const textContainer = document.createElement("div");
  textContainer.classList.add("list-desc");
  textContainer.append(textBookId, textBookTitle, textBookAuthor, textBookYear, textBookStatus);

  const itemContainer = document.createElement("article");
  itemContainer.classList.add("list-item", typeClass);
  itemContainer.append(textContainer);

  if (isRead){
    itemContainer.append(
      createUndoButton(),
      createTrashButton()
    );
  }
  else{
    itemContainer.append(
      createCheckButton()
    );
  } 
  
  return itemContainer;
}

function createUndoButton() {
  const iconTag = '<i class="fa fa-undo" aria-hidden="true"></i>';

  return createButton("undo-btn", iconTag, function(event){
    undoBookToRead(event.target.parentElement);
  }); 
}

function createCheckButton() {
  const iconTag = '<i class="fa fa-check" aria-hidden="true"></i>';

  return createButton("check-btn", iconTag, function(event){
    addBookToRead(event.target.parentElement);
  }); 
}

function createTrashButton() {
  const iconTag = '<i class="fa fa-trash" aria-hidden="true"></i>';

  return createButton("trash-btn", iconTag, function(event){
    deleteCompletedBook(event.target.parentElement);
  }); 
}

function createButton(buttonType, iconType, eventListener) {
  const button = document.createElement("button");
  button.classList.add(buttonType);

  const icon = document.createElement("span");
  icon.innerHTML = iconType;
    button.append(icon);
    button.addEventListener("click", function (event) {
      eventListener(event);
    });

  return button;
}

function addBook() {
  const uncompletedBookList = document.getElementById(UNCOMPLETED_BOOK_ID);
  const completedBookList = document.getElementById(COMPLETED_BOOK_ID);
  const bookId = document.querySelector("#bookId");
  bookId.value = +new Date();
  const bookTitle = document.querySelector("#bookTitle").value;
  const bookAuthor = document.querySelector("#bookAuthor").value;
  const bookYear = document.querySelector("#bookYear").value;
  const bookStatus = document.querySelectorAll("input[name=bookStatus]:checked")[0];

  
  if(bookStatus.value === "Belum") {
    console.log("belum");
    const newBook = createBookItem({
    idBook : bookId.value,
    title : bookTitle, 
    author: bookAuthor, 
    year: bookYear, 
    status: bookStatus.value,
    typeClass: "uncompleted",
    isRead: false
  });

    uncompletedBookList.append(newBook);
  } else {
    console.log("sudah");
    bookStatus.value = "Sudah";
    const newBook = createBookItem({
    idBook : bookId.value,
    title : bookTitle, 
    author: bookAuthor, 
    year: bookYear, 
    status: bookStatus.value,
    typeClass: "completed",
    isRead: true
  });
    completedBookList.append(newBook);
     console.log("Add Book"+bookStatus.innerText);
  }
 
}

function addBookToRead(bookElement) {
  const completedBookList = document.getElementById(COMPLETED_BOOK_ID);
  const bookId = bookElement.querySelector(".idBook").innerText;
  const bookTitle = bookElement.querySelector(".title").innerText;
  const bookAuthor = bookElement.querySelector(".author").innerText;
  const bookYear = bookElement.querySelector(".year").innerText;
  const bookStatus = bookElement.querySelector(".status");
  
    bookStatus.innerText = "Sudah";
    const movedBook = createBookItem({
    idBook : bookId,
    title : bookTitle, 
    author: bookAuthor, 
    year: bookYear, 
    status: bookStatus.innerText,
    typeClass : "completed",
    isRead: true
  });

  completedBookList.append(movedBook);
  console.log("pindahkan " +bookElement.innerText);
  bookElement.remove();
  console.log("Check Book"+bookStatus.innerText);
  
} 

function deleteCompletedBook(bookElement) {
  bookElement.remove();
}

function undoBookToRead(bookElement) {
  const uncompletedBookList = document.getElementById(UNCOMPLETED_BOOK_ID);
  const bookId = bookElement.querySelector(".idBook").innerText;
  const bookTitle = bookElement.querySelector(".title").innerText;
  const bookAuthor = bookElement.querySelector(".author").innerText;
  const bookYear = bookElement.querySelector(".year").innerText;
  const bookStatus = bookElement.querySelector(".status");

  bookStatus.innerText = "Belum";
    const undoBook = createBookItem({
      idBook : bookId,
      title : bookTitle, 
      author: bookAuthor, 
      year: bookYear, 
      status: bookStatus.innerText,
      typeClass : "uncompleted",
      isRead: false
    });

    uncompletedBookList.append(undoBook);
    bookElement.remove();
    console.log("Undo book" +bookStatus.innerText);
} 

