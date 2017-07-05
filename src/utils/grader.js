import TextStatistics from 'text-statistics'

export const grade = (text) => {
    var grade = new TextStatistics(text).smogIndex()
    return Math.round(grade)
  }

  /* use
    import * as grader from './grader'
    var result = grader.grade("dog cat"))
   */