import React from 'react';
import './BookSearcher.css';

export default class BookSearcher extends React.Component {
  state = {
    title: '',
    printType:'all',
    bookType:''
  }

  handleSubmit = () => {
    const {title, printType, bookType} = this.state;
    this.props.handleSendRequest(title, printType, bookType)
    this.setState({
      title,
      printType,
      bookType
    });
  }

  handleInputTitle = (e) => {
    e.preventDefault();
    const title = e.target.value;
    this.setState({
      title
    });
  }

  handleSelectPrintType = (e) => {
    e.preventDefault();
    const printType = e.target.value;
    this.setState({
      printType
    });
  }

  handleSelectBookType = (e) => {
    e.preventDefault();
    const bookType = e.target.value;
    this.setState({
      bookType
    });
  }

  render() {
    const {title, printType, bookType} = this.state;

    return (
      <>
      <h1>Google Book Search</h1>
      <div className="search">
          Search: <input 
            className="search-box"
            type="search" 
            onChange={this.handleInputTitle} 
            value={title} />
          <input 
            className="button" 
            type="submit" 
            onClick={this.handleSubmit} 
            value="Search"/>
      </div>
      <form id='js-filter-form'>
        <label id='print-type-term' className="search-label">Print Type: </label>
          <select 
            className="arrows-printtype"
            name="Print Type"
            onChange={this.handleSelectPrintType}
            value={printType}>
            <option value="all">all</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
          </select>
        <label id='book-type-term'>Book Type: </label>
          <select 
            className="arrows-booktype" 
            name="Print Type"
            onChange={this.handleSelectBookType}
            value={bookType}>
            <option value="No Filter"></option>
            <option value="free-ebooks">free-ebooks</option>
          </select>
      </form>
      </>
    );
  }
}