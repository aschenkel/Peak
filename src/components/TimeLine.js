import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import  {setTweets,fetchTweets} from '../store/actions/index'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../twitter_config.json');
import Loader from './Loaders/Loader'
import {avgGrade,gradeTweets} from '../store/selectors/index'


class TimeLine extends Component{
    constructor(props){
        super()
    }

    componentDidMount() {      
        this.fetchTweets();
    }
    render(){
        return (
                this.props.tweetsReady ? 
                    <Text>{""+this.props.tweets[0].text}}</Text>
                    :
                    <Loader/>
            )
    }
    fetchTweets() {
        var twitter = new Twitter(config);
        var error = (err, response, body) =>{
            //show message
        };
        var success =  response => {
            var data = JSON.parse(response)
            this.props.setTweets(data)
        };    
        twitter.getUserTimeline({ user_id: ""+this.props.userID, count: '10',include_rts:'false'}, error, success)
        
    }
}

const mapStateToProps = (state) => {
     return{
        tweets: state.user.tweets,
        avgGrade: avgGrade(state.user.tweets),
        tweetsGrade: gradeTweets(state.user.tweets),
        tweetsReady: state.user.tweetsReady
    }
    return{}
}

const mapDispatchToProps = dispatch => ({
    setTweets: tweets => {
      dispatch(setTweets(tweets))
    }
})

TimeLine = connect(mapStateToProps,mapDispatchToProps)(TimeLine)
export default TimeLine