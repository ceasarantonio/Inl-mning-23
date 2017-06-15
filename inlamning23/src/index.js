import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import { tabReducer, cartReducer, historyReducer, productReducer } from './reducers/reducer.js'; 

let initialState = {
	    tab: 1,  
    products: [
      {
      title: "Monkey Island",
      price: 30,
      image:  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Secret_of_Monkey_Island_artwork.jpg/250px-The_Secret_of_Monkey_Island_artwork.jpg"
      },
      {
      title: "Monkey Island 2",
      price: 20,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/LeChuck%27s_Revenge_artwork.jpg/250px-LeChuck%27s_Revenge_artwork.jpg"
      },
      {
        title: "Monkey Island 3",
        price: 10,
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/The_Curse_of_Monkey_Island_artwork.jpg/250px-The_Curse_of_Monkey_Island_artwork.jpg"
      }
    ],
    history: [],
    cart: []
 
}

let rootReducer = combineReducers({
	tab: tabReducer,
	cart: cartReducer,
	history: historyReducer,
	products: productReducer
  
});
const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();