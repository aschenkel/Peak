import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import GradeInfo from './GradeInfo'
import { Icon } from 'react-native-elements'

const UserNames = (props)=>{
        return(
            <View style={styles.statsContainer}>
                <Icon name='heart-outline'
                        type='material-community'
                        color='grey'
                    />
                <Text style={styles.favsNretweetsContainer}>{props.favCount}</Text>
                <View style={styles.retweetCount}>
                   <Icon name='twitter-retweet'
                        type='material-community'
                        color='grey'
                    />
                    <Text style={styles.favsNretweetsContainer}>{props.retweetCount}</Text>
               </View>
               <GradeInfo grade={props.grade}/>
            </View>

    )
}

const styles = StyleSheet.create({
    statsContainer:{
        flex:1,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center'
    },
    retweetCount:{
        marginLeft:48,
        flexDirection:'row'
    },
    favsNretweetsContainer:{
        marginLeft:8,
        fontSize:16,
        color:'grey'
    }
})
export default UserNames