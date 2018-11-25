import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCard from './BookCard'

import {Button, Dropdown,NavItem, Col,Card,CardTitle,Row,CardPanel,Toast} from 'react-materialize'
import {Link} from 'react-router-dom'




class Search extends React.Component {
    constructor () {
        super();
        this.state = {
            query : 'a',
            books : ''
        }

        
    }


    sBook = () => {

        BooksAPI.search(this.state.query).then(all => {            
            console.log(all)
            this.setState({
                books: all
            })
        })
    }
    componentDidMount(){
        this.sBook();
        
    }

    handleChange = (e) =>{
        

        console.log(e.target.value)
        this.setState({
            query: e.target.value
        })

         BooksAPI.search(this.state.query).then(all => {            
            console.log(all)
            this.setState({
                books: all
            })
        }).catch(err =>{
            console.log(err)
        })

    }
 
  render() {
    let books = this.state.books;
    console.log(books);
    
    
    return (
     
    
   <div class="row">
    
        <form class="col s12">
            <div class="row">
            
                <div class="col l1">
                <Link to='/'>    <h2><a href=""> <i class="material-icons">arrow_back</i> </a></h2> </Link>
                </div>
                <div class="input-field col m8">
                <input placeholder="Name of the book" id="bSearch" type="text" class="validate" onChange={this.handleChange}/>
                </div>
            </div>
        </form>

        <br/> 
        <div class="row">  
            {this.state.books ===  undefined  ? <p> No books found</p> : 
            
            Object.keys(books).map(function(key) {
               
                return (      
                    <Col s={6} m={2}>                      
                    
                    { books[key].hasOwnProperty('imageLinks') ? <p><BookCard  thumb = {books[key].imageLinks.thumbnail } title = {books[key].title} id={books[key].id} authors={ books[key].authors }/> </p> : <p>  <BookCard  thumb = { 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' } title = {books[key].title} id={books[key].id} authors={ books[key].authors }/>  </p>}
                    
                        
                    </Col>  
                                                 
                )
            
        })
        
        
        } 
     </div> 

     </div>
     
    )
  }
}

export default Search
