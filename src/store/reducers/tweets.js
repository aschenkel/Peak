import * as actionTypes from '../actions/actionTypes'
import * as grader from '../../utils/grader'

//MOVE TO MIDDLEWARE? --------------------
const gradeTweets= (tweets) => {
        return tweets.map(tweet => 
             gradeTweet(tweet.text)
        )
}
const gradeTweet= text => {
        return grader.grade(text)  
}
//----------------------------------------
const tweets = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_TWEETS:
      return {
        ...state,
        tweets: action.tweets,
        grades: gradeTweets(action.tweets),
        tweetsReady:true
      }
    default:
      return state
  }
}
export default tweets