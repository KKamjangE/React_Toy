import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
} from "@react-google-maps/api";
import { useGetCenters } from "../../hooks/queries/centerAPI";
import { useCallback, useState } from "react";
import useCalculateCoordinates from "../../hooks/map/useCalculateCoordinates";

const MapUI = () => {
    const { data } = useGetCenters();
    // Google 지도 API 및 관련 리소스 비동기적 로드
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    });

    // 지도 객체 상태관리
    const [map, setMap] = useState(null);
    const { center: initCenter } = useCalculateCoordinates(data.data); // 중심 좌표 계산
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [center, setCenter] = useState(initCenter);

    // 지도가 로드될 때 호출
    const onLoad = useCallback(
        (map) => {
            const bounds = new window.google.maps.LatLngBounds();
            data.data.forEach((centerItem) =>
                bounds.extend({ lat: centerItem.lat, lng: centerItem.lng }),
            );

            map.fitBounds(bounds);
            setMap(map);
        },
        [data],
    );

    // 지도가 언마운트될 때 호출
    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "1200px", height: "650px" }}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    zoom={10}
                    onClick={() => setSelectedMarker(null)}
                    options={{
                        maxZoom: 18,
                        minZoom: 4,
                        streetViewControl: false,
                        mapTypeControl: false,
                        styles: [
                            {
                                featureType: "transit",
                                elementType: "labels",
                                stylers: [{ visibility: "off" }],
                            },
                            {
                                featureType: "road",
                                elementType: "labels",
                                stylers: [{ visibility: "off" }],
                            },
                        ],
                    }}
                >
                    {map &&
                        data.data.map((center) => (
                            <MarkerF
                                key={center.id}
                                position={{ lat: center.lat, lng: center.lng }}
                                title={center.centerName}
                                onClick={() => {
                                    setSelectedMarker(center.id);
                                    setCenter({
                                        lat: center.lat,
                                        lng: center.lng,
                                    });
                                }}
                            >
                                {selectedMarker === center.id && (
                                    <InfoWindowF
                                        onCloseClick={() =>
                                            setSelectedMarker(null)
                                        }
                                        options={{}}
                                    >
                                        <div className="text-black flex flex-col gap-2 items-center">
                                            <h3>{center.centerName}</h3>
                                            <p>Call: {center.phoneNumber}</p>
                                            <div className="flex justify-center gap-2">
                                                <span>{center.lat}</span>
                                                <span>{center.lng}</span>
                                            </div>
                                        </div>
                                    </InfoWindowF>
                                )}
                            </MarkerF>
                        ))}
                </GoogleMap>
            )}
        </>
    );
};

export default MapUI;
