import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import Search from './Search';
import BookShelve from './BookShelve'
import Nav from './Nav';


const styles = {
  trasition : 'all 1s ease-out'
}

/*const shelves = [
  {
      title: 'Currently Reading',
      shelve: 'currentlyReading'
  },
  {
      title: 'Want to Read',
      shelve: 'wantToRead'
  },
  {
      title: 'Read',
      shelve: 'read'
  }
]
*/

class BooksApp extends React.Component {

  constructor(){
    super();
      this.state = {
        allBooks : '',
        books : '',
        isLoading : true,
        shelf : 'all',
        movBooks : ''
      }
  }

  triggerLoading = (swtc) =>{
    swtc ? this.setState ({  isLoading : true   }) : this.setState ({   isLoading : false    })
  } 

  navChange = (shelf) =>{
    this.setState ({
      shelf : shelf
    })
    this.loadBooksFromState (this.state.movBooks);
  }

  search = (query) => {
    this.triggerLoading (true);
    BooksAPI.search(query).then(all => {     
      this.setState({
          books: all,
          isLoading : false
      })
    }).catch(err =>{
        this.triggerLoading (true);
        console.log(err)
        this.setState({
          books: '',
          isLoading : false
      })
    })
    return this.state.books
  } 

  moveBooks  = (bookId, status) => { 

    let bk = this.state.movBooks;
    BooksAPI.update({id : bookId}, status).then (value =>{ 

      console.log(value)
      window.Materialize.toast(`Moved !`, 1000) 
      // acha id do livro que esta mudando e compara com o que ja tem no state
      let movBooksD =  bk.filter((b) => {   if(b.id === bookId ){ return b.shelf = status}   })
      // substitui o array que foi mudado
      bk  = bk.filter(item => item !== movBooksD)      
      this.setState({
        movBooks : bk
      })

      //this.loadBooksFromState(bk);
      this.loadBooksFromApi();
         
    })       
  }

  add = () => {

  }


  remove = (bookId, status) => {
    

  }

  loadBooksFromState = (books) => { 
    //console.log(books)   
    this.triggerLoading (true);
    this.setState ({
      allBooks : books,
      isLoading : false 
    })
  }

  async loadBooksFromApi () {    
    this.triggerLoading (true);
     BooksAPI.getAll().then(all => { 
     // console.log(all) 
        this.setState({ 
          movBooks : all,
          isLoading : false 
        }) 
    })    
  }

  async componentDidMount(){      
    this.loadBooksFromApi(); 
  }
 
  render() {    
    return (
        <div >
          <Nav change = {this.navChange}/> 
          <div className="container"> 
              { this.state.isLoading &&  
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>  
              }            
              <Route exact path='/' render ={() => (             
                <BookShelve styles = {{...styles, opacity : 2.2, trasition: 'scale("3")' }}                         
                    books= {this.state.movBooks}                       
                    s = {this.state.shelf} 
                    moveBooks = {this.moveBooks}  
                />            
              )}/>
              <Route exact path='/search' render ={() => (  
                <Search moveBooks = {this.moveBooks} search = {this.search} shelfBooks = { this.state.movBooks } load ={this.loadBooksFromState}/>
              )}/>            
          </div>
        </div>     
     )
   }
}

export default BooksApp
