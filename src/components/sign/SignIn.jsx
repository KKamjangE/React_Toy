import Button from "../common/Button";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { usePostSignIn } from "./../../hooks/queries/signAPI";

const SignIn = ({ setIsSignInView }) => {
    const defaultValues = {
        "User ID": "",
        Password: "",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });

    const { mutate } = usePostSignIn();

    const onHandleSubmitSign = (data) => {
        mutate({
            userId: data["User ID"],
            password: data["Password"],
        });
    };

    return (
        <form
            className="flex flex-col items-center gap-10 bg-gray-700 py-10 rounded shadow-xl shadow-slate-950"
            onSubmit={handleSubmit(onHandleSubmitSign)}
        >
            <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold">Sign-in</p>
                <Input
                    label={"User ID"}
                    register={register}
                    options={{
                        required: "ID is required",
                        pattern: /[A-Za-z0-9]/g,
                    }}
                    errors={errors}
                />
                <Input
                    label={"Password"}
                    register={register}
                    options={{
                        required: "Password is required",
                        pattern: /[A-Za-z0-9]/g,
                    }}
                    errors={errors}
                    type={"password"}
                />
            </div>

            <div className="flex gap-5">
                <Button text="Submit" type={"submit"} />
                <Button text={"Sign-up"} clickEvent={setIsSignInView} />
            </div>
        </form>
    );
};

SignIn.propTypes = {
    setIsSignInView: PropTypes.func.isRequired,
};

export default SignIn;
