import { useState } from "react";
import SignIn from "../components/sign/SignIn";
import SignUp from "../components/sign/SignUp";

const Sign = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <section>
            {isSignIn ? (
                <SignIn setIsSignIn={setIsSignIn} />
            ) : (
                <SignUp setIsSignIn={setIsSignIn} />
            )}
        </section>
    );
};

export default Sign;
