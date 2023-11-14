import ErrorImg from "../assets/images/internalServerError.png";

const InternalServerError = () => {
    return (
        <>
            <img className="w-1/3" src={ErrorImg} alt="internal server error" />
        </>
    );
};

export default InternalServerError;
