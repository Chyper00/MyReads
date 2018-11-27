import React from 'react'
import Books from './Books'

import {Col,Row} from 'react-materialize'


class BookShelve extends React.Component {
  
    render(){
        const {books, moveBooks,s } = this.props;   
       
    return(   
        <div >  
            <br/>
            <Row>
                { 
                 Object.keys(books).map(function(key) {                    
                   return (
                        books[key].shelf === s ? 
                     
                            <Col m={2} s={6}>
                                <Books 
                                    title = {books[key].title} 
                                    thumb = {books[key].imageLinks.smallThumbnail} 
                                    moveBooks = {moveBooks} 
                                    id = {books[key].id}
                                    authors = {books[key].authors}
                                    shelf = {books[key].shelf}                                
                                />     
                            </Col> 

                            :
                            
                            
                              s === 'all'  ?

                              <Col m={2} s={6}>
                                    <Books 
                                        title = {books[key].title} 
                                        thumb = {books[key].imageLinks.smallThumbnail} 
                                        moveBooks = {moveBooks} 
                                        id = {books[key].id}
                                        authors = {books[key].authors}
                                        shelf = {books[key].shelf}                                
                                    />     
                                </Col>
                                :
                                <p></p>



                           
                   )
                                                                                    
                  
                })
                }
                
            </Row>  
        </div> 
        

        )
    }
}

export default BookShelve
