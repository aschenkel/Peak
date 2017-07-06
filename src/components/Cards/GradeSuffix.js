import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const GradeSuffix = (props)=>{
    var suffix ="th"
    switch (props.grade) {
        case 1:
            suffix = "st"
            break;
        case 2:
            suffix = "nd"
        break;
        case 3:
            suffix = "rd"
        break;
        default:
            break;
    }
        return (
            <Text style={props.customStyle}>{suffix}</Text>    
        )
}

export default GradeSuffix