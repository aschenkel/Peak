import { connect } from 'react-redux'
import {gradeTweets} from '../../store/selectors/grade'
import TimeLinePres from './TimeLinePres'

const mapStateToProps = (state) => {
     var gradeResults = gradeTweets(state.user.tweets)
      return {
          tweets: state.user.tweets,
          tweetsGrade: gradeResults.tweetsGrade
      }
}

TimeLine = connect(mapStateToProps)(TimeLinePres)
export default TimeLine