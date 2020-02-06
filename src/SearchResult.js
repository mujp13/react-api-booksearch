import React from 'react';
import './SearchResult.css';

export default class SearchResult extends React.Component {
  
  render() {
    const {Title, country, snippet, price} = this.props;
    return (
      <div className="movie">
        <div className="title-year">
            <h1 className="title">{Title}</h1>
            <h2 className="title">{country}</h2>
            <p>{snippet}</p>
            <p>{price}</p>
        </div>
      </div>
    );
  }
}
