import Button from "../common/Button";
import PropsTypes from "prop-types";
import { useForm } from "react-hook-form";
import { usePostSignUp } from "../../hooks/queries/signAPI";
import Input from "./Input";

const SignUp = ({ setIsSignIn }) => {
    const defaultValues = {
        Name: "",
        "User ID": "",
        Password: "",
        "Check Password": "",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ defaultValues });

    const { mutate } = usePostSignUp();

    const onHandleSubmitSign = (data) => {
        mutate({
            name: data["Name"],
            userId: data["User ID"],
            password: data["Password"],
        });
    };

    const validatePassword = (value) => {
        const password = watch("Password");
        return value === password || "password do not match";
    };

    return (
        <form
            className="flex flex-col items-center gap-10 bg-white py-10 rounded"
            onSubmit={handleSubmit(onHandleSubmitSign)}
        >
            <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold">Sign-up</p>
                <Input
                    label={"Name"}
                    register={register}
                    options={{
                        required: "name is required!",
                        minLength: 3,
                        maxLength: 10,
                        pattern: /[A-Za-z0-9]/g,
                    }}
                    errors={errors}
                />
                <Input
                    label={"User ID"}
                    register={register}
                    options={{
                        required: "ID is required!",
                        minLength: 3,
                        maxLength: 20,
                        pattern: /[A-Za-z0-9]/g,
                    }}
                    errors={errors}
                />
                <Input
                    label={"Password"}
                    register={register}
                    options={{
                        required: "Password is required!",
                        minLength: 4,
                        maxLength: 20,
                        pattern: /[A-Za-z0-9]/g,
                    }}
                    type={"password"}
                    errors={errors}
                />
                <Input
                    label={"Check Password"}
                    register={register}
                    options={{
                        required: true,
                        minLength: 4,
                        maxLength: 20,
                        pattern: /[A-Za-z0-9]/g,
                        validate: validatePassword,
                    }}
                    type={"password"}
                    errors={errors}
                />
            </div>
            <div className="flex gap-5">
                <Button text={"Submit"} type={"submit"} />
                <Button text={"Sign-in"} clickEvent={setIsSignIn} />
            </div>
        </form>
    );
};

SignUp.propTypes = {
    setIsSignIn: PropsTypes.func.isRequired,
};

export default SignUp;
