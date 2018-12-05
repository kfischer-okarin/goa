import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(f => req(f));
}

configure(loadStories, module);
