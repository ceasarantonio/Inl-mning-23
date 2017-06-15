import React, {Component} from 'react';
import { historyAction, removeFromCartAction} from '../action/action.js';
import {connect} from 'react-redux';

class Cartproduct extends Component {
  render () {
    const {item, handleRemove} = this.props;
    
    return (
      <div className="product-container">
        <h3 className="title">{item.title}</h3>
        <img src={item.image} alt=""/>
        <p>{item.price}</p>
        <button onClick={() => this.removeFromCart(item)}>Remove item from cart</button>
        
        
      </div>
    )
  }
    removeFromCart(product) {
      let action = removeFromCartAction(product)
      this.props.dispatch(action)
      this.props.dispatch( historyAction(action) );
      
    }
}

 
export default connect()(Cartproduct);