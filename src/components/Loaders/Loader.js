
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Spinner from 'react-native-spinkit'

const Loader = () =>{
  return (
    //CHANGE TO CONTENT LOADER
  <View style={{backgroundColor:"white" ,flex:1, justifyContent:'center',alignItems:'center'}}>
    <Spinner  
          isVisible={true} 
          type="Bounce"
          color='#2980c6'
          size={130}
      />
  </View>)
}

export default Loader