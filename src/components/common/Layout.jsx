import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
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
