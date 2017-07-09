import {setTweets,fetchTweets} from '../../tweets'
import * as actionTypes from '../../actionTypes'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//import MockStorage from '../mocks/MockStorage';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
const store={}
beforeEach(() => {
    store = mockStore({
      user:{
        userID:0
      }
    })
});

it('FetchTweets: should call setTweets', () => {
    var error = (err, response, body) =>{
            //dispatch error
    };
    var success =  response => {
            var data = JSON.parse(response)
            dispatch(setTweets(data))
            const actions = store.getActions()
            expect(actions[0]).toEqual(setTweets(res))
    };
    jest.mock('Twitter')
    store.dispatch(fetchTweets())
})

it('SetTweets: should create an action to set users tweets', () => {
    const tweets = []
    const expectedAction = {
      type: actionTypes.SET_TWEETS,
      tweets: tweets,
    }
    expect(setTweets(tweets)).toEqual(expectedAction)
})

