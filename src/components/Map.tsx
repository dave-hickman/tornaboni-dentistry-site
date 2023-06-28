import "../styling/Map.css"

interface Location {
    address: string;
    lat: number;
    lng: number;
}

interface Props {
    location: Location,
    zoomLevel: number
}

const MapPage = ({location, zoomLevel}: Props) => {

    return( <section className="map-container"><p>This is the map</p></section>)
}

export default MapPage