import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds({
            lat: 37.5649867,
            lng: 126.985575,
        });
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback((map) => {
        setMap(null);
    }, []);

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "1200px", height: "650px" }}
                    center={{ lat: 37.5649867, lng: 126.985575 }}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={{ minZoom: 4, maxZoom: 18 }}
                >
                    <Marker position={{ lat: 37.5649867, lng: 126.985575 }} />
                </GoogleMap>
            )}
        </>
    );
};

export default Map;
