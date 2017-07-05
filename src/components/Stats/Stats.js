import { connect } from 'react-redux'
import {avg} from '../../store/selectors/grade'
import StatsPresentation from './StatsPres'

const mapStateToProps = (state) => {
      return {
          avgGrade: avg(state.tweets.avgGrade)
      }
}


Stats = connect(mapStateToProps)(StatsPresentation)
export default Stats