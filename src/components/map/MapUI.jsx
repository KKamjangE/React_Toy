import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
} from "@react-google-maps/api";
import { useGetCenters } from "../../hooks/queries/centerAPI";
import { useCallback, useEffect, useState } from "react";
import useCalculateCoordinates from "../../hooks/map/useCalculateCoordinates";

const MapUI = () => {
    const { data } = useGetCenters();
    console.log("Map UI 렌더링");

    // Google 지도 API 및 관련 리소스 비동기적 로드
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    });

    // 지도 객체 상태관리
    const [map, setMap] = useState(null);
    const { center } = useCalculateCoordinates(data.data); // 중심 좌표 계산
    const [selectedMarker, setSelectedMarker] = useState(null);

    // 지도가 로드될 때 호출
    const onLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        data.data.forEach((centerItem) =>
            bounds.extend({ lat: centerItem.lat, lng: centerItem.lng }),
        );

        map.fitBounds(bounds);
        console.log("onLoad 실행");
        console.log(map);
        setMap(map);
    };

    // 지도가 언마운트될 때 호출
    const onUnmount = () => {
        setMap(null);
    };

    const handleMarkerClick = (e) => {
        map.panTo(e.latLng);
        setSelectedMarker(center);
    };
    useEffect(() => {
        console.log(isLoaded);
    }, [isLoaded]);

    useEffect(() => {
        console.log("map 상태 변경");
        console.log(map);
    }, [map]);

    const test = (e) => {
        console.log(e);
        console.log(map);
    };

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "1200px", height: "650px" }}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    zoom={10}
                    options={{
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
                    {data.data.map((center) => (
                        <MarkerF
                            key={center.id}
                            position={{ lat: center.lat, lng: center.lng }}
                            title={center.centerName}
                            onClick={test}
                        />
                    ))}
                    {selectedMarker && (
                        <InfoWindowF
                            position={{
                                lat: selectedMarker.lat,
                                lng: selectedMarker.lng,
                            }}
                            onCloseClick={() => setSelectedMarker(null)}
                            options={{}}
                        >
                            <div>
                                <h3 className="text-black">
                                    {selectedMarker.centerName}
                                </h3>
                            </div>
                        </InfoWindowF>
                    )}
                </GoogleMap>
            )}
        </>
    );
};

export default MapUI;
