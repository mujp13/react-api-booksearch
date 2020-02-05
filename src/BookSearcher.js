import React from 'react';
import './BookSearcher.css';

export default class BookSearcher extends React.Component {
  

  render() {
    return (
      <div>
        <h1>Google Book Search</h1>
        <form id="js-search-form">
          <label className="search-label">Search: </label>
          <input type="text" name="search-term" id="js-search-term" placeholder="Book name or keyword" required />
          <input type="submit" value="Search" />
        </form>
        <form id='js-filter-form'>
          <label id='print-type-term' className="search-label">Print Type: </label>
            <select className="arrows-printtype" name="Print Type">
              <option value="print-type-option">all</option>
              <option value="print-type-option">books</option>
              <option value="print-type-option">magazines</option>
            </select>
          <label id='book-type-term'>Book Type: </label>
            <select className="arrows-booktype" name="Print Type">
              <option value="book-type-option">No Filter</option>
              <option value="book-type-option">Free-ebooks</option>
            </select>
        </form>
      </div>
    );
  }
}
