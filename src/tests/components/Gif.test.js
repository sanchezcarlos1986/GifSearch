import React from 'react';
import Gif from '../../components/Gif';
import {shallow} from 'enzyme';

describe('Gif', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      id: '123',
      title: 'Mega Man',
      url: 'http://myurl.com',
    };
    component = shallow(<Gif {...props} />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component.hasClass('Gif')).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should renders the image', () => {
    expect(component.find('img').exists()).toBe(true);
    expect(component.find('img').props().src).toBe(props.url);
    expect(component.find('img').props().alt).toBe(props.title);
  });

  it('should renders the title', () => {
    expect(component.find('h4').exists()).toBe(true);
    expect(component.find('h4').text()).toBe(props.title);
  });
});
