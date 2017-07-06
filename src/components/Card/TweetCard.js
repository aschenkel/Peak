import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-card-view';
import { Icon } from 'react-native-elements'
import GradeSufix from './GradeSuffix'
import TweetBadge from './TweetBadge'
import UserNames from './UserNames'
import StatsInfo from './StatsInfo'

const TweetCard = (props)=>{
    
        return (
                <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.topContainer}>
                            <UserNames name={props.name} screen_name={props.screen_name}/>
                            <TweetBadge smartest={props.smartest} dumbest={props.dumbest}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>{props.text}</Text>
                        </View>
                        <StatsInfo grade={props.grade} 
                            retweetCount={props.retweetCount} 
                            favCount={props.favCount}
                        />
                    </View>
                </Card>               
        )
}

const styles = StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        flex:1
    },
    cardContainer:{
        flex:1,
        margin: 8
    },
    textContainer:{
       alignItems:'flex-start',
       marginTop:4
    }
});

export default TweetCard