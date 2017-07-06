import {AsyncStorage} from 'react-native'
import React, { Component } from 'react';
import Loader from './components/Loaders/Loader'
import Home from './components/Home'
import LogIn from './components/LogIn/LogIn'
import { connect } from 'react-redux'
import {loadUser} from './store/actions/user'

class App extends Component {
    componentDidMount() {
      this.props.loadUser()
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
    loadUser: () => {
      dispatch(loadUser())
    }
})

App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App