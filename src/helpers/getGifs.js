export const limit = 8;

export const getGifs = async (category) => {
  try {
    const apiKey = '1YST8FDtdIB5qC8fDVGwNW8V2olj2b92';
    const baseURL = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category,
    )}&limit=${limit}`;
    const url = `${baseURL}&api_key=${apiKey}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  } catch (err) {
    // Error handler
    console.error('err:', err);
  }
};
