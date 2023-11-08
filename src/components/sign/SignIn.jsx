import Button from "../common/Button";
import PropsTypes from "prop-types";

const SignIn = ({ setIsSignIn }) => {
    const onHandleSubmitSign = () => {};
    return (
        <section className="w-1/3 flex flex-col items-center gap-10 bg-white py-10 rounded">
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
                <Button text="Submit" clickEvent={onHandleSubmitSign} />
                <Button
                    text={"Sign-up"}
                    clickEvent={() => setIsSignIn((prev) => !prev)}
                />
            </div>
        </section>
    );
};

SignIn.propTypes = {
    setIsSignIn: PropsTypes.func.isRequired,
};

export default SignIn;
