const dateTime = document.getElementById('date-time');
const title = document.getElementById('page-title');
const home = document.getElementById('List-section');
const addBook = document.getElementById('Add-section');
const contact = document.getElementById('contactPage');
const homeLink = document.getElementById('listLk');
const addLink = document.getElementById('addLk');
const contactLink = document.getElementById('contactLk');

const date = () => {
/* eslint-disable */
  window.addEventListener('load', () => {
      const { DateTime } = luxon;
      this.today = DateTime.now();
      dateTime.textContent = this.today.toLocaleString(DateTime.DATETIME_MED);      
  });
/* eslint-enable */
};

home.style.display = 'block';
addBook.style.display = 'none';
contact.style.display = 'none';

homeLink.addEventListener('click', () => {
  title.style.display = 'block';
  home.style.display = 'block';
  addBook.style.display = 'none';
  contact.style.display = 'none';
});

addLink.addEventListener('click', () => {
  addBook.style.display = 'block';
  title.style.display = 'none';
  home.style.display = 'none';
  contact.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  addBook.style.display = 'none';
  contact.style.display = 'block';
  title.style.display = 'none';
  contact.style.marginTop = '80px';
  home.style.display = 'none';
});

date();
