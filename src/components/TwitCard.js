import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardTitle, CardContent} from 'react-native-card-view';

const TwitCard = (props)=>{
        return (
                <Card>
                    <View style={styles.cardContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={{fontWeight:'bold'}}>{props.text}</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <View>
                                 <Text>{props.favCount}</Text>
                            </View>
                            <View style={{marginLeft:36}}>
                                 <Text>{props.retweetCount}</Text>
                            </View>
                            <View style={{marginLeft:36}}>
                                 <Text style={{fontWeight:'bold',color:"gold",fontSize:16}}>{props.grade} grade</Text>
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
    titleContainer:{
       alignItems:'flex-start'
    },
    textContainer:{
        
    },
    statsContainer:{
        marginTop:15,
        flexDirection:'row',
    },
});

export default TwitCard