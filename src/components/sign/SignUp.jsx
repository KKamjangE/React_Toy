import { usePostSignUp } from "../../hooks/queries/signAPI";
import { useSignStore } from "../../store/store";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
} from "@mui/material";
import { useFormik } from "formik";
import { SignUpSchema } from "../../contents/validationSchema";
import SignTextField from "./SignTextField";

const SignUp = () => {
    const { setIsSignInTab } = useSignStore((state) => ({
        setIsSignInTab: state.setIsSignInTab,
    }));
    const { mutate } = usePostSignUp();
    const formik = useFormik({
        initialValues: {
            name: "",
            userId: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (form) => {
            mutate({
                name: form.name,
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
                    <CardHeader title="Sign Up" />
                    <SignTextField label="Name" name="name" formik={formik} />
                    <SignTextField label="ID" name="userId" formik={formik} />
                    <SignTextField
                        label="Password"
                        name="password"
                        formik={formik}
                        type="password"
                    />
                    <SignTextField
                        label="Confirm Password"
                        name="confirmPassword"
                        formik={formik}
                        type="password"
                    />
                    <CardActions sx={{ justifyContent: "space-around" }}>
                        <Button variant="contained" type="submit">
                            submit
                        </Button>
                        <Button variant="contained" onClick={setIsSignInTab}>
                            Sign in
                        </Button>
                    </CardActions>
                </CardContent>
            </form>
        </Card>
    );
};

export default SignUp;
