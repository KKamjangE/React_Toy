import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useMemberStore } from "../../store/store";
import { pathnames } from "../../contents/pathnames";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
    const { memberInfo, clearMember } = useMemberStore((state) => ({
        memberInfo: state.memberInfo,
        clearMember: state.clearMember,
    }));

    const navigater = useNavigate();

    const onHandleClickSignOut = () => {
        clearMember();
        navigater(pathnames.sign);
    };
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"md"}>
                <Toolbar
                    sx={{ justifyContent: "space-between" }}
                    disableGutters={true}
                >
                    <Typography variant="h5">Toy Project</Typography>
                    <Button component={RouterLink} to={pathnames.home}>
                        Home
                    </Button>
                    <Button component={RouterLink} to={pathnames.list}>
                        List
                    </Button>
                    <Button component={RouterLink} to={pathnames.map}>
                        Map
                    </Button>
                    <Button component={RouterLink} to={pathnames.chart}>
                        Chart
                    </Button>
                    {memberInfo.memberName ? (
                        <Button onClick={onHandleClickSignOut}>
                            {memberInfo.memberName}
                        </Button>
                    ) : (
                        <Button component={RouterLink} to={pathnames.sign}>
                            Sign
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
