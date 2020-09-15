import { countActionTypes } from './action'

const countInitialState = {
  count: 0,
  token: null
}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case countActionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
      console.log(state.count);
    case countActionTypes.AUTHENTICATE:
      return Object.assign({}, state, { token: action.payload });
      // console.log(action.payload)
    default:
      return state;
  }
}
