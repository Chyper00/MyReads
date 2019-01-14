import React from 'react'
import Books from './Books'

import {Col,Row} from 'react-materialize'


class BookShelve extends React.Component {
  
    render(){

        const {books, moveBooks, s,remove} = this.props;   
       
    return(   
      
            
            <Row>
                
                { 
                    Object.keys(books).map(function(key) {                    
                    return (
                        

                            books[key].shelf === s ? 

                            
                            <Col l = {3} xl = {2} m={3} s={6}  key = {key}>
                                   <Books 
                                        title = {books[key].title} 
                                        thumb = {books[key].hasOwnProperty('imageLinks') ? books[key].imageLinks.smallThumbnail : 'https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013'} 
                                        moveBooks = {moveBooks} 
                                        id = {books[key].id}
                                        authors = {books[key].authors}
                                        desc = {books[key].description}
                                        shelf = {books[key].shelf}   
                                        remove = {remove}
                                        previewLink={books[key].previewLink}
                                        description = {books[key].description}
                                                                  
                                    />     
                            </Col> 
                            
                                

                            :   s === 'all'  ?

                                <Col l = {3} xl = {2} m={3} s={6}  key = {key}>
                                        <Books 
                                            title = {books[key].title} 
                                            thumb = {books[key].hasOwnProperty('imageLinks') ? books[key].imageLinks.smallThumbnail : 'https://vignette.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif/revision/latest?cb=20130902173013'} 
                                            moveBooks = {moveBooks} 
                                            id = {books[key].id}
                                            desc = {books[key].description}
                                            authors = {books[key].authors}
                                            shelf = {books[key].shelf} 
                                            remove =  {remove}    
                                            previewLink={books[key].previewLink}   
                                            description = {books[key].description}                                                                  
                                        />     
                                </Col>
                                    
                            :  ''                        
                    )       
                    })
                }
                
            </Row>  
      
        

        )
    }
}

export default BookShelve
