import PropTypes from "prop-types";
import Button from "./Button";

const Error = ({ error, retry }) => {
    console.log(error);
    return (
        <div className="flex gap-5 justify-between items-center bg-white px-12 py-5 shadow-lg">
            <span>{error.message}...</span>
            <Button text={"재시도"} color={"red"} clickEvent={retry} />
        </div>
    );
};

Error.propTypes = {
    error: PropTypes.object.isRequired,
    retry: PropTypes.func.isRequired,
};

export default Error;
