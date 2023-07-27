import { createStore,applyMiddleware } from "redux";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";

const myLogger = (store) =>(next) =>(action)=>{
    console.log(`Action: ${JSON.stringify(action)})`);
    console.log(`Before State: ${JSON.stringify(store.getState()) }`);
    let upcomingState = [action].reduce(rootReducer,store.getState());
    console.log(`upcomingState state is ${JSON.stringify(upcomingState)}`) 
    return next(action)

}


const store = createStore(rootReducer,applyMiddleware(myLogger));

export default store;
