
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
import Loader from './Loaders/Loader'
import User from './User/UserCont';
import { connect } from 'react-redux'
import {getfixedURL} from '../store/selectors/image'
import {setProfile,setTweets} from '../store/actions/index'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../twitter_config.json');

class Home extends Component{
    componentDidMount() {      
        this.fetchProfile()
        this.fetchTweets();
    }

    render(){
        return (
            this.props.imageURL=== '' ? <Loader/> : <User/>
        )
    }

    fetchProfile() {
            FabricTwitterKit.fetchProfile((error, profile) => 
            {
                if(profile !== undefined){
                    this.props.setProfile(profile)
                }
            })
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
        imageURL: getfixedURL(state.user.imageURL),
        userID: state.user.userID
    }
}

const mapDispatchToProps = dispatch => ({
    setProfile: profile => {
      dispatch(setProfile(profile))
    },
    setTweets: tweets => {
      dispatch(setTweets(tweets))
    }
})

Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home
