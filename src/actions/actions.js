import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CREATE_SECRET,
  LOAD_SECRETS
} from "./types";
import axios from "axios";

let apiUrl = "https://whisperserver.herokuapp.com/api/secrets";

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

export const FetchSecrets = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => dispatch(fetchSecretsSucess(response.data)));
  };
};

export const fetchSecretsSucess = secrets => {
  return {
    type: LOAD_SECRETS,
    secrets
  };
};
