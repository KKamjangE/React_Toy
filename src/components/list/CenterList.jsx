import { useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const CenterList = () => {
    const { data } = useGetCenters();

    if (data.data.length === 0) {
        return (
            <div className="flex justify-center">
                <p>저장된 데이터가 없습니다.</p>
            </div>
        );
    }

    return (
        <>
            {data.data.map((center) => (
                <CenterItem key={center.id} center={center} />
            ))}
        </>
    );
};

export default CenterList;
