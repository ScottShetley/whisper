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

export const CreateSecret = (title, price) => {
  return dispatch => {
    return axios.post(apiUrl, { title, price }).then(response => {
      dispatch(createsecretsuccess(response.data));
    });
  };
};

export const createsecretsuccess = data => ({
  type: CREATE_SECRET,
  data
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
