import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks.js'

class BooksApp extends React.Component {
   state = { 
   books:[]
   }
   
componentDidMount(){
  BooksAPI.getAll().then((books) => {
  	console.log(books);
    this.setState({ books: books})
  }).catch(function(e) {
  console.log(e); 
})
}

updateShelf=(book,shelf)=>{
  BooksAPI.update(book, shelf).then(() => {
    //so it reload automatically when we change the shelf we call again getAll()
    return BooksAPI.getAll()
	}).then((books) => { 
    this.setState({ books: books})
	}).catch(function(e) {
    console.log(e); 
   })
}
  render() {
    
    return (
      <div className="app">
         <Route exact path="/"  render={()=>(
    	 <div className="list-books">
               <div className="list-books-title">
                   <h1>MyReads</h1>
         	  </div>
              <div className="list-books-content">
                <ListBooks 
                      shelf='Currently Reading'
                      books={this.state.books.filter(book => book.shelf === "currentlyReading")}
    				  updateShelf={this.updateShelf}
					  currentShelf='currentlyReading'
                     />
                <ListBooks 
                      shelf='Want to Read'
                      books={this.state.books.filter(book => book.shelf ==="wantToRead")}
					  updateShelf={this.updateShelf}
					  currentShelf="wantToRead"
					  />
                <ListBooks 
                      shelf='Read'
                      books={this.state.books.filter(book => book.shelf === "read")}
					  updateShelf={this.updateShelf}
                      currentShelf='read'
					  />
                     <div className="open-search">
                      <Link to="/Search">Add a book</Link>
                  	</div>
              </div>
			</div>
          )}/>	
		 <Route exact path='/Search' render={()=>(
          	<SearchBooks
             updateShelf={this.updateShelf}
			 books={this.state.books}
		    />                                             
         )}/>
      </div>
    )
  }
}

export default BooksApp
