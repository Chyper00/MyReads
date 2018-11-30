import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => (

        <div>
            <nav>
                <div className="nav-wrapper indigo lighten-1">                       
                    <Link to='/Search' className="brand-logo right"><i className="material-icons">search</i> </Link>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
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