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
import TimeLine from '../TimeLine'
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import ParallaxScrollView from 'react-native-parallax-scrollview';
import Loader from '../Loaders/Loader'

const {width: windowWidth,windowHeight } = Dimensions.get('window');


class UserPresentation extends Component{
    
    render(){
        return (
             <ParallaxScrollView
              windowHeight={windowHeight}
              backgroundSource={{uri:'https://i.imgur.com/ao1nxlD.png'}}
              navBarTitle="Beak"
              userName={this.props.name}
              userTitle={"@"+this.props.user}
              userImage={this.props.imageURL}
              leftIcon={{name: 'logout', color: 'white', size: 22, type: 'simple-line-icon'}}
              leftIconOnPress={() => this.showConfirmationMessage()}
              rightIcon={{name: 'pencil', color: 'white', size: 22, type: 'simple-line-icon'}}
              rightIconOnPress={() => null}
            >
                <ScrollView>
                        {this.props.tweets.lenght === 0 ? 
                            <Loader/>
                            :
                            <TimeLine/> }
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
                        //DO IT ON MIDDLEWARE
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

export default UserPresentation