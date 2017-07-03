import * as actionTypes from './actionTypes'

export const setUser = (session) => ({
    type: actionTypes.SET_USER,
    userName: session.userName,
    userID: session.userID,
    authorized:true,
    authToken: session.authToken,
    authTokenSecret: session.authTokenSecret,
    error:false
})

export const setProfile = (profile) => ({
    type: actionTypes.SET_PROFILE,
    name: profile.name,
    imageURL: profile.profile_image_url_https
})

export const setTweets = (tweets) => ({
    type: actionTypes.SET_TWEETS,
    tweets: tweets,
})

export const errorLoadingUser = () => ({
  type: actionTypes.ERROR_USER_LOGIN,
  error:true
})

export const initCompleted = () => ({
  type: actionTypes.INIT_COMPLETED,
  init:true
})

