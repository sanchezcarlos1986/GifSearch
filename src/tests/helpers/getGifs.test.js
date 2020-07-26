import {getGifs, limit} from '../../helpers/getGifs';

describe('getGifs', () => {
  it('should fetch 8 "megaman" gifs', async () => {
    const gifs = await getGifs('megaman');
    expect(gifs.length).toBe(limit);
  });

  it('should fetch 8 "random" gifs', async () => {
    const gifs = await getGifs();
    expect(gifs.length).toBe(limit);
  });
});
