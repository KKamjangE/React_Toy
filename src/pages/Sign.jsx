import { Container } from "@mui/material";
import SignIn from "@/components/sign/SignIn";
import SignUp from "@/components/sign/SignUp";
import { useSignStore } from "@/store/store";

const Sign = () => {
    const { isSignInTab } = useSignStore((state) => ({
        isSignInTab: state.isSignInTab,
    }));

    return (
        <Container maxWidth="sm">
            {isSignInTab ? <SignIn /> : <SignUp />}
        </Container>
    );
};

export default Sign;
