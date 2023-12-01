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
import { signInSchema } from "../../contents/validationSchema";
import Input from "./../common/Input";
import Send from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";

const SignIn = () => {
    const { setIsSignInTab } = useSignStore((state) => ({
        setIsSignInTab: state.setIsSignInTab,
    }));
    const { mutate, isPending } = usePostSignIn();
    const formik = useFormik({
        initialValues: {
            userId: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: (form) => {
            mutate({
                userId: form.userId,
                password: form.password,
            });
        },
    });

    return (
        <Card elevation={6} sx={{ display: "flex", justifyContent: "center" }}>
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
                    <Input label="ID" name="userId" formik={formik} />
                    <Input
                        label="Password"
                        name="password"
                        formik={formik}
                        type="password"
                    />
                    <CardActions sx={{ justifyContent: "space-around" }}>
                        <LoadingButton
                            loading={isPending}
                            variant="contained"
                            type="submit"
                            endIcon={<Send />}
                        >
                            submit
                        </LoadingButton>
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
