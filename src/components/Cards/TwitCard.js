import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card} from 'react-native-card-view';
import { Icon } from 'react-native-elements'

const TwitCard = (props)=>{
    var gradeSuffix ="th"
    switch (props.grade) {
        case 1:
            gradeSuffix = "st"
            break;
        case 2:
            gradeSuffix = "nd"
        break;
        case 3:
            gradeSuffix = "rd"
        break;
        default:
            break;
    }
        return (
                <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.userContainer}>
                            <View style={styles.userNamesContainer}>
                                <Text style={styles.name}>{props.name}</Text>
                                <Text style={styles.screen_name}>@{props.screen_name}</Text>
                            </View>
                            {
                                props.smartest ? 
                                <View style={styles.badgeContainer}>
                                    <Icon name='seal'
                                        type='material-community'
                                        color='blue'
                                        />
                                    <Text style={styles.smartestText}>smartest</Text>


                                </View>
                                   : null
                            }
                            {
                            props.dumbest ? 
                                <View style={styles.badgeContainer}>
                                    <Icon name='seal'
                                        type='material-community'
                                        color='red'
                                    />
                                    <Text style={styles.dumbestText}>unsmartest</Text>
                                </View> : null
                            }
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
                                 <Text style={{fontWeight:'bold',color:"gold",fontSize:20}}>
                                     {props.grade + gradeSuffix} grade
                                </Text>
                            </View>
                            
                        </View>
                    </View>
                </Card>               
        )
}

const styles = StyleSheet.create({
    name:{
        fontWeight:'bold'
    },
    screen_name:{
        marginLeft:4,
        color:'grey'
    },
    cardContainer:{
        flex:1,
        margin: 8
    },
    userContainer:{
        flexDirection:'row',
        flex:1
    },
    userNamesContainer:{
        flexDirection:'row',
        flex:2
    },
    badgeContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    dumbestText:{
        fontSize:9,color:'red'
    },
    smartestText:{
        fontSize:9,color:'blue'
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
    }
});

export default TwitCard