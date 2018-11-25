import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelfs from './Shelfs';
import {Button} from 'react-materialize'
import {Link, Route} from 'react-router-dom'
import Search from './Search';


const Opt = (props) => {
  return (
    <button > teste </button>
  )
}

class BooksApp extends React.Component {


  constructor(){

    super();
    this.state = {

      allBooks : '',
      isLoading : true

    }
  }


  change() {
    this.setState ({
      isLoading : true 
    })

  }

  getAllBooks = () => { 
    BooksAPI.getAll().then(all => {
      this.setState ({
        allBooks : all,
        isLoading : false 
      })
    })
  }

 
 
 
  

  componentDidMount(){
    this.getAllBooks();    
  }
 
  render() {
    let allTheBooks = this.state.allBooks
    console.log(this.state.allBooks[0])
    
    
    return (
     
      <div className="container">
      
        { this.state.isLoading &&
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        }
        <Route exact path='/' render ={() => ( 
        
           <Shelfs books = {allTheBooks} btn = {Opt} change = {this.change} />    
            
            
        )}/>

        <Route exact path='/search' render ={() => (    
          
          <Search/>

          )}/>

      <div className="open-search">
          <Link to='/search'><Button floating large className='blue '  waves='light' icon='add' /></Link>
      </div>
        
          

        

      </div>
     
    )
  }
}

export default BooksApp
