
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import Loader from './loader'
import * as actions from '../store/actions/index'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import ParallaxScrollView from 'react-native-parallax-scrollview';

const {width: windowWidth,windowHeight } = Dimensions.get('window');


class Home extends Component{
    componentDidMount() {
        this.fetchProfile()
        this.fetchTweetsMock();
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
              leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
              rightIcon={{name: 'pencil', color: 'white', size: 22, type: 'simple-line-icon'}}
              rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
            >
              <Text>Hello. I am sorry for raising a dead thread, but I have run into this exact problem, however the fix listed here does not apply (at least I don't think it does).

            Here is my situation. The app has had this package installed and working fine for awhile now with only 1 custom iconFont for our company. Recently we have needed to branch out, so I added the FontAwesome font to the project. I followed all of the steps and everything works great if you run from xcode. I also completely removed the package and reinstalled using rnpm but got the same result. I have tried reseting npm cache, deleting node_modules folders and reinstalling everything, killing tempdir, and deleting xcode project derived data. I am out of options. Any help would be greatly appreciated!</Text>
            <Text>Hello. I am sorry for raising a dead thread, but I have run into this exact problem, however the fix listed here does not apply (at least I don't think it does).

            Here is my situation. The app has had this package installed and working fine for awhile now with only 1 custom iconFont for our company. Recently we have needed to branch out, so I added the FontAwesome font to the project. I followed all of the steps and everything works great if you run from xcode. I also completely removed the package and reinstalled using rnpm but got the same result. I have tried reseting npm cache, deleting node_modules folders and reinstalling everything, killing tempdir, and deleting xcode project derived data. I am out of options. Any help would be greatly appreciated!</Text>
            <Text>Hello. I am sorry for raising a dead thread, but I have run into this exact problem, however the fix listed here does not apply (at least I don't think it does).

            Here is my situation. The app has had this package installed and working fine for awhile now with only 1 custom iconFont for our company. Recently we have needed to branch out, so I added the FontAwesome font to the project. I followed all of the steps and everything works great if you run from xcode. I also completely removed the package and reinstalled using rnpm but got the same result. I have tried reseting npm cache, deleting node_modules folders and reinstalling everything, killing tempdir, and deleting xcode project derived data. I am out of options. Any help would be greatly appreciated!</Text>
             </ParallaxScrollView>
        )
    }

    fetchProfile() {
            FabricTwitterKit.fetchProfile((error, profile) => 
            {
                console.log("HERE", error)
                console.log("HERE", profile)
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
    }
})



Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home