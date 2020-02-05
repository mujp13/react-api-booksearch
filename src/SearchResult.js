import React from 'react';
import './SearchResult.css';

export default class SearchResult extends React.Component {
  
  render() {
    return (
      <section id="results" className="hidden">
        {this.props.searchResult}
      </section>
    );
  }
}
