import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TimeLinePres extends Component{

    render(){
        return (
            <View>
                 <Text>{this.props.tweets[0].text}</Text>
            </View>   
               
            )
    }

}

export default TimeLinePres