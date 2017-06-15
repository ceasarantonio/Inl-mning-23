import React, {Component} from 'react';
import Product from './Product.js';
import Cartproduct from './Cartproduct.js';
import History from './History.js';
import  AddForm from './Form.js';
import { addProductAction, removeFromCartAction, addToCartAction, historyAction, changeTabAction} from '../action/action.js';
import {connect} from 'react-redux';

class TabComponent extends Component {
 constructor(props){
   super(props);
   
   this.handleClickProduct = this.handleClickProduct.bind(this);
   this.handleClickCart = this.handleClickCart.bind(this);
   this.handleClickHistory = this.handleClickHistory.bind(this);
   this.handleClickStore = this.handleClickStore.bind(this);
 
 } 
  render() {
  let view;
  if (this.props.tab === 1) {
    console.log("Render Products",this.props.products)
    view = this.props.products.map( (product, index ) => {
      return <Product
        item = {product}
        key = {index}
        handleAdd={this.addProductToCart}
        />
    
    });
  }
   else if (this.props.tab === 2) {
      if(this.props.cart.length === 0){
        view = <p>The Cart is empty</p>
      }
      else {  
        let sum = 0;
        this.props.cart.forEach(e=>{
        sum += e.price;
        });
        
      view = <div><p>Totalt:{sum} </p>{this.props.cart.map( (product, index) => {
        return <Cartproduct 
        item={product}
        key={index}
        handleRemove={this.removeFromCart}
        />
        })
      }</div>;
    }
   }
   else if (this.props.tab === 3) {
      view = <AddForm  />;
    } 
     
    else if (this.props.tab === 4) { 
    view = <History history={this.props.history} />;
    }
  
  return (
		  <div className="App">
			  <div className="tabheader">
				  <button onClick={this.handleClickStore}>Store</button>
				  <button onClick={this.handleClickCart}> View Shopingcart</button>
				  <button onClick={this.handleClickProduct}>Add a product to the store</button>
				  <button onClick={this.handleClickHistory}>historik</button>
		      </div>
			<div className="tabbody">
				{view}
			</div>
        </div>
		);

    }
    handleClickStore(e) {
      let action = changeTabAction(1)
      this.props.dispatch(action);
      this.props.dispatch( historyAction(action));
    }

    handleClickCart(e) {
      let action = changeTabAction(2)
      this.props.dispatch(action);
      this.props.dispatch( historyAction(action));
    }

    handleClickProduct(e) {
      let action = changeTabAction(3)
      this.props.dispatch(action);
      this.props.dispatch( historyAction(action)); 
    } 

    handleClickHistory(e) {
      let action = changeTabAction(4)
      this.props.dispatch(action);
      this.props.dispatch( historyAction(action));
    }
  

}
   



function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
		history: state.history,
        products: state.products,
        cart: state.cart
      
	}
}

export default connect(mapStateToProps)(TabComponent);