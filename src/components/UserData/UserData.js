
import { connect } from 'react-redux'
import  {setTweets,fetchTweets} from '../../store/actions/index'
var Twitter = require('twitter-node-client').Twitter;
var config = require('../../../twitter_config.json');
import Loader from '../Loaders/Loader'
import {gradeTweets} from '../../store/selectors/grade'
import UserDataPresentation from './UserDataPres'

const mapStateToProps = (state) => {
     var gradeResults = gradeTweets(state.user.tweets)
      return {
          tweets: state.user.tweets,
          tweetsGrade: gradeResults.tweetsGrade,
          avgGrade: gradeResults.avgGrade
      }
}


UserData = connect(mapStateToProps)(UserDataPresentation)
export default UserData