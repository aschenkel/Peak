import { connect } from 'react-redux'
import {signIn} from '../../store/actions/user'
import LogInPresentation from './LogInPres'


const mapStateToProps = (state) => ({
    error: state.user.error,
})

const mapDispatchToProps = dispatch => ({
    signIn: () =>{
        dispatch(signIn()) 
    }
})

LogIn = connect(mapStateToProps,mapDispatchToProps)(LogInPresentation)

export default LogIn