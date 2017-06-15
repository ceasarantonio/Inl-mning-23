import React, {Component} from 'react';
import {addToCartAction, historyAction} from '../action/action.js';
import {connect} from 'react-redux';

class Product extends Component {
  render () {
    const {item, handleAdd} = this.props;
    
    return (
      <div className="product-container">
        <h3 className="title">{item.title}</h3>
        <img src={item.image} alt=""/>
        <p>{item.price}</p>
        <button onClick={() => this.addProductToCart(item)}>Add item to cart</button>
      </div>
    )
  }
    addProductToCart(product) {
      let action = addToCartAction(product)
      this.props.dispatch(action)
      this.props.dispatch( historyAction(action) );
    }
    
  
}

 
export default connect()(Product);

