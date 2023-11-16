import PropTypes from "prop-types";
import Button from "./Button";

const FallbackUI = ({ error, resetErrorBoundary }) => {
    return (
        <div className="flex gap-5 justify-between items-center bg-white px-12 py-5 shadow-lg">
            <span>{error.message}...</span>
            <Button
                clickEvent={resetErrorBoundary}
                text="Try again"
                color={"red"}
            />
        </div>
    );
};

FallbackUI.propTypes = {
    error: PropTypes.object.isRequired,
    resetErrorBoundary: PropTypes.func.isRequired,
};

export default FallbackUI;
