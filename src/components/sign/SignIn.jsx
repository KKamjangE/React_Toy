import { usePostSignIn } from "./../../hooks/queries/signAPI";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useSignStore } from "../../store/store";
import useValidCheck from "../../hooks/useValidCheck";

const SignIn = () => {
    const { setIsSignInTab } = useSignStore((state) => ({
        setIsSignInTab: state.setIsSignInTab,
    }));
    const { mutate } = usePostSignIn();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const { checkId, checkPwd } = useValidCheck();
    const { error: idError } = checkId(userId);
    const { error: pwdError } = checkPwd(password);

    const handleSubmitSign = () => {
        if (idError === null && pwdError === null) {
            mutate({
                userId,
                password,
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <Card sx={{ display: "flex", justifyContent: "center" }}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    <CardHeader title="Sign-in" />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <TextField
                            label="ID"
                            size="small"
                            autoComplete="off"
                            onChange={(e) => setUserId(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSubmitSign();
                            }}
                            required
                        />
                        {idError && (
                            <Typography variant="caption" color={"error"}>
                                {idError}
                            </Typography>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <TextField
                            label="Password"
                            size="small"
                            autoComplete="off"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSubmitSign();
                            }}
                            required
                        />
                        {pwdError && (
                            <Typography variant="caption" color={"error"}>
                                {pwdError}
                            </Typography>
                        )}
                    </Box>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button variant="contained" onClick={handleSubmitSign}>
                            submit
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => setIsSignInTab("in")}
                        >
                            Sign-up
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SignIn;
