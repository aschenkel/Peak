import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import StatCard from '../TwitCard';
class StatsPres extends Component{

    render(){
        return (
            <View>
                 <FlatList
                    scrollEnabled={ false }
                    data={this.props.topTweets}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />    
            </View>   
               
            )
    }
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item,index}) => (
        <TwitCard 
            id={item.id}
            text={item.text}
            avgGrade={this.props.avgGrade}
            grade={item.grade}
            favCount={item.favorite_count}
            created_at={item.created_at}
        />
  );

}

export default StatsPres