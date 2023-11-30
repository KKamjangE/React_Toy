import PropTypes from "prop-types";
import { Button, Paper, Typography } from "@mui/material";

const FallbackUI = ({ error, resetErrorBoundary }) => {
    return (
        <Paper
            elevation={6}
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingY: 5,
            }}
        >
            <Typography variant="h6">{error.message}</Typography>
            <Button
                variant="contained"
                onClick={resetErrorBoundary}
                color="error"
            >
                Try again
            </Button>
        </Paper>
    );
};

FallbackUI.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};

export default FallbackUI;
