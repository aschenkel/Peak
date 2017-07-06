import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  AsyncStorage,
  ScrollView
} from 'react-native';
import TweetsData from './TweetsData'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import ParallaxScrollView from 'react-native-parallax-scrollview';
import Loader from '../Loaders/Loader'

const {width: windowWidth,windowHeight } = Dimensions.get('window');

class UserPresentation extends Component{
    
    render(){
        return (
             <ParallaxScrollView
              windowHeight={windowHeight}
              backgroundSource={require('../../../img/twitterColor.jpg')}
              navBarTitle="Peak"
              navBarColor="black"
              userName={this.props.name}
              userTitle={"@"+this.props.user}
              userImage={this.props.imageURL}
              leftIcon={{name: 'logout', color: 'white', size: 22, type: 'simple-line-icon'}}
              leftIconOnPress={() => this.showConfirmationMessage()}
              rightIcon={{name: 'magnifier', color: 'white', size: 22, type: 'simple-line-icon'}}
              rightIconOnPress={() => this.showSearch()}
            >
                <ScrollView style={{backgroundColor:"#FAFAFA"}}>
                    {
                        this.props.tweetsReady ? 
                            <TweetsData/> 
                            :
                            <Loader color="white" type="Pulse" loaderSize={300} backColor="#FAFAFA"/>
                    }
                </ScrollView>
             </ParallaxScrollView>
        )
    }

    showConfirmationMessage(){
        Alert.alert(
            'Hey!',
            'Are you sure you want to log out?',
            [                
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () =>    
                    {
                        this.props.logOut()
                    }
                },
            ],
            { cancelable: true }
            )
     
    }
    showSearch(){
        Alert.alert(
            'Sorry!',
            'Search not implemented yet',
            { 
                cancelable: true
            }
            )
    }
}


export default UserPresentation