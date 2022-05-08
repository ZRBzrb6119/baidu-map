import {createStore,combineReducers} from 'redux'
import outreducer from './reducers/child1'
import c2reducer from './reducers/child2'
import c3reducer from './reducers/child3'
import c4reducer from './reducers/child4'

const allState =combineReducers({
    outreducer,
    string:c2reducer,
    style:c3reducer,
    CRC:c4reducer
})

export default createStore(allState)