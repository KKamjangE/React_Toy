import PropTypes from "prop-types";
import Button from "./Button";
import { useDeleteCenter, usePostCenter } from "../../hooks/queries/centerAPI";
import { useMemberStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

const CenterItem = ({ center }) => {
    const { mutate: postMutate } = usePostCenter();
    const { mutate: deleteMutate } = useDeleteCenter();
    const isSignIn = useMemberStore((state) => state.isSignIn);
    const navigater = useNavigate();

    const handleSaveCenter = () => {
        postMutate({
            id: center.id,
            address: center.address,
            centerName: center.centerName,
            updatedAt: center.updatedAt,
        });
    };

    const handleDeleteCenter = () => {
        deleteMutate(center.id);
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
        <article className="flex items-end justify-between gap-4 bg-gray-700 px-12 py-5 mb-5 shadow-lg shadow-slate-950 rounded">
            <div>
                <h3>{center.centerName}</h3>
                <p className="text-sm">{center.address}</p>
                <span className="text-xs">Last update: {center.updatedAt}</span>
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
    center: PropTypes.object.isRequired,
};

export default CenterItem;
