import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  Image
} from 'react-native';
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import { SocialIcon } from 'react-native-elements'
import { BlurView, VibrancyView } from 'react-native-blur';


class LogIn extends Component{
    render(){
        return (<View style={styles.container}>
                   
                    <Image
                        source={require('../../img/background.jpg')}
                        style={styles.absolute}
                    />
                    <BlurView
                        style={styles.absolute}
                        blurType="dark"
                        blurAmount={1}
                      />
                    <Text>{this.props.error}</Text>
                    <View style={{flex:5, marginTop:130 }}>
                        <Text style={{textShadowOffset:{width: 2, height: 1},textShadowColor:"black", fontStyle:"italic", fontSize:32,color:"white", backgroundColor:"transparent"}}>How smart are your tweets?</Text>
                    </View>
                   
                        <View style={{flex:3}}>
                            <SocialIcon
                                title='Sign in with Twitter'
                                button
                                raised
                                style={{width:200}}
                                type='twitter'
                                onPress={()=>this.SignIn()}
                            />
                        </View>
                </View>);
    }

    SignIn() {
        FabricTwitterKit.login((error, res) => 
        {
            if(res !== undefined){
                if(res.userName){
                    this.props.setUser(res)
                   // AsyncStorage.setItem('session', JSON.stringify(res)) 
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

const mapStateToProps = (state) => ({
    error: state.user.error,
})

const mapDispatchToProps = dispatch => ({
    setUser: session => {
      dispatch(actions.setUser(session))
    },
    errorLoadingUser: () => {
      dispatch(actions.errorLoadingUser())
    }
})

LogIn = connect(mapStateToProps,mapDispatchToProps)(LogIn)

export default LogIn