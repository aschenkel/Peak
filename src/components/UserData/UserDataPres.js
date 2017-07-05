import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
  AsyncStorage,
  ScrollView
} from 'react-native';
import Loader from '../Loaders/Loader'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Timeline from '../TimeLine/TimeLine'
class UserDataPres extends Component{

    render(){
        return (
            <View>
                 <ScrollableTabView tabBarTextStyle={{fontWeight:'bold'}} tabBarBackgroundColor = "white"renderTabBar={() => <DefaultTabBar />}>
                    <Text tabLabel='Stats'>My</Text>
                    <Text tabLabel='Timeline'>favorite</Text>
                 </ScrollableTabView>
            </View>   
               
            )
    }

}

export default UserDataPres