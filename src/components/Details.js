import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAirData } from '../redux/airSlice';
import { imageMap } from './Home';
import statePopulationData from '../data/populationData.json';

function Details() {
  const { stateName } = useParams();
  const dispatch = useDispatch();
  const airData = useSelector((state) => state.air.data);
  const airStatus = useSelector((state) => state.air.status);

  useEffect(() => {
    dispatch(fetchAirData(stateName));
  }, [dispatch, stateName]);

  if (airStatus === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (airStatus === 'failed') {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="details-container">
      <div className="card-image" style={{ backgroundImage: `url(${imageMap[stateName]})`, position: 'relative' }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <h2 style={{ color: 'white' }}>{stateName}</h2>
          <p style={{ color: 'white' }}>
            Population:
            {' '}
            {statePopulationData[stateName]}
          </p>
        </div>
      </div>
      <div className="details-title">
        <h2>
          Air Quality of
          {' '}
          {stateName}
        </h2>
      </div>
      <div className="card">
        {airData && airData.list && airData.list[0] && airData.list[0].components ? (
          <table className="air-details-table">
            <tbody>
              <tr>
                <td>CO:</td>
                <td>{airData.list[0].components.co}</td>
              </tr>
              <tr>
                <td>NO:</td>
                <td>{airData.list[0].components.no}</td>
              </tr>
              <tr>
                <td>NO2:</td>
                <td>{airData.list[0].components.no2}</td>
              </tr>
              <tr>
                <td>O3:</td>
                <td>{airData.list[0].components.o3}</td>
              </tr>
              <tr>
                <td>SO2:</td>
                <td>{airData.list[0].components.so2}</td>
              </tr>
              <tr>
                <td>PM2.5:</td>
                <td>{airData.list[0].components.pm2_5}</td>
              </tr>
              <tr>
                <td>PM10:</td>
                <td>{airData.list[0].components.pm10}</td>
              </tr>
              <tr>
                <td>NH3:</td>
                <td>{airData.list[0].components.nh3}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default Details;
