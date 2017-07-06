import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-card-view';
import { Icon } from 'react-native-elements'
import GradeSufix from './GradeSuffix'

const AverageGrade = (props)=>{
        return (
            <View style={{flexDirection:'row', justifyContent:'center',margin:16}}>
                <Icon name='school'
                    type='material-community'
                    color='black'
                />
                <Text style={styles.gradeText}>  Average: </Text>  
                <Text style={styles.gradeText}>{props.avgGrade}{<GradeSufix grade={props.grade} customsStyle={styles.gradeText}/>} grade</Text>  
            </View>                   
        )
}

const styles = StyleSheet.create(
    {
        gradeText:{
            fontSize:20,fontWeight:'bold'
        }
    }
)

export default AverageGrade