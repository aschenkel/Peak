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
                            <View style={styles.gradeContainer}>
                                 <Text style={styles.gradeText}>
                                     {props.grade}{<GradeSufix grade={props.grade} customsStyle={styles.gradeText}/>} grade
                                </Text>
                            </View>
                            
                        </View>
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
    },
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
    },
    gradeContainer:{
        marginLeft:95
    },
    gradeText:{
        fontWeight:'bold',
        color:"gold",
        fontSize:20
    }
});

export default TweetCard