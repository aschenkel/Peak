import React, { Component } from 'react';
import TabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Timeline from '../TimeLine/TimeLine'
import Stats from '../Stats/Stats'

const TweetsData = () =>{
         return(
                 <TabView tabBarTextStyle={{fontWeight:'bold'}} tabBarBackgroundColor = "white"renderTabBar={() => <DefaultTabBar />}>
                    <Stats tabLabel='Home'/>
                    <Timeline tabLabel='Timeline'/>
                 </TabView>
        )
}

export default TweetsData