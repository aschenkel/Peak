import {avg,getTopTweets} from '../grade'

it('AVG : should calc tweets avg', () => {
    grades= [2,2,4,4]
    expect(avg(grades)).toEqual(3)
})


it('GetTopTweets : should return top tweets object with tweets and grades arrays', () => {
    tweets= ["first","second","third","fourth"]
    grades= [3,1,5,2]
    all = {
        tweets: tweets,
        grades: grades
    }
    var expectedResult= {
            tweets:["second","third"], //dumbest tweet, smartest tweet
            grades:[1,5] //dumbest grade, smartest grade
        }
    expect(getTopTweets(all)).toEqual(expectedResult)
})

