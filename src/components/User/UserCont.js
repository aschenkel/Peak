import { connect } from 'react-redux'
import {logOut} from '../../store/actions/index'
import {getfixedURL} from '../../store/selectors/index'
import UserPresentation from './UserPres'

const mapStateToProps = (state) => {
    return{
        user: state.user.userName,
        name: state.user.name,
        imageURL: getfixedURL(state.user.imageURL),
        tweetsReady: state.user.tweetsReady
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => {
      dispatch(logOut())
    }
})

User = connect(mapStateToProps,mapDispatchToProps)(UserPresentation)
export default User