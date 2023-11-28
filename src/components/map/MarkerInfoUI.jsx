import { useGoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import Button from "./../common/Button";

const MarkerInfoUI = ({ center }) => {
    const map = useGoogleMap();

    const handleZoom = () => {
        map.setZoom(18);
    };

    return (
        <div className="text-black flex flex-col gap-2 items-center">
            <h3>{center.centerName}</h3>
            <p>Call: {center.phoneNumber}</p>
            <div className="flex justify-center gap-2">
                <span>{center.lat}</span>
                <span>{center.lng}</span>
            </div>
            <Button text="확대" clickEvent={handleZoom} />
        </div>
    );
};

MarkerInfoUI.propTypes = {
    center: PropTypes.object.isRequired,
};

export default MarkerInfoUI;
