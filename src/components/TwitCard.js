import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardTitle, CardContent} from 'react-native-card-view';
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
                            <Text style={{fontWeight:'bold'}}>{props.name}</Text>
                            <Text style={{marginLeft:4 ,color:'grey'}}>@{props.screen_name}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>{props.text}</Text>
                        </View>
                        <View style={styles.statsContainer}>
                             <View style={{flexDirection:'row',justifyContent:'center'}}>
                                 <Icon name='heart-outline'
                                    type='material-community'
                                    color='grey'
                                />
                                 <Text style={{marginLeft:8,fontSize:16,color:'grey'}}>{props.favCount}</Text>
                            </View>
                            <View style={{marginLeft:48,flexDirection:'row'}}>
                                <Icon name='twitter-retweet'
                                    type='material-community'
                                    color='grey'
                                />
                                 <Text style={{marginLeft:8,fontSize:16,color:'grey'}}>{props.retweetCount}</Text>
                            </View>
                            <View style={{marginLeft:120}}>
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
    cardContainer:{
        flex:1,
        margin: 8
    },
    userContainer:{
        flexDirection:'row'
    },
    textContainer:{
       alignItems:'flex-start',
       marginTop:4
    },
    statsContainer:{
        flex:1,
        marginTop:15,
        flexDirection:'row',
    },
});

export default TwitCard