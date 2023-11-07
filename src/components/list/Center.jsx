import PropsTypes from "prop-types";
import Button from "../common/Button";
import { useDeleteCenter, usePostCenter } from "../../hooks/queries/centerAPI";

const Center = ({ center }) => {
    const { mutate: postMutate } = usePostCenter();
    const { mutate: deleteMutate } = useDeleteCenter();

    const onHandleClickSaveCenter = () => {
        postMutate({
            id: center.id,
            address: center.address,
            centerName: center.centerName,
            updatedAt: center.updatedAt,
        });
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
    center: PropsTypes.object.isRequired,
};

export default Center;
