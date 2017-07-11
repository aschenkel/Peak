import React from 'react';
import StatsPres from '../StatsPres';
import renderer from 'react-test-renderer';

it('renders user stats', () => {
  var topTweetsData= {
                tweets:
                    [
                        {text:"first", 
                            user:{
                                name:"test",screen_name:"tester"
                            }
                        },
                        {text:"second tweet",
                            user:{
                                name:"test",screen_name:"tester"
                            }
                        },
                    ],
                grades:[2,4]
            }
  const tree = renderer.create(
    <StatsPres avgGrade={3} 
            topTweets={topTweetsData}
        />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
