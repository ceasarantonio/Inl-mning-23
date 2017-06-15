const ADD_PRODUCT = "ADD_PRODUCT",
      ADD_TO_CART = "ADD_TO_CART",
      REMOVE_FROM_CART = "REMOVE_FROM_CART",
      HISTORY = "HISTORY",
      CHANGE_TAB = "CHANGE_TAB",
      PRODUCT = "PRODUCT";
      
      

function addProductAction (product) {
  return {
    type: ADD_PRODUCT,
    product
  }
}

function addToCartAction(product) {
  return{
    type: ADD_TO_CART,
    product
  }
}

function removeFromCartAction (product) {
  return{
    type: REMOVE_FROM_CART,
    product
  }
}

  
function historyAction (action) {
  return{
    type: HISTORY,
    action
  }
}

function changeTabAction (selectedTab) {
  return{
    type: CHANGE_TAB,
    tab: selectedTab  
  }
}



function productAction () {
  return{
    type: PRODUCT
  }
}
  


export { ADD_PRODUCT, addProductAction, ADD_TO_CART, addToCartAction, REMOVE_FROM_CART, removeFromCartAction, HISTORY,historyAction, CHANGE_TAB, changeTabAction, PRODUCT, productAction };
 