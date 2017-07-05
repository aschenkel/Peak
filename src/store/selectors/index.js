import * as grader from '../../utils/grader'

export const avgGrade= (state)=> {
       var sum =0
       gradeTweets(state).forEach(grade => 
               sum += grade
       );
       return sum /state.user.tweets.length
}
export const getfixedURL= (imageURL)=> {
         return ""+imageURL.replace("normal","400x400")
}

export const gradeTweets= (state)=> {
        return state.user.tweets.map(tweet => 
             gradeTweet(tweet.text)
        )
}

export const gradeTweet= (text)=> {
        return grader.grade(text)  
}
