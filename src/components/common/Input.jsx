import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({ label, name, formik, type = "text" }) => {
    return (
        <TextField
            label={label}
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched[name] && formik.errors[name]}
            error={formik.touched[name] && !!formik.errors[name]}
            size="small"
            autoComplete="off"
            type={type}
        />
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    type: PropTypes.string,
};

export default Input;
