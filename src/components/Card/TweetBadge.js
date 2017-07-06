import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements'


const TweetBadge = (props)=>{
        return(
               props.smartest ? 
                    <View style={styles.badgeContainer}>
                        <Icon name='seal'
                            type='material-community'
                            color='blue'
                        />
                         <Text style={styles.smartestText}>smartest</Text>
                    </View>
                :
                props.dumbest ? 
                    <View style={styles.badgeContainer}>
                        <Icon name='seal'
                            type='material-community'
                            color='red'
                        />
                        <Text style={styles.dumbestText}>unsmartest</Text>
                    </View> 
                : null
                
    )
}

const styles = StyleSheet.create({
    badgeContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    dumbestText:{
        fontSize:9,color:'red'
    },
    smartestText:{
        fontSize:9,color:'blue'
    }
})
export default TweetBadge