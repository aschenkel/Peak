import React from 'react';
import UserPresentation from '../UserPres';
import renderer from 'react-test-renderer';

it('renders user presentation when tweets are NOT ready', () => {
  const tree = renderer.create(
    <UserPresentation userName="Test" 
            userTitle="Tester" 
            userImage="https://test" 
            tweetsReady={false}
        />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
