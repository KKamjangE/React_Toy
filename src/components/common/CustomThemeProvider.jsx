import { ThemeProvider, createTheme } from "@mui/material";
import PropTypes from "prop-types";
import { useThemeStore } from "../../store/store";
import { indigo } from "@mui/material/colors";

const CustomThemeProvider = ({ children }) => {
    const { isDarkMode } = useThemeStore((state) => ({
        isDarkMode: state.isDarkMode,
    }));
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
            ...(isDarkMode
                ? {}
                : {
                      primary: indigo,
                  }),
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        padding: 20,
                    },
                },
            },
        },
    });
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

CustomThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomThemeProvider;
