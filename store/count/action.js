import axios from 'axios';
import { API } from '../../config';
export const countActionTypes = {
  ADD: 'ADD',
  AUTHENTICATE: 'authenticate'
}

export const addCount = () => (dispatch) => {
  return dispatch({ type: countActionTypes.ADD })
}


// gets token from the api and stores it in the redux store and in cookie
export const authenticate = ({ username, password }, type) => {
  if (type !== 'login') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    // console.log(email)
    axios.post(`${API}/accounts/api-token-auth/`, { username, password })
      .then((response) => {

        console.log(response.data.token);
        // setCookie('token', response.data.token);
        // Router.push('/users');
        dispatch({type: countActionTypes.AUTHENTICATE, payload: response.data.token});
      })
      .catch((err) => {
        console.log(err);
        switch (error.response.status) {
          case 422:
          alert(error.response.data.meta.message);
            break;
          case 401:
          alert(error.response.data.meta.message);
            break;
          case 500:
          alert('Interval server error! Try again!');
            break;
          default:
          alert(error.response.data.meta.message);
            break;
        }

      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({type: AUTHENTICATE, payload: token});
  };
};

export default {
  authenticate, addCount, reauthenticate
}