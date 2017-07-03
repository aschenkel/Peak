import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Spinner from 'react-native-spinkit'

const loader = () =>{
  return (
  <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Spinner  
          isVisible={true} 
          type="Bounce"
          color='#2980c6'
          size={130}
      />
  </View>)
}

export default loader
