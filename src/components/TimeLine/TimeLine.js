import { connect } from 'react-redux'
import TimeLinePres from './TimeLinePres'

const mapStateToProps = (state) => {
      return {
          tweets: state.tweets.tweets,
          grades: state.tweets.grades
      }
}

TimeLine = connect(mapStateToProps)(TimeLinePres)
export default TimeLine