import React from 'react'
import {Dropdown,NavItem} from 'react-materialize'
import './App.css'

class Books extends React.Component {
    
    render(){
        
        const { thumb, title, id, moveBooks,authors, shelf } = this.props;
        return(              
            <div className ='card transparent z-depth-4 '> 
                <small className= 'cardbg'> {shelf}   </small>
                <div className ='center-align'>
                    <img className ="" style={{ width: '100%', height: 195}} alt = {title} src={thumb}/>
                    <p class="truncate" >{title}<br/><small> {authors} <br/>  </small></p>
                    <div className ='center-align'>
                        <Dropdown trigger={
                            <a href="!#" className="blue-text text-darken-2" ><i className="material-icons">arrow_drop_down</i> </a>}>
                            <NavItem onClick = {()=> moveBooks(id, 'currentlyReading')}><small className="blue-text text-darken-2">Currently Reading</small></NavItem>
                            <NavItem onClick = {()=> moveBooks(id, 'wantToRead')}><small className="blue-text text-darken-2">Want to Read </small></NavItem>                
                            <NavItem onClick = {()=> moveBooks(id, 'read') }><small className="blue-text text-darken-2">Read </small></NavItem><hr/>                        
                            <NavItem onClick = {()=> moveBooks(id, 'none') }><small className="blue-text text-darken-2">Delete </small></NavItem>  
                        </Dropdown>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Books
