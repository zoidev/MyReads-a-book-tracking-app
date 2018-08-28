import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import escapeRegExp from "escape-string-regexp"
import Book from './Book'
import * as BooksAPI from "./BooksAPI"

class SearchBooks extends Component{
  state={
    query:'',
    books:[],
    searchedBooks:[]
  }
/* updates state query as long as the user is typing*/
updateQuery = (query) => {
		this.setState({ query: query})
        this.searchResults(query)
	}
/*showing books based on search input*/
searchResults= (query) =>{
      if (query){
      BooksAPI.search(query).then((searchedBooks)=>{
          if(searchedBooks.error){
          /*if there is a 'query' but doesn't return any searcedBook 
          we set the state to an empty array*/
          this.setState({searchedBooks: []})
          }
          else{
          this.setState({searchedBooks : searchedBooks})
          }    
      })
    }
    else {
    /*this run only when there is no 'query'*/
    this.setState({searchedBooks: [] })
    }
}

  render(){   
                                              
  return(
      <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" 
                      placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
					{	
                      this.state.searchedBooks.map(searchedBook=>{
                      	  let defaultShelf="none";
                          /*we need to map through all books from main page and compare them 
                          with the searchedBooks[]. Same ids means same book, so if this happens the
                          default value of the shelf will change accordingly at the dropdown*/
                      	  this.props.books.map((book)=>(
                       			book.id===searchedBook.id ?
                      				defaultShelf=book.shelf :''                    		    						
								));
                          return(
                          <li key={searchedBook.id}>
                              <Book 
                              book={searchedBook}
                              updateShelf={this.props.updateShelf}
                              currentShelf={defaultShelf}
                              />
                          </li>)
						}
					  )
					}
			  </ol>
           </div>
      </div>
    )
  }
}
export default SearchBooks