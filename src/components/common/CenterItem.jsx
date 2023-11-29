import PropTypes from "prop-types";
import { useMemberStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { toast } from "react-toastify";

const CenterItem = ({ center, clickEvent, btnName }) => {
    const isSignIn = useMemberStore((state) => state.isSignIn);
    const navigater = useNavigate();

    const handleClick = () => {
        if (isSignIn) {
            clickEvent(center);
        } else {
            toast.error("로그인이 필요한 기능입니다.");
            navigater("/sign");
        }
    };

    return (
        <Card
            elevation={6}
            sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                marginY: 3,
            }}
        >
            <CardContent>
                <Typography variant="h6">{center.centerName}</Typography>
                <Typography>{center.address}</Typography>
                <Typography variant="caption">
                    Last update: {center.updatedAt}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={handleClick}>
                    {btnName}
                </Button>
            </CardActions>
        </Card>
    );
};

CenterItem.propTypes = {
    center: PropTypes.object.isRequired,
    clickEvent: PropTypes.func.isRequired,
    btnName: PropTypes.string.isRequired,
};

export default CenterItem;
