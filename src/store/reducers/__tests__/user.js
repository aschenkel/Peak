import { initialState,user } from '../user';
import { setUser,setProfile,logOutAction,initCompleted } from '../../actions/user';

it('SetUser: should update state setting new user', () => {
  var userData= {
        userName: "test",
        userID: 0,
        authToken: 0,
        authTokenSecret: 0
    }
  const newState = user(initialState, setUser(userData));
  expect(newState).toMatchSnapshot();
});

it('SetProfile: should update state setting user profile', () => {
  var profileData= {
        userName: "test",
        imageURL: "https:/test"
    }
  const newState = user(initialState, setProfile(profileData));
  expect(newState).toMatchSnapshot();
});

it('LogOut: should update state to initialState with init to true', () => {
    var previousState= {
        authToken: "",
        authTokenSecret: "",
        authorized: true,
        error: false,
        imageURL: "https:/test",
        init: true,
        name: "test",
        tweets: [],
        userID: 0,
        userName: "@tester",
    }
    const newState = user(previousState, logOutAction());
    expect(newState).toEqual({
        ...initialState,
        init:true
     });
});

it('InitCompleted: should update state setting init to true', () => {
  const newState = user(initialState, initCompleted());
  expect(newState).toEqual({
        ...initialState,
        init:true
  });
});
