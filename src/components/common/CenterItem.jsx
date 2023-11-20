import PropTypes from "prop-types";
import Button from "./Button";
import { useDeleteCenter, usePostCenter } from "../../hooks/queries/centerAPI";
import { useMemberStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

const CenterItem = ({ id, address, centerName, updatedAt }) => {
    const { mutate: postMutate } = usePostCenter();
    const { mutate: deleteMutate } = useDeleteCenter();
    const isSignIn = useMemberStore((state) => state.isSignIn);
    const navigater = useNavigate();

    const handleSaveCenter = () => {
        postMutate({
            id,
            address,
            centerName,
            updatedAt,
        });
    };

    const handleDeleteCenter = () => {
        deleteMutate(id);
    };

    const handleClick = () => {
        if (isSignIn) {
            location.pathname === "/"
                ? handleSaveCenter()
                : handleDeleteCenter();
        } else {
            alert("로그인이 필요한 기능입니다.");
            navigater("/sign");
        }
    };

    return (
        <article className="flex items-end justify-between gap-4 bg-white px-12 py-5 mt-5 shadow-lg rounded">
            <div>
                <h3>{centerName}</h3>
                <p className="text-sm">{address}</p>
                <span className="text-xs">Last update: {updatedAt}</span>
            </div>
            <Button
                text={location.pathname === "/" ? "저장" : "삭제"}
                clickEvent={handleClick}
                color={location.pathname === "/" ? undefined : "red"}
            />
        </article>
    );
};

CenterItem.propTypes = {
    id: PropTypes.number,
    address: PropTypes.string,
    centerName: PropTypes.string,
    updatedAt: PropTypes.string,
};

export default CenterItem;
