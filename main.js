/* ------------- EVENT LISTENERS ------------- */
document.querySelector('.add').addEventListener('click', getFetch)
document.querySelector('.remove').addEventListener('click', removeBook)
document.querySelector('.book-container').addEventListener('click', toggleDisplay)
document.querySelector('.remove-all').addEventListener('click', removeAll)

let bookTitle = []
let bookList = []

if (localStorage.getItem('bookTitle')) {
   JSON.parse(localStorage.getItem('bookTitle')).forEach(e => {
      console.log(e)
      bookList.push('<li>' + e + '</li>')
   })
   document.querySelector('ul').innerHTML = bookList.join(' ')
}

function getFetch() {
   let isbnNumber = document.querySelector('input').value
   const url = `https://openlibrary.org/isbn/${isbnNumber}.json`

   fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
         console.log(data)
         console.log(data.title)

         if (localStorage.getItem('bookTitle')) {
            bookTitle = JSON.parse(localStorage.getItem('bookTitle'))
         } else {
            bookTitle = []
         }

         if (!data.title) {
            alert('Please enter valid ISBN number')
            return
         } else if (bookTitle.includes(data.title)) {
            alert('This book has already been entered')
            return
         } else {
            bookTitle.push(data.title)
         }

         localStorage.setItem('bookTitle', JSON.stringify(bookTitle))

         addBook(bookTitle)

      })
      .catch(err => {
         console.log(`error ${err}`)
      });
}

/* ------------- ADDITIONAL FUNCTIONS ------------- */

function addBook(array) {
   let li = document.createElement('li')
   let ul = document.querySelector('ul')

   array.forEach(item => {
      li.innerText = item
      ul.appendChild(li)
   })
}

function removeBook() {
   let arr = JSON.parse(localStorage.getItem('bookTitle'))
   arr.pop()

   localStorage.setItem('bookTitle', JSON.stringify(arr))

   bookList = []

   arr.forEach(e => {
      bookList.push('<li>' + e + '</li>')
   })
   console.log(bookList)
   document.querySelector('ul').innerHTML = bookList.join(' ')
}

function removeAll() {
   if (confirm('Are you sure you want to do that? This action cannot be reversed.')) {
      localStorage.clear()
      document.querySelector('ul').innerHTML = ''
   }
}

function toggleDisplay() {
   let bookContainer = document.querySelector('.book-container')
   let pageContainer = document.querySelector('.page-container')

   bookContainer.style.animation = 'fadeOut 0.5s forwards'
   bookContainer.style.cursor = 'default'
   bookContainer.style.position = 'absolute'
   pageContainer.style.display = 'flex'
   pageContainer.style.animation = 'fadeIn 1s forwards'
}

// The Choice - 9781501130786
// Fantastic Mr. Fox - 9780140328721
// Gift of Imperfection - 9781616499600
// Daring Greatly - 9781592408412