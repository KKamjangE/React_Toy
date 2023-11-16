import PropTypes from "prop-types";

const Input = ({ label, register, options, errors, type }) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                type={type}
                {...register(label, options)}
                autoComplete="off"
            />
            {errors[label] && (
                <p className="text-red-500 text-sm">{errors[label].message}</p>
            )}
        </div>
    );
};

Input.defaultProps = {
    type: "text",
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    options: PropTypes.object,
    type: PropTypes.string,
    errors: PropTypes.object,
};

export default Input;
