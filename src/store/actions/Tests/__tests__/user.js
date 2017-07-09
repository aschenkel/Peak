import {logOutAction,signIn, setUser,errorLoadingUser,fetchProfile,setProfile,loadUser,initCompleted} from '../../user'
import * as actionTypes from '../../actionTypes'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockStorage from '../mocks/MockStorage';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
const store={}
beforeEach(() => {
     store = mockStore({})
});

it('SignIn (success): should call setUser', () => {
  var res= {userName:"test"}
  var mockApi = {
    login(callback) {
          callback(null, res)
      }
  }
    store.dispatch(signIn(mockApi))
    const actions = store.getActions()
    expect(actions[0]).toEqual(setUser(res))
})

it('SignIn (error): should call errorLoadingUser', () => {
  var res= {}
  var error= true
  var mockApi = {
    login(callback) {
          callback(error, res)
      }
  }
    store.dispatch(signIn(mockApi))
    const actions = store.getActions()
    expect(actions[0]).toEqual(errorLoadingUser())
})

it('FetchProfile: should call setProfile', () => {
  var profile= {}
  const store = mockStore({})
  var mockApi = {
      fetchProfile(callback) {
            callback(null, profile)
        }
    }
    store.dispatch(fetchProfile(mockApi))
    const actions = store.getActions()
    expect(actions[0]).toEqual(setProfile(profile))
})



/* -------- MOCKSTORAGE NOT WORKING ---------------
it('LoadUser (exists): should call setUser', () => {
  var mySession={
      type: actionTypes.SET_USER,
      userName: "",
      userID: 0,
      authorized:true,
      authToken: 0,
      authTokenSecret: 0,
      error:false
  }
  const storageCache = {session: JSON.stringify(mySession)}
  const AsyncStorageMock = new MockStorage(storageCache);
  jest.setMock('AsyncStorage', AsyncStorageMock)
  store.dispatch(loadUser())
  const actions = store.getActions()
  expect(actions[0]).toEqual(setUser(mySession))
})

it('LoadUser (doesnt exist): should NOT call setUser', () => {
  const storageCache = {}
  const AsyncStorageMock = new MockStorage(storageCache);
  jest.setMock('AsyncStorage', AsyncStorageMock)
  store.dispatch(loadUser())
  const actions = store.getActions()
  expect(actions[0]).toEqual(initCompleted())
})
*/

  it('SetUser: should create an action to add set an user', () => {
    const session = {
      userName: "",
      userID: 0,
      authToken: 0,
      authTokenSecret: 0,
    }
    const expectedAction = {
      type: actionTypes.SET_USER,
      userName: "",
      userID: 0,
      authorized:true,
      authToken: 0,
      authTokenSecret: 0,
      error:false
    }
    expect(setUser(session)).toEqual(expectedAction)
  })

  it('SetProfile: should create an action to set an user profile', () => {
    const profile = {
      name: "",
      profile_image_url_https: ""
    }
    const expectedAction = {
      type: actionTypes.SET_PROFILE,
      name: "",
      imageURL: ""
    }
    expect(setProfile(profile)).toEqual(expectedAction)
  })

  it('LogOutAction: should create an action to log out user', () => {

    const expectedAction = {
        type: actionTypes.LOG_OUT
    }
    expect(logOutAction()).toEqual(expectedAction)
  })

  it('ErrorLoadingUser: should create an action indicating there was an error loading the user', () => {

    const expectedAction = {
        type: actionTypes.ERROR_USER_LOGIN,
        error:true
    }
    expect(errorLoadingUser()).toEqual(expectedAction)
  })

  it('InitCompleted: should create an action indicating init is completed', () => {

    const expectedAction = {
        type: actionTypes.INIT_COMPLETED,
        init:true
    }
    expect(initCompleted()).toEqual(expectedAction)
  })