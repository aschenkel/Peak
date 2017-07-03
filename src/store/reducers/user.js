import * as actionTypes from '../actions/actionTypes'

var initialState = {
    init:false,
    authorized: false,
    userName: '',
    userID: '',
    authToken: '',
    authTokenSecret: '',
    error: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_COMPLETED:
      return {
        ...state,
        init:true
      }
    case actionTypes.ERROR_USER_LOGIN:
      return {
        ...state,
        error:true
      }
    case actionTypes.LOAD_USER:
      return {
        ...state,
        userName: action.userName,
        userID: action.userID,
        authorized:true,
        authToken: action.authToken,
        authTokenSecret: action.authTokenSecret,
        error:false
      }
    default:
      return state
  }
}

export default user