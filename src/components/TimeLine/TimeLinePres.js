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
import Loader from '../Loaders/Loader'


class TimeLinePres extends Component{

    render(){
        return (
               <Text>{this.props.avgGrade}}</Text>
            )
    }

}

export default TimeLinePres