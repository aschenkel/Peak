
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const UserNames = (props)=>{
        return(
                <View style={styles.userNamesContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.screen_name}>@{props.screen_name}</Text>
                 </View>
    )
}

const styles = StyleSheet.create({
    userNamesContainer:{
        flexDirection:'row',
        flex:2
    },
    name:{
        fontWeight:'bold'
    },
    screen_name:{
        marginLeft:4,
        color:'grey'
    }
})
export default UserNames