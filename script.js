class AwesomeBooks {
  constructor() {
    this.bookArray = [];
  }

  addBook(booktitle, bookauthor) {
    const book = {
      title: booktitle,
      author: bookauthor,
    };

    let shouldAdd = true;
    if (booktitle && bookauthor) {
      this.bookArray.forEach((book) => {
        if (book.title === booktitle) {
          shouldAdd = false;
        }
      });

      if (shouldAdd) {
        this.bookArray.push(book);
      }
    }
  }

  removeBook(title) {
    this.bookArray = this.bookArray.filter((book) => book.title !== title);
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.bookArray));
  }

  populateTable() {
    const tableList = document.getElementById('bookList');
    let id = 1;
    this.bookArray.forEach((book) => {
      const tr = document.createElement('tr');
      tr.setAttribute('class', 'tableRow');
      tr.setAttribute('id', `${id}`);
      id += 1;
      if (id % 2 === 0) {
        tr.style.backgroundColor = '#ccc';
      } else {
        tr.style.backgroundColor = '#fff';
      }
      const td = document.createElement('td');
      td.setAttribute('class', 'cells');
      td.innerHTML = `<span>"${book.title}" by ${book.author}</span>`;

      const removeButton = document.createElement('button');
      removeButton.className = 'removeButton';
      removeButton.type = 'button';
      removeButton.innerHTML = 'Remove';

      removeButton.addEventListener('click', (e) => {
        const title = e.target.parentNode.firstChild.textContent;
        this.removeBook(book.title);
        this.saveToLocalStorage();
        window.location.reload();
      });

      td.appendChild(removeButton);
      tr.appendChild(td);
      tableList.appendChild(tr);
    });
  }

  handleSubmit() {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('book_title');
      const authorInput = document.getElementById('book_author');
      this.addBook(titleInput.value, authorInput.value);
      this.saveToLocalStorage();
      titleInput.value = '';
      authorInput.value = '';
      window.location.reload();
    });
  }

  reloadPage() {
    window.onload = () => {
      if (localStorage.getItem('books') !== null) {
        this.bookArray = JSON.parse(localStorage.getItem('books'));
        this.populateTable();
      }
    };
  }
}

const books = new AwesomeBooks();

books.handleSubmit();
books.reloadPage();