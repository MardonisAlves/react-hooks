
import {numberReducer ,userReducer} from "./reducers"
import { numberAddAction } from "./actions/number"
 export const initialState = {
    cart:[],
    products:[],
    user:'',
    number:0
}

export { 
    numberReducer, 
    userReducer,
    numberAddAction
}

