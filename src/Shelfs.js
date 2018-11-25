import React from 'react'
import BookCard from './BookCard'

import {Col} from 'react-materialize'
class Shelfs extends React.Component {

   


    render(){
        
        let books = this.props.books;
        
        return(   

              <div className= "Shelfs"> 
              
                <h4 className="card-panel "><i className="material-icons">access_time</i> Currently Reading <br/></h4> <br/><br/>
                <ul className = "row " >    
                    {
                        Object.keys(books).map(function(key) {
                        if ( books[key].shelf === 'currentlyReading' ) {
                                return (                                
                                    <Col s={6} m={2}> 
                                        <BookCard thumb= {books[key].imageLinks.thumbnail} title = {books[key].title} id={books[key].id} authors={ books[key].authors }/>
                                    </Col>                               
                                )
                            }

                        })
                    }
                </ul>
                <h4 className="card-panel "><i className="material-icons">favorite_border</i> Want to Read</h4> <br/><br/>
                <ul className = "row " >    
                    {
                        Object.keys(books).map(function(key, i) {
                        if ( books[key].shelf === 'wantToRead' ) {
                                return (
                                    <Col s={6} m={2}> 
                                          <BookCard thumb= {books[key].imageLinks.thumbnail} title = {books[key].title} id={books[key].id } authors={ books[key].authors }/>
                                    </Col>
                                )
                            }

                        })
                    }
                 </ul>

                <h4 className="card-panel "> <i className="material-icons">check</i> Read</h4> <br/><br/>

                 <ul className = "row " >   

                        {
                            Object.keys(books).map(function(key, i) {
                            if ( books[key].shelf === 'read' ) {
                                    return (
                                        <Col s={6} m={2}> 
                                              <BookCard thumb= {books[key].imageLinks.thumbnail} title = {books[key].title} id={books[key].id} authors={ books[key].authors }/>
                                        </Col> 
                                    )
                                }

                            })
                        }
                    </ul>
              </div>

            )
    }
}

export default Shelfs
