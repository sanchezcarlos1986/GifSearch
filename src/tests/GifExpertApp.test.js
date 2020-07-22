import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';
import {shallow} from 'enzyme';

describe('GifExpertApp', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {};
    component = shallow(<GifExpertApp {...props} />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component.hasClass('GifExpertApp')).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should shows categories list', () => {
    const categories = ['Dragon Ball', 'Hunter X'];
    component = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(component).toMatchSnapshot();
    expect(component.find('GifGrid').length).toBe(categories.length);
  });
});
