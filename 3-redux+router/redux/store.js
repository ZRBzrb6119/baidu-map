import {createStore,combineReducers} from 'redux'
import countReducer from './reducers/Hcone'
import {shopReduder,allPrice} from './reducers/Mcone'

const allState =combineReducers({
    sum:countReducer,
    shops:shopReduder,
    allPrice
})

export default createStore(allState)