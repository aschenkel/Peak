
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux'
import actions from '../store/actions/index'

class Home extends Component{
    render(){
        return (
        <View style={{flex: 1, marginTop:50}}>
            <Text>Hey {this.props.user}!</Text>
        </View>)
    }
}
const mapStateToProps = (state) => ({
    user: state.user.userName,
})

Home = connect(mapStateToProps)(Home)
export default Home