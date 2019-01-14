import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import Search from './Search';
import BookShelve from './BookShelve'
import Nav from './Nav';


// efeito 
const styles = {
  trasition : 'all 1s ease-out'
}

class BooksApp extends React.Component {

  constructor(){
    super();
      this.state = {
        allBooks : '', // todos os livros
        books : '', // livros da busca
        isLoading : true, // controle do loading
        shelf : 'all', // controle das estantes
        gridValue : true, // controle do grid
        movBooks : '' // livros que mudao de estante
      }
  }


  // controla o preloader
  triggerLoading = (swtc) =>{
    swtc ? this.setState ({  isLoading : true   }) : this.setState ({   isLoading : false    })
  } 

  //controla as estantes
  navChange = (shelf) =>{
    this.setState ({
      shelf : shelf
    })
    this.loadBooksFromState (this.state.movBooks);
  }

  // faz a busca e verifica se o query nao esta em branco
  search = (query) => {

    query === '' ? 
      this.setState({
        books: '',
        isLoading : false
      })
    :
    this.triggerLoading (true);
    BooksAPI.search(query).then(all => {     
      this.setState({
          books: all,
          isLoading : false
      })
    }).catch(err =>{
        this.triggerLoading (true);
        console.log(err)
        this.setState({
          books: '',
          isLoading : false
      })
    })
    return this.state.books
  } 


// move os livros de estatante , o input e o id do livro e o status e a estatante
  moveBooks  = (bookId, status) => { 

    let bk = this.state.movBooks;
    BooksAPI.update({id : bookId}, status).then (value =>{ 
      window.Materialize.toast(`Moved !`, 1000) 
      // acha id do livro que esta mudando e compara com o que ja tem no state
      let movBooksD =  bk.filter((b) => {   if(b.id === bookId ){ return b.shelf = status}   })
      // substitui o array que foi mudado
      bk  = bk.find(item => item !== movBooksD)      
      this.setState({
        movBooks : bk
      })
      this.loadBooksFromApi();
         
    })       
  }

  // remove o livro e carrega o estado 
  remove  = (bookId, status) => { 

    let bk = this.state.movBooks;
    BooksAPI.update({id : bookId}, status).then (value =>{ 

      window.Materialize.toast(`Moved !`, 1000) 
      // acha id do livro que esta mudando e compara com o que ja tem no state
      let movBooksD =  bk.filter((b) => {   if(b.id === bookId ){ return b.shelf = status}   })
      // substitui o array que foi mudado
      bk  = bk.find(item => item !== movBooksD)      
      this.setState({
        movBooks : bk
      })
      this.loadBooksFromApi();
         
    })       
  }


  // controla o status do grid
  grid = (gridV) =>{

    this.setState({ gridValue : !gridV })

  }

  
  // carrega os livros do estado, a ideia e passar como argumento os novos livros, removendo os que foram movidos.
  loadBooksFromState = (books) => { 
    this.triggerLoading (true);
    this.setState ({
      allBooks : books,
      isLoading : false 
    })
  }

// carrega os livros da api 
  loadBooksFromApi () {    
    this.triggerLoading (true);
     BooksAPI.getAll().then(all => {      
        this.setState({ 
          movBooks : all,
          isLoading : false 
        }) 
    })    
  }

  // ao montar o componente carrega os livros
  async componentDidMount(){      
    this.loadBooksFromApi(); 
  }
 
  render() {    
    return (
        <div className='container-fluid'>
          <Nav change = {this.navChange} grid = {this.grid} gridValue = {this.state.gridValue}/> 
          <div className="container"> 
              { this.state.isLoading &&  
                <div className="progress">
                  <div className="indeterminate"></div>
                </div>  
              }            
              <Route exact path='/' render ={() => (             
                <BookShelve styles = {{...styles, opacity : 2.2, trasition: 'scale("3")' }}                         
                    books= {this.state.movBooks}                       
                    s = {this.state.shelf} 
                    moveBooks = {this.moveBooks}  
                    grid = {this.state.gridValue}
                    remove = {this.remove}
                />            
              )}/>
              <Route exact path='/search' render ={() => (  
                <Search moveBooks = {this.moveBooks} search = {this.search} shelfBooks = { this.state.movBooks } load ={this.loadBooksFromState}/>
              )}/>            
          </div>
        </div>     
     )
   }
}

export default BooksApp
