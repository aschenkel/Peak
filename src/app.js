import {AsyncStorage} from 'react-native'
import React, { Component } from 'react';
import Loader from './components/Loaders/Loader'
import Home from './components/Home'
import LogIn from './components/LogIn/LogIn'
import { connect } from 'react-redux'
import {setUser,initCompleted} from './store/actions/index'

class App extends Component {
  componentDidMount() {
    AsyncStorage.getItem('session')
      .then((session) => {
        if (session) {
          this.props.setUser(JSON.parse(session))
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
      dispatch(setUser(session))
    },
    initCompleted: () => {
      dispatch(initCompleted())
    }
})

App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App