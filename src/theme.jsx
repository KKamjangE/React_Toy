import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
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

export default theme;
