import PropTypes from "prop-types";
import Button from "./Button";

const FallbackUI = (resetErrorBoundary) => {
    return (
        <div className="flex gap-5 justify-between items-center bg-white px-12 py-5">
            <span>{resetErrorBoundary.error.message}...</span>
            <div className="self-end">
                <Button
                    clickEvent={resetErrorBoundary.resetErrorBoundary}
                    text="Try again"
                    color={"red"}
                />
            </div>
        </div>
    );
};

FallbackUI.propsTypes = {
    resetErrorBoundary: PropTypes.object.isRequired,
};

export default FallbackUI;
