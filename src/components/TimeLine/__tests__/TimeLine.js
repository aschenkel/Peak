import React from 'react';
import TimeLinePres from '../TimeLinePres';
import renderer from 'react-test-renderer';

it('renders user timeline', () => {
  const tree = renderer.create(
    <TimeLinePres tweets={{text:"first"},{text:"second tweet"},{text:"3rd"}}
            grade={[2,5,1]}
        />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
