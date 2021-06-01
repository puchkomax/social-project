import { createStore, combineReducers } from 'redux'
import userReducer from '../redux/reducers/userReducer'

const reducer = combineReducers({
	user: userReducer,
})

const store = createStore(reducer)

export default store
