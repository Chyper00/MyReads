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
        query : 'a',
        shelf : 'all'
      }
  }

  triggerLoading = (swtc) =>{
    swtc ? this.setState ({  isLoading : true   }) : this.setState ({   isLoading : false    })
  } 

  navChange = (shelf) =>{

    this.setState ({
      shelf : shelf
    })
    this.loadBooks (); 

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
    })

    return this.state.books
  } 

  moveBooks  = (bookId, status) => {
    this.triggerLoading (true);
    BooksAPI.update({id : bookId}, status).then (value =>{ 
      window.Materialize.toast(`Moved !`, 1000)      
      this.loadBooks (); 
    })  
  }

  async loadBooks () {
    this.triggerLoading (true);
    await BooksAPI.getAll().then(all => { 
        this.setState({ 
          allBooks : all,
          isLoading : false 
        }) 
    })
  }

  async componentDidMount(){      
    this.loadBooks(); 
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
                        books= {this.state.allBooks}                       
                        s = {this.state.shelf} 
                        moveBooks = {this.moveBooks}  
                    />            
            )}/>

            <Route exact path='/search' render ={() => (  
                <Search moveBooks = {this.moveBooks} search = {this.search} />
            )}/>            
        </div>
      </div>
     
      )
   }
}

export default BooksApp
