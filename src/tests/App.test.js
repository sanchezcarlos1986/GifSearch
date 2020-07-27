import React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import {shallow} from 'enzyme';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component.hasClass('App')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
