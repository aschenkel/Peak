import React, { Component } from 'react';
import TabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Timeline from '../TimeLine/TimeLine'
import Stats from '../Stats/Stats'


const UserDataPres = () =>{
         return(
                 <TabView tabBarTextStyle={{fontWeight:'bold'}} tabBarBackgroundColor = "white"renderTabBar={() => <DefaultTabBar />}>
                    <Stats tabLabel='Stats'/>
                    <Timeline tabLabel='Timeline'/>
                 </TabView>
        )
}

export default UserDataPres