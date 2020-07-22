import React from 'react';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import {shallow} from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs.js');

describe('GifGrid', () => {
  let props;
  let component;

  it('should renders ok', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    props = {
      category: 'Mega Man',
    };
    component = shallow(<GifGrid {...props} />);
    expect(component).not.toBeNull();
    expect(component.hasClass('GifGrid')).toBe(true);
    expect(component).toMatchSnapshot();
  });

  it('should renders items when images are loaded', () => {
    const gifs = [
      {
        id: 'abc',
        url: 'https://mygif.com',
        title: 'totoro',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    props = {
      category: 'Mega Man',
    };
    component = shallow(<GifGrid {...props} />);

    expect(component).not.toBeNull();
    expect(component.find('ul').exists()).toBe(true);
    expect(component.find('GifGridItem').length).toBe(gifs.length);
    expect(component.find('GifGridItem').prop('id')).toBe(gifs[0].id);
    expect(component.find('GifGridItem').prop('url')).toBe(gifs[0].url);
    expect(component.find('GifGridItem').prop('title')).toBe(gifs[0].title);
    expect(component).toMatchSnapshot();
  });
});
