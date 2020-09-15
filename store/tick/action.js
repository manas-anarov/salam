import axios from 'axios';
import { API } from '../../config';

export const tickActionTypes = {
  TICK: 'TICK',
  AUTHENTICATE: 'authenticate'
}

export const serverRenderClock = (isServer) => (dispatch) => {
  return dispatch({
    type: tickActionTypes.TICK,
    light: !isServer,
    ts: Date.now(),
    token: null,
  })
}

export const startClock = () => (dispatch) => {


  axios.post(`${API}/accounts/api-token-auth/`, { 'username':'samuray', 'password':'q11111111' })
      .then((response) => {

        // console.log(response.data.token);
        // setCookie('token', response.data.token);
        // Router.push('/users');
        // dispatch({type: tickActionTypes.TICK, light: true, ts: Date.now(), token: response.data.token});
      
        return setInterval(
          () => dispatch({ type: tickActionTypes.TICK, light: true, ts: Date.now(), token: response.data.token,}),
          1000
        )

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
