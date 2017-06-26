import React from 'react';
import { storiesOf } from '@kadira/storybook';// eslint-disable-line
import Search from '../src/components/Search';

storiesOf('Search', module)
  .add('with getTerm', () => (
    <Search getTerm={term => console.log(term)} />
  ));
