import { DDECREMENT, DINCREMENET } from "./actionTypes"

const initialState = {
    counter : 0
}

const dynamicCounterReducer = (state=initialState,action) =>{

    switch (action.type) {
      case DINCREMENET:
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      case DDECREMENT:
        return {
          ...state,
          counter: state.counter - action.payload,
        };
      default:
        return state;
    }
} 


export default dynamicCounterReducer;
