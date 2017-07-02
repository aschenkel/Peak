import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import FabricTwitterKit from 'react-native-fabric-twitterkit'

 

class Beak extends Component {
 constructor(props) {
    super(props);
    this.state = {
      init:false,
      authorized: false,
      userName: '',
	  userID: '',
	  authToken: '',
	  authTokenSecret: '',
      error: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('session')
      .then((session) => {
        if (session) {
          this.loadUser(JSON.parse(session));
        }
        this.setState({init:true})

      });

  }

  loadUser(session) {
    this.setState({
        userName:session.userName,
        userID:session.userID,
        authorized:true,
        authToken:session.authToken,
        authTokenSecret: session.authTokenSecret
    })
  }

  SignIn() {
        FabricTwitterKit.login((error, res) => 
        {
            if(res.userName){
                this.loadUser(res)
                AsyncStorage.setItem('session', JSON.stringify(res))
            }else{
                this.setState({error:true});
            }
        });
    }   

    render() {

    return !this.state.init ?
      <View style={{flex: 1, marginTop:50}}>
        <Text>Cargando...</Text>
      </View>    
       : this.state.authorized ?
      <View style={{flex: 1, marginTop:50}}>
        <Text>welcome {this.state.userName}</Text>
      </View> :
        <View style={styles.container}>
            <Text>{this.state.error}</Text>
            <Button title="Click me" onPress={()=>this.SignIn()}/>
        </View>
        ;

       
    }

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Beak