import React from 'react'
import { Debounce } from 'react-throttle';
import './App.css'
import Books from './Books'
import {Col,Row,} from 'react-materialize'
import {Link} from 'react-router-dom'

class Search extends React.Component {
    state = {
        
            query : '',
            label : '',
            books : ''
        }
    

    handleChange = (e) => {

       this.setState({
           books: this.props.search(e.target.value)
       }) 
      
    }
 
    render() {
        const {books} = this.state;
        const {moveBooks,shelfBooks,load} = this.props
        
        return (    
        
        <div className="row">
            <form className="col s12">
                <div className="row">            
                    <div className="col l1">
                        <Link to='/' onClick= {() => load(shelfBooks)}> <h2><i className="material-icons">arrow_back</i></h2> </Link>
                    </div>
                    <div className="input-field col m8">
                        <Debounce time="300" handler="onChange">
                            <input placeholder="Name of the book ..." id="bSearch" type="text" class="validate" onChange={this.handleChange}/>  
                        </Debounce> 
                    </div>
                </div>
            </form>
            <div className="row"> 

            <Row>
                { 
                    books === undefined  || books === '' ?
                    <h2 > No books found ... </h2> :
                    Object.keys(books).map(key => {   
                     
                          let  tag =  Object.keys(shelfBooks).map(k => {   
                            return ( shelfBooks[k].id === books[key].id ? shelfBooks[k].shelf : '' );
                          } )
                                    
                        return (                             
                           <Col m={2} s={6} key='key'>                                   
                                  <Books 
                                    title = {books[key].title} 
                                    thumb = {books[key].hasOwnProperty('imageLinks') ? books[key].imageLinks.smallThumbnail : 'https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013'} 
                                    moveBooks = {moveBooks} 
                                    id = {books[key].id}
                                    authors = {books[key].authors}                                    
                                    shelf = {tag } 
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
 