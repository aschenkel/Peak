import * as actionTypes from './actionTypes'

export const loadUser = (session) => ({
    type: actionTypes.LOAD_USER,
    userName: session.userName,
    userID: session.userID,
    authorized:true,
    authToken: session.authToken,
    authTokenSecret: session.authTokenSecret,
    error:false
})


export const errorLoadingUser = () => ({
  type: actionTypes.ERROR_USER_LOGIN,
  error:true
})

export const initCompleted = () => ({
  type: actionTypes.INIT_COMPLETED,
  init:true
})

