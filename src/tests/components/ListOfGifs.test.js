import React from 'react';
import '@testing-library/jest-dom';
import ListOfGifs from '../../components/ListOfGifs';
import {shallow} from 'enzyme';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs.js');

describe('ListOfGifs', () => {
  let props;
  let component;

  it('should renders ok', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    props = {
      params: {keyword: 'Mega Man'},
    };
    component = shallow(<ListOfGifs {...props} />);
    expect(component).not.toBeNull();
    expect(component.hasClass('ListOfGifs')).toBe(true);
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
      params: {keyword: 'Mega Man'},
    };
    component = shallow(<ListOfGifs {...props} />);

    expect(component).not.toBeNull();
    // expect(component.find('Gif').length).toBe(gifs.length);
    expect(component.find('Gif').prop('id')).toBe(gifs[0].id);
    expect(component.find('Gif').prop('url')).toBe(gifs[0].url);
    expect(component.find('Gif').prop('title')).toBe(gifs[0].title);
    expect(component).toMatchSnapshot();
  });
});
