import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../SignUp';

// Tried adding a happy path test, but configuring jest would've taken too much time
describe('<SignUp />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <SignUp />
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});