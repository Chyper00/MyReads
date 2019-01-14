import React from 'react'
import {Dropdown,NavItem,Modal,Button} from 'react-materialize'
import Stars from './Stars'
import './App.css'
class Books extends React.Component {   
    render(){        
        const { thumb, title, id, moveBooks, shelf, remove,previewLink,description  } = this.props; 
       
        
      
        return(  
                         
                <div className="card transparent z-depth-4">
                    <small className =" cardbg"> {shelf} </small>
                    <img  className="" style={{ width: '100%', height: '200px' }} alt = {title} src={thumb} />
                    <div className = "">
                        <div className="center-align">
                            <small>  <p className="truncate" >{title}</p>  </small>
                        </div> 
                       {shelf === 'wantToRead' || '' ? '' : <Stars/> }                                         
                        <div className="right-align" style={{ paddingRight : '10px' }}>
                            <Dropdown trigger={
                                <a href="!#"  ><i className="material-icons">more_horiz</i> </a>}>
                                <NavItem > 
                                    <center><Modal 
                                        header='Description'
                                        trigger={<Button  > <i class="material-icons">remove_red_eye</i> </Button>}>
                                            <p> {description} </p>
                                            <p> </p>
                                            <br/>
                                            <p> <a href = {previewLink} >Buy</a> </p>
                                    </Modal> </center>
                                </NavItem>
                                <NavItem onClick = {()=> moveBooks(id, 'currentlyReading')}><small className="blue-text text-darken-2">Currently Reading</small></NavItem>
                                <NavItem onClick = {()=> moveBooks(id, 'wantToRead')}><small className="blue-text text-darken-2">Want to Read </small></NavItem>                
                                <NavItem onClick = {()=> moveBooks(id, 'read') }><small className="blue-text text-darken-2">Read </small></NavItem><hr/>                        
                                <NavItem onClick = {()=> remove(id, 'none') }><small className="blue-text text-darken-2">Delete </small></NavItem> 
                                
                            </Dropdown>
                        </div>
                                            
                       
                    </div>
                </div>   
            
        )
    }
}

export default Books
