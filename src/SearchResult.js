import React from 'react';
import './SearchResult.css';

export default class SearchResult extends React.Component {
  
  render() {
    const {Title} = this.props;
    return (
      <div className="movie">
        <div className="title-year">
            <h1 className="title">{Title}</h1>
        </div>
      </div>
    );
  }
}
