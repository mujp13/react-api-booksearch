import React from 'react';
import './BookSearcher.css';

export default class BookSearcher extends React.Component {
  state = {
    title: ''
  }

  handleSubmitTitle = () => {
    const {title} = this.state;
    this.props.handleSendRequest(title)
    this.setState({
      title: ''
    })
  }

  handleInputTitle = (e) => {
    e.preventDefault();
    const title = e.target.value;
    this.setState({
      title
    });
  }

  render() {
    const {title} = this.state;

    return (
      <>
      <h1>Google Book Search</h1>
      <div className="search">
        <input className="search-box" type="text" 
          onChange={this.handleInputTitle} 
          value={title}/>
        <input className="button" type="submit" 
          onClick={this.handleSubmitTitle} 
          value="Search"/>
      </div>
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
      </>
    );
  }
}