import React, {Component} from 'react'
import Book from './Book'

class ListBooks extends Component{
  render(){
    let  showingBooks= this.props.books
    return(
        <div className="list-books">
      		<div className="list-books-content">
      			<div>
      				<div className="bookshelf">
      					<h2 className="bookshelf-title">{this.props.shelf}</h2>
      					<div className="bookshelf-books">
      						<ol className="books-grid">
                                 {showingBooks.map((book)=>(
    							<li key={book.id}>
      						   		<Book 
                                       book={book}
      								   updateShelf={this.props.updateShelf}
      								   currentShelf={this.props.currentShelf}
      								/>	
      							</li>
    							))}      							
      						</ol>
      					</div>
      				</div>
      			</div>
      		</div>
		</div>	
		)
	}
}
export default ListBooks