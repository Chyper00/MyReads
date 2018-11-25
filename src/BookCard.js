import React from 'react'
import * as BooksAPI from './BooksAPI';
import {Dropdown,NavItem, Col,Card,Row} from 'react-materialize'


class BookCard extends React.Component {

  uBook = (id, status) => {
    BooksAPI.update({id : id}, status).then (value =>{
       
        
        console.log(value);
        window.location.reload();
        
    })
    console.log("updadted")
    window.Materialize.toast('Added :)', 10000)
    // foo para atualizar os livros

  }


    render(){
        return(     

          <Row>
              <Col s={12} m={12}>
                  
                     
                  <Card className='small'  actions={[
                 <p > 
                      <div class="card-image"><img class="responsive"src={this.props.thumb}/></div> <div className="truncate">   <p>{this.props.title}  <br/><small> {this.props.authors} </small></p></div>
                 
                      
                      
                       

                        <div className="right-align flow-text">

                        <Dropdown trigger={
                            <a href="#" className=" blue-text text-darken-2" ><i class="material-icons">arrow_drop_down</i> </a>}>
                                <NavItem onClick = {()=> this.uBook(this.props.id, 'currentlyReading')}><small className="blue-text text-darken-2">Currently Reading</small></NavItem>
                                <NavItem onClick = {()=> this.uBook(this.props.id, 'wantToRead')}><small className="blue-text text-darken-2">Want to Read </small></NavItem>                
                                <NavItem onClick = {()=> this.uBook(this.props.id, 'read') }><small className="blue-text text-darken-2">Read </small></NavItem>    
                                <hr/>
                                <NavItem onClick = {()=> this.uBook(this.props.id, 'none') }><small className="blue-text text-darken-2">None </small></NavItem>  
                            </Dropdown>
                        </div>
                        
                        </p>
                      
                    ]}>
                        
                    </Card>


              </Col>
          
          </Row>
          
         
              
           

    )
}
}

export default BookCard
