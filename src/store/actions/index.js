import * as actionTypes from './actionTypes'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import { AsyncStorage } from 'react-native';
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../../twitter_config.json');

export const setUser = (session) => ({
    type: actionTypes.SET_USER,
    userName: session.userName,
    userID: session.userID,
    authorized:true,
    authToken: session.authToken,
    authTokenSecret: session.authTokenSecret,
    error:false
})

export const signIn = () => {
    return function (dispatch) {
        return FabricTwitterKit.login((error, res) => 
        {
            if(res !== undefined){
                if(res.userName){
                    dispatch(setUser(res))
                    AsyncStorage.setItem('session', JSON.stringify(res)) 
                }else{
                    dispatch(errorLoadingUser()); 
                }
            }
        });
    };
}

export const loadUser = () => {
    return function (dispatch) {
        AsyncStorage.getItem('session').then((session) => {
            if (session) {
                dispatch(setUser(JSON.parse(session)))
            }
        })
        dispatch(initCompleted())
    };
}

export const fetchTweets = () => {
    return function (dispatch,getState) {
        var twitter = new Twitter(config);
        var error = (err, response, body) =>{
            //dispatch error
        };
        var success =  response => {
            var data = JSON.parse(response)
            dispatch(setTweets(data))
        };    
        twitter.getUserTimeline({ user_id: ""+ getState().user.userID, count: '30',include_rts:'false'}, error, success)
    };
}

export const logOut = () => {
    return function (dispatch,getState) {
        FabricTwitterKit.logOut() //Doesnt work. Issue: https://github.com/tkporter/react-native-fabric-twitterkit/issues/33
        AsyncStorage.removeItem('session')
        dispatch(logOutAction())
    };
}

export const fetchProfile= () => {
    return function (dispatch) {
        FabricTwitterKit.fetchProfile((error, profile) => 
            {
                if(profile !== undefined){
                    dispatch(setProfile(profile))
                }
            })
    };
}

export const setProfile = (profile) => ({
    type: actionTypes.SET_PROFILE,
    name: profile.name,
    imageURL: profile.profile_image_url_https
})

export const logOutAction = () => ({
    type: actionTypes.LOG_OUT,
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

