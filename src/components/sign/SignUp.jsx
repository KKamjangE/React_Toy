import { usePostSignUp } from "@/hooks/queries/signAPI";
import { useSignStore } from "@/store/store";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
} from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "@/contents/validationSchema";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Input from "@/components/common/Input";

const SignUp = () => {
    const { setIsSignInTab } = useSignStore((state) => ({
        setIsSignInTab: state.setIsSignInTab,
    }));
    const { mutate, isPending } = usePostSignUp();
    const formik = useFormik({
        initialValues: {
            name: "",
            userId: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: signUpSchema,
        onSubmit: (form) => {
            mutate({
                name: form.name,
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
                    <CardHeader title="Sign Up" />
                    <Input label="Name" name="name" formik={formik} />
                    <Input label="ID" name="userId" formik={formik} />
                    <Input
                        label="Password"
                        name="password"
                        formik={formik}
                        type="password"
                    />
                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
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
                            Sign in
                        </Button>
                    </CardActions>
                </CardContent>
            </form>
        </Card>
    );
};

export default SignUp;
