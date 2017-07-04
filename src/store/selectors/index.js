export const avgGrade= (tweets)=> {
    return (gradeTweets().reduce((sum, element) => sum + element)) /tweets.lenght;
}

export const getfixedURL= (imageURL)=> {
  return ""+imageURL.replace("normal","400x400")
}

export const gradeTweets= (tweets)=> {
        return tweets.map(tweet =>
            {
            return gradeTweet(tweet.text)
        })
}

export const gradeTweet= (text)=> {
    return grader.grade(tweet.text)  
}
