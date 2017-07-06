import { connect } from 'react-redux'
import {logOut} from '../../store/actions/user'
import {getfixedURL} from '../../store/selectors/image'
import UserPresentation from './UserPres'

const mapStateToProps = (state) => {
    return{
        user: state.user.userName,
        name: state.user.name,
        imageURL: getfixedURL(state.user.imageURL),
        tweetsReady: state.tweets.tweetsReady
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => {
      dispatch(logOut())
    }
})

User = connect(mapStateToProps,mapDispatchToProps)(UserPresentation)
export default User