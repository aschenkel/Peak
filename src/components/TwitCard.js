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
                    <CardContent>
                        <Text style={{fontWeight:'bold'}}>{props.text}</Text>
                        <Text>{props.favCount}</Text>
                        <Text>{props.retweetCount}</Text>
                        <Text style={{fontWeight:'bold',color:"grey"}}>{props.grade} grade</Text>
                    </CardContent>
                </Card>               
        )
}

export default TwitCard