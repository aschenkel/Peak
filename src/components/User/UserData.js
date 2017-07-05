import React, { Component } from 'react';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Timeline from '../TimeLine/TimeLine'
import Stats from '../Stats/Stats'


const UserDataPres = () =>{
         return(
                 <ScrollableTabView tabBarTextStyle={{fontWeight:'bold'}} tabBarBackgroundColor = "white"renderTabBar={() => <DefaultTabBar />}>
                    <Stats tabLabel='Stats'/>
                    <Timeline tabLabel='Timeline'/>
                 </ScrollableTabView>
            )
    }

export default UserDataPres