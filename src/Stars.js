import React from 'react'
import './App.css'
class Stars extends React.Component {  
   
    constructor () {
        super();
        this.state = {
            rating : 0
        }
        
    }

    change = (s) =>{
        
        this.state.rating >=5 ?  '' : 
        
            this.setState({                
                rating : s
            })    

    }

    render(){        
      
        return(  
                         
                <div className="">
                    <center>
                        <p> 
                                
                            <a><i onClick = {()=> this.change(1) } class="material-icons"> {this.state.rating >=1 ? 'star' : 'star_border'} </i></a>
                            <a><i onClick = {()=> this.change(2) } class="material-icons"> {this.state.rating >=2 ? 'star' : 'star_border'} </i></a> 
                            <a><i onClick = {()=> this.change(3) } class="material-icons"> {this.state.rating >=3 ? 'star' : 'star_border'} </i></a> 
                            <a><i onClick = {()=> this.change(4) } class="material-icons"> {this.state.rating >=4 ? 'star' : 'star_border'} </i></a> 
                            <a><i onClick = {()=> this.change(5) } class="material-icons"> {this.state.rating >=5 ? 'star' : 'star_border'} </i></a> 
                                 
                        </p>       
                    </center>               
                </div>   
            
        )
    }
}

export default Stars;
