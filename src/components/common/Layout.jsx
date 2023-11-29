import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    paddingTop: 8,
                    paddingBottom: 20,
                }}
            >
                <Outlet />
            </Box>
        </Container>
    );
};

export default Layout;
