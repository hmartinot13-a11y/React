import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], // Initialize items as an empty array
  },
  reducers: {
    
    addItemToCart: (state, action) => {
    //alert('addItem0');
    const { name, image, cost } = action.payload; // Destructure product details from the action payload
    // Check if the item already exists in the cart by comparing names
    //const existingItem = state.cartItems.find(item => item.name === name);
    const existingItem = state.cartItems.find(item => item.name === action.payload.name);
    if (existingItem) {
      // If item already exists in the cart, increase its quantity
      existingItem.quantity++;
    } else {
      // If item does not exist, add it to the cart with quantity 1
      state.cartItems.push({ name, image, cost, quantity: 1 });
    }
    },
    
    removeItemFromCart: (state, action) => {
        const { name, image, cost } = action.payload; 
        const existingItem = state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
    },
    
    updateCartQuantity: (state, action) => {
    const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
    // Find the item in the cart that matches the given name
    const itemToUpdate = state.cartItems.find(item => item.name === name);
    if (itemToUpdate) {
       if (quantity !== 0){
        itemToUpdate.quantity = quantity-1; // If the item is found, update its quantity to the new value
    }}
    },

  },
});

export const { addItemToCart, removeItemFromCart, updateCartQuantity } = CartSlice.actions;

export default CartSlice.reducer;
