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

  /*
  const params = {
    q: query,
    //printType: printType,
    //filter: filter,
    key: apiKey
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + '?' + queryString;
  */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }


  componentDidMount() {

    fetch('https://www.googleapis.com/books/v1/volumes?q=henry&key=AIzaSyCqZ_I7yNLLBHimE2lv2UNeQw8eO_oO0qs')
      .then(response => response.json())
      .then(data => {
        let results = data.items.map((output) => {
          return(
            <section>
              <div className='picture' key={output.items}>
                <img src={output.volumeInfo.imageLinks.thumbnail} />
              </div>
              <div className='title' key={output.items}>
                <div>{output.volumeInfo.title}</div>
              </div>
              <div className='author' key={output.items}>
                <div>{output.volumeInfo.authors}</div>
              </div>
            </section>
          )
        })
        this.setState({
        results: results
      })
      console.log(data)
    })
  }

   
  render() {

    return (
      <div className="App">
        <BookSearcher />
        <SearchResult
          searchedResults={this.state.results}
        />
        {this.state.results}
      </div>
    );
  }
}
