import Button from "../common/Button";
import PropsTypes from "prop-types";

const SignIn = ({ setIsSignInView }) => {
    const onHandleSubmitSign = () => {};
    return (
        <form className="flex flex-col items-center gap-10 bg-white py-10 rounded">
            <div className="flex flex-col gap-5">
                <p className="text-xl font-semibold">Sign-in</p>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sign-in-id">User ID</label>
                    <input
                        id="sign-in-id"
                        className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                        type="text"
                        placeholder="Your ID"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sign-in-password">Password</label>
                    <input
                        id="sign-in-password"
                        className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                        type="password"
                        placeholder="Your Password"
                    />
                </div>
            </div>

            <div className="flex gap-5">
                <Button
                    text="Submit"
                    clickEvent={onHandleSubmitSign}
                    type={"submit"}
                />
                <Button text={"Sign-up"} clickEvent={setIsSignInView} />
            </div>
        </form>
    );
};

SignIn.propTypes = {
    setIsSignInView: PropsTypes.func.isRequired,
};

export default SignIn;
