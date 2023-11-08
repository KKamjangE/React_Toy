import { useState } from "react";
import SignIn from "../components/sign/SignIn";
import SignUp from "../components/sign/SignUp";

const Sign = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <>
            {isSignIn ? (
                <SignIn setIsSignIn={setIsSignIn} />
            ) : (
                <SignUp setIsSignIn={setIsSignIn} />
            )}
        </>
    );
};

export default Sign;
