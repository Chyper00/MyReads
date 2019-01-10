import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => (

        <div>
            <nav>
                <div className="nav-wrapper indigo lighten-1">        


                <div class="fixed-action-btn">
                    
                    <Link to='/Search' className="btn-floating btn-large waves-effect waves-light indigo lighten-1"><i className="material-icons">search</i> </Link>
                    
                </div>


                
                   
                    <ul className="left">
                        <li  className="active" ><a href="#!" onClick = {() => props.grid(props.gridValue)} > {props.gridValue ? <i class="material-icons">view_module</i> : <i class="material-icons">view_headline</i>} </a></li>
                    </ul>
                                       
                    <ul id="nav-mobile" className="">
                        <li className =""><Link to='/' onClick={()=> props.change('all')}>All</Link></li>
                        <li className =""><Link to='/' onClick={()=> props.change('currentlyReading')}>Currently Reading</Link></li>
                        <li className =""><Link to='/' onClick={()=> props.change('wantToRead')}>Want to Read</Link></li>
                        <li className =""><Link to='/' onClick={()=> props.change('read')}>Read</Link></li>
                    </ul>
                </div>
            </nav>                 
         </div>
    
  )

  export default Nav;