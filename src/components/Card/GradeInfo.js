import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import GradeSufix from './GradeSuffix'
const GradeInfo = (props)=>{
        return(
            <View style={styles.gradeContainer}>
                 <Text style={styles.gradeText}>
                     {props.grade}{<GradeSufix grade={props.grade} customsStyle={styles.gradeText}/>} grade
                 </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    gradeContainer:{
        marginLeft:80
    },
    gradeText:{
        fontWeight:'bold',
        color:"gold",
        fontSize:20
    }
})
export default GradeInfo