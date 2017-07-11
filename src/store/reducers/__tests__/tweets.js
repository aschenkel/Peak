import { tweets } from '../tweets';
import { initialState } from '../user';
import { setTweets } from '../../actions/tweets';

it('SetTweets: should update state setting users tweets', () => {
  var tweetsData = [{text:"this is a tweet"},{text:"just another tweet"}, {text:"a third one, yep"}]
  const newState = tweets(initialState, setTweets(tweetsData));
  expect(newState).toMatchSnapshot();
});