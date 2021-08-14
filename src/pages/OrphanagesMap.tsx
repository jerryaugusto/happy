import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import mapMarker from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando sua visita! :)</p>
        </header>

        <footer>
          <strong>Barra do Bugres</strong>
          <span>Mato Grosso</span>
        </footer>
      </aside>

      <MapContainer
        className="marker-map"
        center={[
          process.env.REACT_APP_LATITUDE_COORDINATE,
          process.env.REACT_APP_LONGITUDE_COORDINATE,
        ]}
        zoom={15}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
