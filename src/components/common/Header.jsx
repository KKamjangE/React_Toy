import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useMemberStore, useThemeStore } from "@/store/store";
import { pathnames } from "@/contents/pathnames";
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
    const { memberInfo, clearMember, isSignIn } = useMemberStore((state) => ({
        memberInfo: state.memberInfo,
        clearMember: state.clearMember,
        isSignIn: state.isSignIn,
    }));
    const { isDarkMode, setIsDarkMode } = useThemeStore();

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
                    {isSignIn ? (
                        <Button onClick={onHandleClickSignOut}>
                            {memberInfo.memberName}
                        </Button>
                    ) : (
                        <Button component={RouterLink} to={pathnames.sign}>
                            Sign
                        </Button>
                    )}
                    <IconButton onClick={setIsDarkMode}>
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
