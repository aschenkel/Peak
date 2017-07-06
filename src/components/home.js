
import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import Loader from './Loaders/Loader'
import User from './User/User';
import { connect } from 'react-redux'
import {getfixedURL} from '../store/selectors/image'
import {fetchTweets} from '../store/actions/tweets'
import {fetchProfile} from '../store/actions/user'

class Home extends Component{
    componentDidMount() {      
        this.props.fetchProfile()
        this.props.fetchTweets();
    }

    render(){
        return (
            this.props.imageURL=== '' ? 
                <Loader color="white" loaderSize={140} backColor="#2980c6" type="Bounce"/> 
            : 
                <User/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        imageURL: getfixedURL(state.user.imageURL),
        userID: state.user.userID
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProfile: profile => {
      dispatch(fetchProfile())
    },
    fetchTweets: tweets => {
      dispatch(fetchTweets())
    }
})

Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home
