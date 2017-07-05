import * as grader from '../../utils/grader'

export const gradeTweets= tweets => {
        var grades= tweets.map(tweet => 
             gradeTweet(tweet.text)
        )
        return {
                tweetsGrade: grades,
                avgGrade: calcAvgGrade(grades)
        }
}

const gradeTweet= text => {
        return grader.grade(text)  
}

const calcAvgGrade= grades => {
       var sum =0
       grades.forEach(grade => 
               sum += grade
       );
       return sum /grades.length
}


