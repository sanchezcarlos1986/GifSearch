import React from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import {shallow} from 'enzyme';

describe('AddCategory', () => {
  let props;
  let component;
  const preventDefault = () => {};

  beforeEach(() => {
    props = {
      setCategories: jest.fn(),
    };
    component = shallow(<AddCategory {...props} />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component.hasClass('AddCategory')).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should type something on input', () => {
    const value = 'Mega Man';
    component.find('input').simulate('change', {target: {value}});
  });

  it('should not trigger post data on submit', () => {
    component.find('form').simulate('submit', {preventDefault});
    expect(props.setCategories).not.toHaveBeenCalled();
  });

  it('should calls setCategories and clear input', () => {
    const value = 'Totoro';
    component.find('input').simulate('change', {target: {value}});
    expect(component.find('input').prop('value')).toBe(value);
    component.find('form').simulate('submit', {preventDefault});
    expect(props.setCategories).toHaveBeenCalledTimes(1);
    expect(props.setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(component.find('input').prop('value')).toBe('');
  });
});
