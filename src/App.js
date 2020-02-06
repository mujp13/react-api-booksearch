import React from 'react';
import './App.css';
import BookSearcher from './BookSearcher';
import SearchResult from './SearchResult';


const apiKey = 'AIzaSyCqZ_I7yNLLBHimE2lv2UNeQw8eO_oO0qs'
const searchURL = 'https://www.googleapis.com/books/v1/volumes/'


function formatQueryParams(params) {
  //To make the query statement that is joined with the api url for fetch to get the data
  const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  return queryItems.join('&');
}


export default class App extends React.Component {
  state = {
    books: []
  };
  

  sendRequest = (title, printType, bookType) => {
    const params = {
      q: title,
      printType: printType,
      filter: bookType,
      key: apiKey
    };

    const queryString = formatQueryParams(params);
    const url = searchURL + '?' + queryString;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const dataArray = Object.values(data.items);
        //console.log('dataArray', dataArray)
        const books = dataArray;
        this.setState({books});
        //console.log(data)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BookSearcher handleSendRequest={this.sendRequest}/>
          {console.log('state', this.state.books)}
          {this.state.books.map((book => {
            return <SearchResult 
                    Title={book.volumeInfo.title}
                    Author={book.volumeInfo.authors}
                    Image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'Image not available'}
                    Price={book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'Not for sale'}
                    Desc={book.searchInfo ? book.searchInfo.textSnippet : ``}
                  />
            }))
          }
        </header>
      </div>
    );
  }
}