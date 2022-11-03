# Book Tracker

This web app is built using Open Library API and utilizes local storage to store all books entered into the input.

**You can check it out here:** [book tracker](https://book-tracker-hwm.netlify.app/)

![floating book gif](https://media.giphy.com/media/K0Zoqww2foGp1M5vjD/giphy.gif)

## How It's Made:
**Languages used: HTML, CSS, JavaScript**

This project was incredibly fun to make! I wanted to start off with creating a book purely made from CSS and animate it to float. I decided to have the  
book show on screen load and once clicked, would take you to the actual book tracker itself. I added the same floating book on a smaller scale to the
tracker itself, to act as a logo.

The tracker uses Open Library API to retrieve the name of the book. I know it isn't necessarily practical to type in an ISBN number to find a book vs. 
typing in a book name and logging the name but I wanted to showcase my ability to use an API. The book name is displayed on the screen after clicking the
'add book' button and is stored into local storage. The page can be revisited after closing the browser and the book names will still be displayed. 
There are two additional buttons, 'remove last book' and 'clear book list', that allow the user to remove a book from their list or clear the list 
altogether. The user can add an infinite number of books to their list. A scroll bar will appear once the list size becomes larger than the container
holding the list.

The JavaScript was the most challenging part (as per usual). I had some challenges working with the items being stored in local storage, since they are 
stored as srtings by default and I needed to convert them into an array. I was able to work through this issue by utilizing the JSON.parse() and 
JSON.stringify() methods, which I had never used before. In this project, I made a point of creating functions for specific actions, such as: adding a 
book, removing a book and clearing the book list. This makes the code look a lot cleaner/more readable than just writiing if/else statements inside of the
function that retrieves the info from the API. This is a step for me towards writing more thoughtful and organized code.

![website gif](https://media.giphy.com/media/rYGeEni4KG0TKWK1tz/giphy.gif)

## Optimizations:

The first iteration of this website had a lot of issues with responsive styling. I decided to redo the whole website, as I was frustrated with the way it
looked/was functioning on mobile and it didn't look very good. I spent two days refactoring the code, spending more time to understand 
what I was doing with the CSS, mainly having a better grasp of flexbox and its behaviours.

The main improvements I would make to this project would be to be able to click on a specific book you would like to delete from the list and remove
that book. As of now, the user can only remove the last entered book on the list. If I have more time in the future, I want to ensure that all book titles
will be capitalized. I noticed upon testing that a couple book titles did not have the first letter of every word in capitals ie. ('Daring Greatly'
displayed as 'daring greatly'). I would also like to refactor the CSS at some point to be a bit more structured and organized in terms of assigning
font families, font sizes and colours to specific elements. I think I could cut down on some repetition and make it easier to make changes to the code by
doing this. 

## Lessons Learned: 
- creating an image out of pure CSS and animating it
- better understanding of how flexbox works
- getting information from an API and displaying it in the DOM
- working with local storage (adding items, removing items, converting to an array from a string)
