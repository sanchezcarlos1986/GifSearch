import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';

describe('GifGridItem', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      title: 'Mega Man',
      url: 'http://myurl.com',
    };
    component = shallow(<GifGridItem {...props} />);
  });

  it('should renders ok', () => {
    expect(component).not.toBeNull();
    expect(component.hasClass('GifGridItem')).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should renders the image', () => {
    expect(component.find('img').exists()).toBe(true);
    expect(component.find('img').props().src).toBe(props.url);
    expect(component.find('img').props().alt).toBe(props.title);
  });

  it('should renders the title', () => {
    expect(component.find('p').exists()).toBe(true);
    expect(component.find('p').text()).toBe(props.title);
  });
});
