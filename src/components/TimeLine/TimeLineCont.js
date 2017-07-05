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
import  {setTweets,fetchTweets} from '../../store/actions/index'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../../twitter_config.json');
import Loader from '../Loaders/Loader'
import {gradeTweets} from '../../store/selectors/grade'
import TimeLinePresentation from './TimeLinePres'

const mapStateToProps = (state) => {
     var gradeResults = gradeTweets(state.user.tweets)
      return {
          tweets: state.user.tweets,
          tweetsGrade: gradeResults.tweetsGrade,
          avgGrade: gradeResults.avgGrade
      }
}


TimeLine = connect(mapStateToProps)(TimeLinePresentation)
export default TimeLine