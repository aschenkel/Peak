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
import  {setTweets} from '../store/actions/index'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../twitter_config.json');
import {avgGrade,gradeTweets} from '../store/selectors/index'

const {width: windowWidth,windowHeight } = Dimensions.get('window');


class TimeLine extends Component{
    componentDidMount() {      
        this.fetchTweets();
    }
    render(){
        return (
            <Text>{this.props.avgGrade}</Text>
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
   /* return{
        avgGrade: avgGrade(state.user.tweets),
        tweetsGrade: gradeTweets(state.user.tweets)
    }*/
}

const mapDispatchToProps = dispatch => ({
    setTweets: tweets => {
      dispatch(setTweets(tweets))
    }
})



TimeLine = connect(mapStateToProps,mapDispatchToProps)(TimeLine)
export default TimeLine