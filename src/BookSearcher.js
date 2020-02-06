import React from 'react';
import './BookSearcher.css';

export default class BookSearcher extends React.Component {
  state = {
    title: '',
    printType:'',
    filter:''
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
          value={title}/>
        <input 
          className="button" 
          type="submit" 
          onClick={this.handleSubmitTitle} 
          value="Search"/>
      </div>
      <form id='js-filter-form'>
        <label id='print-type-term' className="search-label">Print Type: </label>
          <select 
            className="arrows-printtype"
            name="Print Type"
            onChange={this.handleSelectPrintType}
            value={printType}>
            <option value="print-type-option">all</option>
            <option value="print-type-option">books</option>
            <option value="print-type-option">magazines</option>
          </select>
        <label id='book-type-term'>Book Type: </label>
          <select 
            className="arrows-booktype" 
            name="Print Type"
            onChange={this.handleSelectBookType}
            value={bookType}>
            <option value="book-type-option">No Filter</option>
            <option value="book-type-option">Free-ebooks</option>
          </select>
      </form>
      </>
    );
  }
}