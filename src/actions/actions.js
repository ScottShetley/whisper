import { ADD_TO_CART, REMOVE_FROM_CART, CREATE_SECRET } from "./types";

let nextCartId = 0;

export const AddToCart = secret => ({
  type: ADD_TO_CART,
  item: secret,
  cartId: nextCartId++
});

export const RemoveFromCart = id => ({
  type: REMOVE_FROM_CART,
  id: id
});

export const CreateSecret = (title, price) => ({
  type: CREATE_SECRET,
  title: title,
  price: price
});
