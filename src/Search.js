import React from 'react'
import { Debounce } from 'react-throttle';
import './App.css'
import Books from './Books'
import {Col,Row,} from 'react-materialize'
import {Link} from 'react-router-dom'

class Search extends React.Component {
    constructor () {
      super();
        this.state = {
            query : 'a',
            books : ''
        }
    }

    handleChange = (e) => {

       this.setState({
           books: this.props.search(e.target.value)
       }) 
      
    }
 
    render() {
        const {books} = this.state;
        const {moveBooks} = this.props
        
        return (    
        
        <div className="row">
            <form className="col s12">
                <div className="row">            
                    <div className="col l1">
                        <Link to='/'> <h2><i className="material-icons">arrow_back</i></h2> </Link>
                    </div>
                    <div className="input-field col m8">
                        <Debounce time="100" handler="onChange">
                            <input placeholder="Name of the book ..." id="bSearch" type="text" class="validate" onChange={this.handleChange}/>  
                        </Debounce> 
                    </div>
                </div>
            </form>
            <div className="row"> 

            <Row>
                { 
                    books === undefined  ? 
                    <h2> No books found ... </h2> :
                    Object.keys(books).map(function(key) {

                        
                        return ( 
                            
                            <Col m={2} s={6}>                                    
                                  <Books 
                                    title = {books[key].title} 
                                    thumb = {  books[key].hasOwnProperty('imageLinks') ? books[key].imageLinks.smallThumbnail : 'https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013'} 
                                    moveBooks = {moveBooks} 
                                    id = {books[key].id}
                                    authors = {books[key].authors}
                                    shelf = {books[key].shelf}  
                                />                                             
                            </Col> 
                                                                                              
                        )  
                        
                        
                                              

                    })
                }
            </Row> 
            
            </div>
        </div>
        
        )
    }
}

export default Search
