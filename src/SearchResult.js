import React from 'react';
import './SearchResult.css';

export default class SearchResult extends React.Component {
  
  render() {
    return (
      <div className='book'>
        <div className='title'>
          <h1>{this.props.Title}</h1>
        </div>
        <div className='author'>{this.props.Author}</div>
        <div className='price'>${this.props.Price}</div>
        <div className='desc'>{this.props.Desc}</div>
        <img src={this.props.Image} alt='Book image' />
      </div>
    );
  }
}
