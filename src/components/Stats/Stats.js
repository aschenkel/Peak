import { connect } from 'react-redux'
import {avg,getTopTweets} from '../../store/selectors/grade'
import StatsPresentation from './StatsPres'

const mapStateToProps = (state) => {
      var topTweets = getTopTweets(state.tweets.grades)
      return {
          avgGrade: avg(state.tweets.grades),
          smartest: topTweets.smartest,
          dumbest: topTweets.dumbest
      }
}


Stats = connect(mapStateToProps)(StatsPresentation)
export default Stats