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
                        <Text>{props.text}</Text>
                        <Text>{props.grade} grade</Text>
                    </CardContent>
                </Card>               
        )
}

export default TwitCard