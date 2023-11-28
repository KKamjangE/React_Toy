import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box justifyContent="center" display="flex" marginBottom={20}>
            <Outlet />
        </Box>
    );
};

export default Layout;
