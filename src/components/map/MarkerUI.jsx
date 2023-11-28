import { InfoWindowF, MarkerF, useGoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import MarkerInfoUI from "./MarkerInfoUI";

const MarkerUI = ({
    center,
    clusterer,
    selectedMarkerId,
    setSelectedMarkerId,
}) => {
    const map = useGoogleMap();
    return (
        <>
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
                    map.panTo({
                        lat: center.lat,
                        lng: center.lng,
                    });
                }}
            >
                {selectedMarkerId === center.id && (
                    <InfoWindowF onCloseClick={() => setSelectedMarkerId(null)}>
                        <MarkerInfoUI center={center} />
                    </InfoWindowF>
                )}
            </MarkerF>
        </>
    );
};

MarkerUI.defaultProps = {
    clusterer: undefined,
};

MarkerUI.propTypes = {
    center: PropTypes.object.isRequired,
    clusterer: PropTypes.object,
    selectedMarkerId: PropTypes.string,
    setSelectedMarkerId: PropTypes.func.isRequired,
};

export default MarkerUI;
