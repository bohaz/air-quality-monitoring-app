import airReducer, { fetchAirData } from '../redux/airSlice';

jest.mock('axios');

describe('airReducer', () => {
  it('should handle initial state', () => {
    expect(airReducer(undefined, {})).toEqual({
      data: {},
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchAirData.pending', () => {
    expect(airReducer({}, { type: fetchAirData.pending.type })).toEqual({
      status: 'loading',
    });
  });

  it('should handle fetchAirData.fulfilled', () => {
    const mockData = { list: ['test'] };
    expect(airReducer({}, { type: fetchAirData.fulfilled.type, payload: mockData })).toEqual({
      status: 'succeeded',
      data: mockData,
    });
  });

  it('should handle fetchAirData.rejected', () => {
    const mockError = new Error('Failed to fetch data');
    expect(airReducer({}, { type: fetchAirData.rejected.type, error: mockError })).toEqual({
      status: 'failed',
      error: mockError.message,
    });
  });
});
