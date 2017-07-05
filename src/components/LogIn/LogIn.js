import { connect } from 'react-redux'
import {setUser,errorLoadingUser} from '../../store/actions/index'
import LogInPresentation from './LogInPres'


const mapStateToProps = (state) => ({
    error: state.user.error,
})

const mapDispatchToProps = dispatch => ({
    signIn: () =>{
        SignIn() //dispatch action, do sign in on middleware and call the ones below
    },
    setUser: session => {
      dispatch(setUser(session))
    },
    errorLoadingUser: () => {
      dispatch(errorLoadingUser())
    }
})

LogIn = connect(mapStateToProps,mapDispatchToProps)(LogInPresentation)

export default LogIn