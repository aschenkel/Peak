
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
import Loader from './loader'
import * as actions from '../store/actions/index'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import ParallaxScrollView from 'react-native-parallax-scrollview';
var Twitter = require('twitter-node-client').Twitter;


const {width: windowWidth,windowHeight } = Dimensions.get('window');


class Home extends Component{
    componentDidMount() {
        this.setState({
                    elError: "nada",
                    elSuccess: "nadita"
        })        
        this.fetchProfile()
        this.fetchTweets();
    }
    render(){
        return (
             this.props.imageURL=== '' ?
                <Loader/>
            : <ParallaxScrollView
              windowHeight={windowHeight}
              backgroundSource={{uri:'https://i.imgur.com/ao1nxlD.png'}}
              navBarTitle="Beak"
              userName={this.props.name}
              userTitle={"@"+this.props.user}
              userImage={this.props.imageURL}
              leftIcon={{name: 'logout', color: 'white', size: 22, type: 'simple-line-icon'}}
              leftIconOnPress={() => this.logout()}
              rightIcon={{name: 'pencil', color: 'white', size: 22, type: 'simple-line-icon'}}
              rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
            >
                <ScrollView>
                    <Text>{this.state.elSuccess}</Text>
                    <Text>{this.state.elError}</Text>
                </ScrollView>
             </ParallaxScrollView>
        )
    }


    logout(){
        Alert.alert(
            'Hey!',
            'Are you sure you want to log out?',
            [                
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () =>    
                      {
                        FabricTwitterKit.logOut()
                        //NO FUNCIONA CORRECTAMENTE PONER ISSUE
                        AsyncStorage.removeItem('session')
                        this.props.logOut()
                    }
                },
            ],
            { cancelable: true }
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
    fetchTweetsMock() {
        var tweets = [{text:"Pepito clavo un clavito"},{text:"Palbito clavo un pepito"}]
        this.props.setTweets(tweets)
    }
    fetchTweets() {
        var twitter = new Twitter({
       "consumerKey": "XDPJNmNK6jqExgf4atQlCGywc",
       "consumerSecret": "xDpesmjiZ3vzmX6KNs0km566cbCV9fgLfhGuCuURnBbTv6rcaE",
       "accessToken": "880961311726858241-wcYPM7R7QbVXMJQd0Hc4gh7hQe8hN27",
       "accessTokenSecret": "7H0zlwSmx4vBUqIOCVIf2Rqehl6klqRm3ICaXUGQZcuDq",
       "callBackUrl": "http://placeholder.com"
    });
    var error = (err, response, body) =>{
        this.setState({
                    elError: err  
        })
    };
	var success =  data => {
        this.setState({
                    elSuccess: data 
        })
    };    
    twitter.getUserTimeline({ user_id: '881887373335957504', count: '10'}, error, success)
              
    }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
    var correctURL = (""+state.user.imageURL).replace("normal","400x400")
    return{
        user: state.user.userName,
        userID: state.user.userID,
        name: state.user.name,
        tweets: state.user.tweets,
        imageURL: correctURL
}}

const mapDispatchToProps = dispatch => ({
    setProfile: profile => {
      dispatch(actions.setProfile(profile))
    },
    setTweets: tweets => {
      dispatch(actions.setTweets(tweets))
    },
    logOut: () => {
      dispatch(actions.logOut())
    }
})



Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home