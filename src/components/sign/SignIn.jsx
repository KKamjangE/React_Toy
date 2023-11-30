import { usePostSignIn } from "./../../hooks/queries/signAPI";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
} from "@mui/material";
import { useSignStore } from "../../store/store";
import { useFormik } from "formik";
import { SignInSchema } from "../../contents/validationSchema";
import SignTextField from "./SignTextField";

const SignIn = () => {
    const { setIsSignInTab } = useSignStore((state) => ({
        setIsSignInTab: state.setIsSignInTab,
    }));
    const { mutate } = usePostSignIn();
    const formik = useFormik({
        initialValues: {
            userId: "",
            password: "",
        },
        validationSchema: SignInSchema,
        onSubmit: (form) => {
            mutate({
                userId: form.userId,
                password: form.password,
            });
        },
    });

    return (
        <Card sx={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={formik.handleSubmit}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        width: 300,
                    }}
                >
                    <CardHeader title="Sign In" />
                    <SignTextField label="ID" name="userId" formik={formik} />
                    <SignTextField
                        label="Password"
                        name="password"
                        formik={formik}
                        type="password"
                    />
                    <CardActions sx={{ justifyContent: "space-around" }}>
                        <Button variant="contained" type="submit">
                            submit
                        </Button>
                        <Button variant="contained" onClick={setIsSignInTab}>
                            Sign up
                        </Button>
                    </CardActions>
                </CardContent>
            </form>
        </Card>
    );
};

export default SignIn;
