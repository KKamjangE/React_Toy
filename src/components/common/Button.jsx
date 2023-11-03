import PropsTypes from "prop-types";

const Button = ({ text, clickEvent }) => {
    return (
        <button
            className="bg-teal-500 rounded px-3 py-1 text-white hover:bg-teal-700 transition"
            onClick={clickEvent}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropsTypes.string.isRequired,
    clickEvent: PropsTypes.func.isRequired,
};

export default Button;
