import {renderHook} from '@testing-library/react-hooks';
const {useFetchGifs} = require('../../hooks/useFetchGifs');

describe('useFetchGifs hook', () => {
  test('should shows default values', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchGifs('Mega Man'),
    );
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should updates values', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useFetchGifs('Mega Man'),
    );
    await waitForNextUpdate();

    const {data, loading} = result.current;
    expect(data.length).toEqual(8);
    expect(loading).toBe(false);
  });
});
