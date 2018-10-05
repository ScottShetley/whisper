import { secrets } from "../components/secretslist";
import { ADD_TO_CART, REMOVE_FROM_CART, CREATE_SECRET } from "../actions/types";

const initialstate = {
  secrets: secrets,
  cart: []
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.item);
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, { ...action.item, cartId: action.cartId }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart.cartId !== action.id)]
      };
    case CREATE_SECRET:
      return {
        ...state,
        secrets: [
          ...state.secrets,
          {
            title: action.title,
            price: action.price
          }
        ]
      };
    default:
      return state;
  }
};
