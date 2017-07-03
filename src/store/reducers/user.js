import * as actionTypes from '../actions/actionTypes'

var initialState = {
    init:false,
    authorized: false,
    userName: '',
    name: '',
    userID: '',
    authToken: '',
    authTokenSecret: '',
    error: false,
    tweets: [],
    imageURL:null
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
    case actionTypes.SET_USER:
      return {
        ...state,
        userName: action.userName,
        userID: action.userID,
        authorized:true,
        authToken: action.authToken,
        authTokenSecret: action.authTokenSecret,
        error:false,
        imageURL:""
      }
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        name: action.name,
        imageURL: action.imageURL
      }
    case actionTypes.SET_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      }
    default:
      return state
  }
}

export default user