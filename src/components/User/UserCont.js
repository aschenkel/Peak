import { connect } from 'react-redux'
import {logOut} from '../../store/actions/index'
import {getfixedURL} from '../../store/selectors/index'
import UserPresentation from './UserPres'

const mapStateToProps = (state) => {
    return{
        user: state.user.userName,
        userID: state.user.userID,
        name: state.user.name,
        tweets: state.user.tweets,
        imageURL: getfixedURL(state.user.imageURL)
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => {
      dispatch(logOut())
    }
})

User = connect(mapStateToProps,mapDispatchToProps)(UserPresentation)
export default User