import { tickActionTypes } from './action'

const tickInitialState = {
  lastUpdate: 0,
  light: false,
  token: null
}

export default function reducer(state = tickInitialState, action) {
  switch (action.type) {
    case tickActionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
        token: action.token
      });
    case tickActionTypes.AUTHENTICATE:
      return Object.assign({}, state, { token: action.payload });
      // console.log(action.payload)
    default:
      return state;
  }
}
