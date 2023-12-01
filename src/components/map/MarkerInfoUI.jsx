import { useGoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MarkerInfoUI = ({ center }) => {
    const map = useGoogleMap();

    const handleZoom = () => {
        map.setZoom(18);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1,
                color: grey[700],
            }}
        >
            <Typography variant="subtitle1">{center.centerName}</Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "",
                    alignItems: "end",
                    gap: 5,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="caption">
                        Call: {center.phoneNumber}
                    </Typography>
                    <Typography variant="caption">lat: {center.lat}</Typography>
                    <Typography variant="caption">lng: {center.lng}</Typography>
                </Box>
                <Button variant="contained" onClick={handleZoom}>
                    확대
                </Button>
            </Box>
        </Box>
    );
};

MarkerInfoUI.propTypes = {
    center: PropTypes.object.isRequired,
};

export default MarkerInfoUI;
