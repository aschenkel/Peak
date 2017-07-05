import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class StatsPres extends Component{

    render(){
        return (
            <View>
                 <Text>{this.props.avgGrade}</Text>
            </View>   
               
            )
    }

}

export default StatsPres