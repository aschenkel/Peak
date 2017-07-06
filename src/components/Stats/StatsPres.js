import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import TwitCard from '../TwitCard';
class TimeLinePres extends Component{

    render(){
        return (
            <View>
                <Text>{this.props.avgGrade}</Text>
                 <FlatList
                    scrollEnabled={ false }
                    data={this.props.topTweets.tweets}
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
            grade={this.props.topTweets.grades[index]}
            retweetCount={item.retweet_count}
            favCount={item.favorite_count}
            name={item.user.name}
            screen_name={item.user.screen_name}
            created_at={item.created_at}
        />
  );

}

export default TimeLinePres