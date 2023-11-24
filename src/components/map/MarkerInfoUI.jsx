import { useGoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import Button from "./../common/Button";

const MarkerInfoUI = ({ item }) => {
    const map = useGoogleMap();

    const handleZoom = () => {
        map.setZoom(18);
    };

    return (
        <div className="text-black flex flex-col gap-2 items-center">
            <h3>{item.centerName}</h3>
            <p>Call: {item.phoneNumber}</p>
            <div className="flex justify-center gap-2">
                <span>{item.lat}</span>
                <span>{item.lng}</span>
            </div>
            <Button text="확대" clickEvent={handleZoom} />
        </div>
    );
};

MarkerInfoUI.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MarkerInfoUI;
