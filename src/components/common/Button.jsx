import PropTypes from "prop-types";

const Button = ({ text, clickEvent, color, type }) => {
    const classProps = {
        teal: "bg-teal-500 hover:bg-teal-700",
        red: "bg-red-600 hover:bg-red-700",
    };

    return (
        <button
            className={`${classProps[color]} rounded px-3 py-1 text-white transition`}
            onClick={clickEvent}
            type={type}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: "teal",
    type: "button",
    clickEvent: null,
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickEvent: PropTypes.func,
    color: PropTypes.string,
    type: PropTypes.string,
};

export default Button;
