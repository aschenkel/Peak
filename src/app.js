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
          this.props.loadUser(JSON.parse(session))
        }
      });
    this.props.initCompleted()
  }
    render() {
        return <Loader/>
          
    }
}


const mapStateToProps = (state) => ({
    init: state.user.init,
    authorized: state.user.authorized
})

const mapDispatchToProps = dispatch => ({
    loadUser: session => {
      dispatch(actions.loadUser(session))
    },
    initCompleted: () => {
      dispatch(actions.initCompleted())
    }
})

App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App