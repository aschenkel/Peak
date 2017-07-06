import { connect } from 'react-redux'
import {avg,getTopTweets} from '../../store/selectors/grade'
import StatsPresentation from './StatsPres'

const mapStateToProps = (state) => {
      return {
          avgGrade: avg(state.tweets.grades),
          topTweets: getTopTweets(state.tweets)
      }
}


Stats = connect(mapStateToProps)(StatsPresentation)
export default Stats