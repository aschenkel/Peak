export const avgGrade= (tweets)=> {
    if(tweets.lenght > 0)
        return (gradeTweets().reduce((sum, element) => sum + element)) /tweets.lenght;
    else
        return -1
}

export const getfixedURL= (imageURL)=> {
  return ""+imageURL.replace("normal","400x400")
}

export const gradeTweets= (tweets)=> {
     if(tweets.lenght > 0){
        return tweets.map(tweet =>
            {
            return gradeTweet(tweet.text)
        })
     }else{
         return tweets
     }
}

export const gradeTweet= (text)=> {
    return grader.grade(tweet.text)  
}
