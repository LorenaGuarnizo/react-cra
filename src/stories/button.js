import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../common/button/Button';

storiesOf('Button', module)
  .add('counter', () => <Button onClick={action('clicked')}>Counter Button</Button>);
