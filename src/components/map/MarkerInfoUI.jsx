import { useGoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { useEffect } from "react";

const MarkerInfoUI = ({ item }) => {
    const map = useGoogleMap();

    useEffect(() => {
        console.log(map);
    }, [map]);

    return (
        <div className="text-black flex flex-col gap-2 items-center">
            <h3>{item.centerName}</h3>
            <p>Call: {item.phoneNumber}</p>
            <div className="flex justify-center gap-2">
                <span>{item.lat}</span>
                <span>{item.lng}</span>
            </div>
            <button
                onClick={() => {
                    map.setZoom(20);
                }}
            >
                지도 줌 변경하기
            </button>
        </div>
    );
};

MarkerInfoUI.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MarkerInfoUI;
