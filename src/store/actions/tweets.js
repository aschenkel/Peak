import * as actionTypes from './actionTypes'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../../twitter_config.json');

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


export const setTweets = (tweets) => ({
    type: actionTypes.SET_TWEETS,
    tweets: tweets,
})

