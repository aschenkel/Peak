import {AsyncStorage} from 'react-native'
import React, { Component } from 'react';
import Loader from './components/loader'
import Home from './components/home'
import LogIn from './components/login'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('session')
      .then((session) => {
        if (session) {
         // this.props.setUser(JSON.parse(session))
        }
      });
    this.props.initCompleted()
  }
    render() {
        return !this.props.init ?
            <Loader/>
            : this.props.authorized ? 
                <Home/> 
                :
                <LogIn/>;
    }
}


const mapStateToProps = (state) => ({
    init: state.user.init,
    authorized: state.user.authorized
})

const mapDispatchToProps = dispatch => ({
    setUser: session => {
      dispatch(actions.setUser(session))
    },
    initCompleted: () => {
      dispatch(actions.initCompleted())
    }
})

App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App