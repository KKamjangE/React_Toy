import { useState } from "react";
import Button from "../components/common/Button";

const Sign = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const onHandleClickTab = () => {
        setIsSignIn((prev) => !prev);
    };
    const onHandleSubmitSign = () => {};
    return (
        <section className="w-1/3 flex flex-col items-center gap-10 bg-white py-10 rounded">
            {isSignIn ? (
                <div className="flex flex-col gap-5 ">
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
            ) : (
                <div className="flex flex-col gap-5 ">
                    <p className="text-xl font-semibold">Sign-up</p>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sign-up-name">User Name</label>
                        <input
                            id="sign-up-name"
                            className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                            type="text"
                            placeholder="New Name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sign-up-id">User ID</label>
                        <input
                            id="sign-up-id"
                            className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                            type="text"
                            placeholder="New ID"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sign-up-password">Password</label>
                        <input
                            id="sign-up-password"
                            className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                            type="password"
                            placeholder="New Password"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="sign-up-check-password">
                            Check Password
                        </label>
                        <input
                            id="sign-up-check-password"
                            className="border hover:border-teal-500 focus:outline-teal-600 transition px-2 py-1"
                            type="password"
                            placeholder="Check Password"
                        />
                    </div>
                </div>
            )}
            <div className="flex gap-5">
                <Button text="Submit" clickEvent={onHandleSubmitSign} />
                <Button
                    text={isSignIn ? "Sign-up" : "Sign-in"}
                    clickEvent={onHandleClickTab}
                />
            </div>
        </section>
    );
};

export default Sign;
