import PropTypes from "prop-types";
import Button from "../common/Button";
import { useDeleteCenter, usePostCenter } from "../../hooks/queries/centerAPI";
import { useMemberStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Center = ({ center }) => {
    const { mutate: postMutate } = usePostCenter();
    const { mutate: deleteMutate } = useDeleteCenter();
    const isSignIn = useMemberStore((state) => state.isSignIn);
    const navigater = useNavigate();

    const onHandleClickSaveCenter = () => {
        if (isSignIn) {
            postMutate({
                id: center.id,
                address: center.address,
                centerName: center.centerName,
                updatedAt: center.updatedAt,
            });
        } else {
            alert("로그인이 필요한 기능입니다.");
            navigater("/sign");
        }
    };

    const onHandleClickDeleteCenter = () => {
        deleteMutate(center.id);
    };

    return (
        <article className="flex items-end justify-between gap-4 bg-white px-12 py-5 mt-5 shadow-lg rounded">
            <div>
                <h3>{center.centerName}</h3>
                <p className="text-sm">{center.address}</p>
                <span className="text-xs">Last update: {center.updatedAt}</span>
            </div>
            {location.pathname === "/" ? (
                <Button text={"저장"} clickEvent={onHandleClickSaveCenter} />
            ) : (
                <Button
                    text={"삭제"}
                    clickEvent={onHandleClickDeleteCenter}
                    color={"red"}
                />
            )}
        </article>
    );
};

Center.propTypes = {
    center: PropTypes.object.isRequired,
};

export default Center;
