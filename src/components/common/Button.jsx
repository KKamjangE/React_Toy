import PropsTypes from "prop-types";

const Button = ({ text, clickEvent, color, type }) => {
    const classProps = {
        teal: "bg-teal-500 hover:bg-teal-700",
        red: "bg-red-600 hover:bg-red-700",
    };

    const getClass = (color) => {
        return classProps[color];
    };

    return (
        <button
            className={`${getClass(
                color
            )} rounded px-3 py-1 text-white transition`}
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
    text: PropsTypes.string.isRequired,
    clickEvent: PropsTypes.func,
    color: PropsTypes.string,
    type: PropsTypes.string,
};

export default Button;
