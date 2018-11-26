#MyReads 

My Reads is a project from <a href="https://udacity.com">Udacity</a>


How to use : 

* `npm install`
* `npm start`



## Documentation 

`App.js` is the main component that has :

* ` async loadBooks () ` that make a async request with a promice, loading all the books.
* ` moveBooks  = (bookId, status) =>` an arrow function that recives `bookId` , `status` from `Books.js` and make a uptade promice that change the shelf of the book.
* ` const styles = {   trasition : 'all 1s ease-out' } ` Animations are important, they let the user know where he is, and where he went, so that line make a transition in anything that is possible a trasition.
* ` Object.keys(books).map(function(key) ` Map the books of the ` async loadBooks () ` and pass the data for the child component `<Books/>`
