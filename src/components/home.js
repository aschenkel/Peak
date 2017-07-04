
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
import Loader from './Loader'
import User from './User/UserCont';
import { connect } from 'react-redux'
import {getfixedURL} from '../store/selectors/index'
import {setProfile} from '../store/actions/index'
import FabricTwitterKit from 'react-native-fabric-twitterkit'

class Home extends Component{
    componentDidMount() {      
        this.fetchProfile()
    }
    render(){
        return (
            this.props.imageURL=== '' ? <Loader/> : <User/>
        )
    }
    fetchProfile() {
            FabricTwitterKit.fetchProfile((error, profile) => 
            {
                if(profile !== undefined){
                    this.props.setProfile(profile)
                }
            })
    }
}

const mapStateToProps = (state) => {
    return{
        imageURL: getfixedURL(state.user.imageURL)
    }
}

const mapDispatchToProps = dispatch => ({
    setProfile: profile => {
      dispatch(setProfile(profile))
    }
})

Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home
