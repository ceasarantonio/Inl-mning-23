
import React, {Component} from 'react';
import {addProductAction, historyAction} from '../action/action.js';
import {connect} from 'react-redux';

class AddForm extends Component {
  constructor(props){
  super(props);
    this.state = {
      title: '',
      price: '',
      imgUrl: ''
    }
    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangePrice = this.handleOnChangePrice.bind(this);
    this.handleOnChangeImgUrl = this.handleOnChangeImgUrl.bind(this);
    this.handleOnClickAddItemToStore = this.handleOnClickAddItemToStore.bind(this);
  
  }
  render() {
    const {item, addItemToStore} = this.props;
    
    
    return(
      <div className="form-container">
        <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleOnChangeTitle}></input>
          <input type="text" placeholder="Price" value={this.state.price} onChange={this.handleOnChangePrice}></input>
          <input type="text" placeholder="ImgUrl" value={this.state.imgUrl} onChange= {this.handleOnChangeImgUrl}></input>
          <button onClick={this.handleOnClickAddItemToStore}>Add Item to Store</button>
      </div>
    )
  }
  handleOnChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  
  handleOnChangePrice(e){
    this.setState({
      price: Number(e.target.value)
    })
  }
  
  handleOnChangeImgUrl(e) {
    this.setState({
      imgUrl: e.target.value
    })
  }
  
  handleOnClickAddItemToStore (e) {
    let action = addProductAction({
      title: this.state.title,
      price: this.state.price,
      imgUrl: this.state.imgUrl
    })
    this.props.dispatch(action)
    this.props.dispatch( historyAction(action) );
  }
}

export default connect()(AddForm);
  
  
   