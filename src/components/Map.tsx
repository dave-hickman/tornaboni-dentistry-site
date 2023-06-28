import "../styling/Map.css";
import GoogleMapReact from "google-map-react";
import dotenv from 'dotenv'
dotenv.config()

interface Location {
  address: string;
  lat: number;
  lng: number;
}

interface Props {
  location: Location;
  zoomLevel: number;
}

const MapPage = ({ location, zoomLevel }: Props) => {
    const apiKey = process.env.API_KEY || ""
  return (
    <section className="map-container">
      <div className="google-map">
        <GoogleMapReact 
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={location}
        defaultZoom={zoomLevel}>
        {/* <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}/> */}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default MapPage;
