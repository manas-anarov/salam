import { authActionTypes } from './action'

const authInitialState = {
  token: null
}

export default function reducer(state = authInitialState, action) {
  switch (action.type) {
    case authActionTypes.AUTHENTICATE:
      console.log(action.payload)
      return Object.assign({}, state, { token: action.payload });

    default:
      return state;
  }
}
