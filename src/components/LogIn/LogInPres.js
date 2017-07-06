import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { BlurView, VibrancyView } from 'react-native-blur';

 class LogInPresentation extends Component{
    render(){
            return (
                <View style={styles.container}>
                        <Image
                            source={require('../../../img/background.jpg')}
                            style={styles.absolute}
                        />
                        <BlurView
                            style={styles.absolute}
                            blurType="dark"
                            blurAmount={1}
                        />
                        <View style={{flex:5, marginTop:100 }}>
                            <Text style={styles.text}>What school grade  </Text>
                            <Text style={styles.text}>       level are your tweets?</Text>
                        </View>
                        <View style={{flex:3}}>
                                <SocialIcon
                                    title='Sign in with Twitter'
                                    button
                                    raised
                                    fontSize
                                    style={{width:200}}
                                    type='twitter'
                                    onPress={()=>this.props.signIn()}
                                />
                        </View>
                </View>);
        }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    textShadowOffset:{
            width: 5,
            height: 5
         },
    textShadowColor:"black",
    fontStyle:"italic", 
    fontSize:28,color:"white", 
    backgroundColor:"transparent"
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});

export default LogInPresentation