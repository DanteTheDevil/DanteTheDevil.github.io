const books = {
    'Jewels of Nizam': 'Geeta Devi',
    'Cakes & Bakes': 'Sanjeev Kapoor',
    'Jamie\'s Kitchen': 'Jamie Oliver',
    'Inexpensive Family Meals': 'Simon Holst',
    'Paleo Slow Cooking':'Chrissy Gower',
    'Cook Like an Italian': 'Tobie Puttock',
    'Suneeta Vaswani': 'Geeta Devi',
    'Jamie Does': 'Jamie Oliver',
    'Jamie\'s italy': 'Jamie Oliver',
    'Vegetables Cookbook':'Matthew Biggs'
};

const contentObject = document.getElementsByClassName('container__content')[0];

for(let book in books) {
  let newBook = document.createElement('li');
  let img = document.createElement('img');
  let title = document.createElement('pre');
  let author = document.createElement('pre');

  img.setAttribute('src', `./build/images/${book}.png`);
  title.innerHTML = `${book}`;
  author.innerHTML = `${books[book]}`;
  console.log(books[book]);
  newBook.append(img, title, author);
  contentObject.append(newBook);
}
