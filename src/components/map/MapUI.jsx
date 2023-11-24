import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useJsApiLoader,
    MarkerClustererF,
} from "@react-google-maps/api";
import { useGetCenters } from "../../hooks/queries/centerAPI";
import { useCallback, useState } from "react";
import useCalculateCoordinates from "../../hooks/map/useCalculateCoordinates";
import MarkerInfoUI from "./MarkerInfoUI";

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
    const [selectedMarkerId, setSelectedMarkerId] = useState(null); // 마커 선택
    const [center, setCenter] = useState(initCenter); // 지도 중앙값

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
                    onClick={() => setSelectedMarkerId(null)}
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
                    <MarkerClustererF averageCenter={true}>
                        {(clusterer) =>
                            map &&
                            data.data.map((center) => (
                                <MarkerF
                                    key={center.id}
                                    position={{
                                        lat: center.lat,
                                        lng: center.lng,
                                    }}
                                    title={center.centerName}
                                    clusterer={clusterer}
                                    onClick={() => {
                                        setSelectedMarkerId(center.id);
                                        setCenter({
                                            lat: center.lat,
                                            lng: center.lng,
                                        });
                                    }}
                                >
                                    {selectedMarkerId === center.id && (
                                        <InfoWindowF
                                            onCloseClick={() =>
                                                setSelectedMarkerId(null)
                                            }
                                            options={{}}
                                        >
                                            <MarkerInfoUI item={center} />
                                        </InfoWindowF>
                                    )}
                                </MarkerF>
                            ))
                        }
                    </MarkerClustererF>
                </GoogleMap>
            )}
        </>
    );
};

export default MapUI;
