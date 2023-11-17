import SignIn from "../components/sign/SignIn";
import SignUp from "../components/sign/SignUp";
import { useSignStore } from "../store/store";

const Sign = () => {
    const { isSignInView, setIsSignInView } = useSignStore();

    return (
        <section className="w-1/3">
            {isSignInView ? (
                <SignIn setIsSignInView={setIsSignInView} />
            ) : (
                <SignUp setIsSignInView={setIsSignInView} />
            )}
        </section>
    );
};

export default Sign;
