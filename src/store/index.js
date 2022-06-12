
import {numberReducer ,userReducer} from "./reducers"
import { numberAddAction,numberMultAction } from "./actions/number"
 export const initialState = {
    cart:[],
    products:[],
    user:'',
    number:1
}

export { 
    numberReducer, 
    userReducer,
    numberAddAction,
    numberMultAction
}

