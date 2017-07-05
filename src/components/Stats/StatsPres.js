import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import StatCard from '../TwitCard';
class StatsPres extends Component{

    render(){
        return (
            <View>
                 <Text>{this.props.avgGrade}</Text>
                 <Text>{this.props.smartest}</Text>
                 <Text>{this.props.dumbest}</Text>
            </View>   
               
            )
    }

}

export default StatsPres