import axios from 'axios';
import { API } from '../../config';

export const authActionTypes = {
  AUTHENTICATE: 'AUTHENTICATE',
}



export const startAuth = () => (dispatch) => {


  axios.post(`${API}/accounts/api-token-auth/`, { 'username':'samuray', 'password':'q11111111' })
      .then((response) => {

        return dispatch({ type: authActionTypes.AUTHENTICATE, payload: response.data.token});

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
}

export default {
  startAuth
}