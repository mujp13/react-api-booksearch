import React from 'react';
import './SearchResult.css';

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class SearchResult extends React.Component {
  
  render() {
    return (
      <div className='book'>
        <div className='title'>
          <p><b>{this.props.Title}</b></p>
        </div>
        <div className='within-search'>
          <div className='texts'>
            <div className='author'>Author: {this.props.Author}</div>
            <div className='price'>Price: {USCurrencyFormat.format(this.props.Price)}</div>
            <div className='desc'>{this.props.Desc}</div>
          </div>
          <img className='image' src={this.props.Image} alt='Bookpic' />
        </div>
      </div>
    );
  }
}
