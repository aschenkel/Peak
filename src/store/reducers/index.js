import { combineReducers } from 'redux'
import user from './user'
import tweets from './tweets'

const reducers = combineReducers({
  user, tweets
})

export default reducers