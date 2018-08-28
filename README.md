# MyReads Project

The app consists of two pages: Main and Search page.
The main page shows 3 shelves
* Currently Reading
* Want to Read
* Read
and each book is shown on the correct shelf. The search page allows user to search for books based on a query.

## Functionality
There is a control tied to each book instance that allows user to move books between shelves.
The user can move a book to a different shelf and when the browser refreshes, the same information is displayed on the page. 
Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf appears selected on the search page. 
If that book's shelf is changed on the search page, that change is reflected on the main page as well. There is also the option "None" which is  selected when a book has not been assigned to a shelf.

## Installation
* Clone the repository or download the zip folder of the project 
* In project folder, install all project dependencies with `npm install`
* Start the development server with `npm start`

