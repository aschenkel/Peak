
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import FabricTwitterKit from 'react-native-fabric-twitterkit'

const {width: windowWidth} = Dimensions.get('window');


class Home extends Component{
    componentDidMount() {
        this.fetchProfile()
        this.fetchTweetsMock();
    }
    render(){
        return (
        //add loader structure
        <View style={{flex: 1, marginTop:50}}>
            <Text>Hey {this.props.user}!</Text>
            <Text>Your name is {this.props.name}!</Text>
            <Text>{this.props.imageURL}</Text>
            <View style={styles.imageContainer}>
                <Image source={{uri:""+this.props.imageURL}} 
                style={styles.image}/>
            </View>
           
        </View>)
    }

    fetchProfile() {
        FabricTwitterKit.fetchProfile((error, profile) => 
        {
            if(profile !== undefined){
                console.log(profile)
                this.props.setProfile(profile)
            }
        });
    }  
    fetchTweetsMock() {
        var tweets = [{text:"Pepito clavo un clavito"},{text:"Palbito clavo un pepito"}]
        this.props.setTweets(tweets)
    }
    fetchTweets() {
        /*
        var myMap = new Map();
        var valueID = this.props.userID,
            keyID = "id";
        myMap.set(keyID, valueID);

        var myMap = []; 
        myMap.push({
            key:   "id",
            value: this.props.userID
        });
        */
        var myMap = {
            id: this.props.userID
        }
        FabricTwitterKit.fetchTweet(myMap,(error, res) => 
        {
            if(res !== undefined){
                console.log(res);
                //this.props.setTweets(tweets)
            }
        });
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
        userName: state.user.userName,
        tweets: state.user.tweets,
        imageURL: correctURL
}}

const mapDispatchToProps = dispatch => ({
    setProfile: profile => {
      dispatch(actions.setProfile(profile))
    },
    setTweets: tweets => {
      dispatch(actions.setTweets(tweets))
    }
})



Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home