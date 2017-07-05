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
import {avgGrade,gradeTweets} from '../../store/selectors/index'
import TimeLinePresentation from './TimeLinePres'

const mapStateToProps = (state) => {
      return{
          tweets: state.user.tweets,
          avgGrade: avgGrade(state),
          tweetsGrade: gradeTweets(state)
      }
}


TimeLine = connect(mapStateToProps)(TimeLinePresentation)
export default TimeLine