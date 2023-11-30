import PropTypes from "prop-types";
import { Button } from "@mui/material";

const FallbackUI = ({ error, resetErrorBoundary }) => {
    return (
        <div className="flex gap-5 justify-between items-end bg-gray-700 px-12 py-5 shadow-xl shadow-slate-950">
            <span>{error.message}...</span>
            <Button onClick={resetErrorBoundary} color="error">
                Try again
            </Button>
        </div>
    );
};

FallbackUI.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};

export default FallbackUI;
