import { connect } from 'react-redux'
import {gradeTweets} from '../../store/selectors/grade'
import StatsPresentation from './StatsPres'

const mapStateToProps = (state) => {
     var gradeResults = gradeTweets(state.user.tweets)
      return {
          avgGrade: gradeResults.avgGrade
      }
}


Stats = connect(mapStateToProps)(StatsPresentation)
export default Stats