import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Details from '../components/Details';
import { store } from '../redux/store';

jest.mock('axios');

describe('<Details />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows "Loading..." while loading data', async () => {
    const mockData = { data: {} };
    axios.get.mockResolvedValueOnce(mockData);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/SomeState']}>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  it('displays "Error loading data." if there is an error loading the data', async () => {
    axios.get.mockRejectedValueOnce(new Error('Error al cargar'));

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/SomeState']}>
          <Details />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    expect(getByText('Error loading data.')).toBeInTheDocument();
  });
});
