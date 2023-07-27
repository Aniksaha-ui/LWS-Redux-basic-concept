import {DINCREMENET,DDECREMENT} from './actionTypes'

export const dIncrementConnector = (value)=>{
    return {
        type: DINCREMENET,
        payload : value
    }
}


export const dDecrementConnector = (value)=>{
    return {
        type: DDECREMENT,
        payload: value
    }    
}
