import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  Image
} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { BlurView, VibrancyView } from 'react-native-blur';
import FabricTwitterKit from 'react-native-fabric-twitterkit'

 class LogInPresentation extends Component{
    render(){
            return (<View style={styles.container}>

                        <Image
                            source={require('../../../img/background.jpg')}
                            style={styles.absolute}
                        />
                        <BlurView
                            style={styles.absolute}
                            blurType="dark"
                            blurAmount={1}
                        />
                        <Text>{this.props.error}</Text>
                        <View style={{flex:5, marginTop:100 }}>
                            <Text style={{textShadowOffset:{width: 5, height: 5},textShadowColor:"black", fontStyle:"italic", fontSize:28,color:"white", backgroundColor:"transparent"}}>What school grade  </Text>
                            <Text style={{textShadowOffset:{width: 5, height: 5},textShadowColor:"black", fontStyle:"italic", fontSize:28,color:"white", backgroundColor:"transparent"}}>       level are your tweets?</Text>
                        </View>
                    
                            <View style={{flex:3}}>
                                <SocialIcon
                                    title='Sign in with Twitter'
                                    button
                                    raised
                                    fontSize
                                    style={{width:200}}
                                    type='twitter'
                                    onPress={()=>this.SignIn()}
                                />
                            </View>
                    </View>);
        }

    //THIS WILL BE MOVED TO MIDDLEWARE
     SignIn(){
        FabricTwitterKit.login((error, res) => 
        {
            if(res !== undefined){
                if(res.userName){
                    this.props.setUser(res)
                    AsyncStorage.setItem('session', JSON.stringify(res)) 
                }else{
                    this.props.errorLoadingUser(); 
                }
            }
        });
    }   


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});

export default LogInPresentation