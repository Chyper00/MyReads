import React from 'react'
import {Dropdown,NavItem} from 'react-materialize'
import './App.css'
class Books extends React.Component {   
    render(){        
        const { thumb, title, id, moveBooks, shelf, remove } = this.props; 
              
        return(  
            <div>
                <div className="card transparent z-depth-4">
                    <small className =" cardbg"> {shelf} </small>
                    <img  className="" style={{ width: '100%', height: 210 }} alt = {title} src={thumb} />
                    <div className = "">
                        <div className="center-align">
                            <small>  <p className="truncate" >{title}</p>  </small>
                        </div>                    
                        <div className="right-align" style={{ paddingRight : '10px' }}>
                            <Dropdown trigger={
                                <a href="!#"  ><i className="material-icons">more_horiz</i> </a>}>
                                <NavItem onClick = {()=> moveBooks(id, 'currentlyReading')}><small className="blue-text text-darken-2">Currently Reading</small></NavItem>
                                <NavItem onClick = {()=> moveBooks(id, 'wantToRead')}><small className="blue-text text-darken-2">Want to Read </small></NavItem>                
                                <NavItem onClick = {()=> moveBooks(id, 'read') }><small className="blue-text text-darken-2">Read </small></NavItem><hr/>                        
                                <NavItem onClick = {()=> remove(id, 'none') }><small className="blue-text text-darken-2">Delete </small></NavItem>  
                            </Dropdown>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Books
