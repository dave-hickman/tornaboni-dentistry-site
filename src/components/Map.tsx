import "../styling/Map.css";
import { useLoadScript, GoogleMap, Marker} from "@react-google-maps/api";
import { useMemo } from "react";




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
    const name = import.meta.env.VITE_API_KEY
    console.log(name)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: name,
  });
  const center = useMemo(() => ({ lat: location.lat, lng: location.lng }), []);
  return (
    <section className="map-container">
      <div className="google-map">
        {!isLoaded ? (
          <p>Loading...</p>
        ) : (
          <GoogleMap
            mapContainerClassName="map"
            center={center}
            zoom={zoomLevel}
          >
            <Marker position={{lat: location.lat, lng: location.lng}}/>
          </GoogleMap>
        )}
      </div>
    </section>
  );
};

export default MapPage;
