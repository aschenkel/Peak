import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-card-view';
import { Icon } from 'react-native-elements'

const AverageCard = (props)=>{
        return (
            <View style={{flexDirection:'row'}}>
                <Text>Average grade: </Text>  
                <Text>{props.avgGrade}</Text>   
            </View>                   
        )
}


export default AverageCard