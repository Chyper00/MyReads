# MyReads 

My Reads is a project from <a href="https://udacity.com">Udacity</a>


How to use : 

* `npm install`
* `npm start`



## Documentation 

`App.js` is the main component that has :

<<<<<<< HEAD
## Documentation 

`App.js` is the main component that has :

* ` async loadBooks () ` that make a async request with a promice, loading all the books.
* ` moveBooks  = (bookId, status) =>` an arrow function that recives `bookId` , `status` from `Books.js` and make a uptade promice, that change the shelf of the book.
* 
* ` const styles = {   trasition : 'all 1s ease-out' } ` Animations are important, they let the user know where he is, and where he went. So, that line make a transition in anything that is possible a trasition.
* `shelves.map(i =>` map an array, that has `currently read`, `want to read`, `read`, and call <BookShelve/>



`BookShelve.js` is a simple component that separetes books to `currently read`, `want to read`, `read` (Recomendation from Guilherme udacity mentor). 
* ` Object.keys(books).map(function(key) ` Map the books of the ` async loadBooks () ` from `App.js` and pass the data for the child component `<Books/>`




# Links that i used

` Matelialize `https://materializecss.com/
` react-materialize `https://react-materialize.github.io/#/
` What is promice [PT-BR] `https://braziljs.org/blog/promises-no-javascript/
` How to map a object keys `https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
` how to animate in react `https://www.youtube.com/watch?v=ztvNwFV0Ai0, https://reactjs.org/docs/animation.html
` Arrow Function ` https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
` async await [PT-BR]` https://tableless.com.br/entendendo-o-async-e-o-await-em-javascript/


# Licence 

MIT
=======
* ` async loadBooks () ` that make a async request with a promice, loading all the books.
* ` moveBooks  = (bookId, status) =>` an arrow function that recives `bookId` , `status` from `Books.js` and make a uptade promice that change the shelf of the book.
* ` const styles = {   trasition : 'all 1s ease-out' } ` Animations are important, they let the user know where he is, and where he went, so that line make a transition in anything that is possible a trasition.
* ` Object.keys(books).map(function(key) ` Map the books of the ` async loadBooks () ` and pass the data for the child component `<Books/>`
>>>>>>> 0f7455e6649a927d48e93a50a1f2f64473369380
