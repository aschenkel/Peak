
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';
import Spinner from 'react-native-spinkit'
const {windowHeight } = Dimensions.get('window');

const Loader = (props) =>{
  return (
  <View style={{backgroundColor:props.backColor, flex:1,height:windowHeight, justifyContent:'center',alignItems:'center'}}>
    <Spinner
          isVisible={true} 
          type={props.type}
          color={props.color}
          size={props.loaderSize}
      />
  </View>)
}

export default Loader