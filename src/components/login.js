import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import FabricTwitterKit from 'react-native-fabric-twitterkit'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'


class LogIn extends Component{
    render(){
        return (<View style={styles.container}>
                    <Text>{this.props.error}</Text>
                    <Button title="Sign in with Twitter" 
                        onPress={()=>this.SignIn()}/>
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
    backgroundColor: '#F5FCFF',
  }
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