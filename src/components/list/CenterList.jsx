import { useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const CenterList = () => {
    const { data } = useGetCenters();

    return (
        <>
            {data.data.length > 0 ? (
                data.data.map((center) => (
                    <CenterItem key={center.id} center={center} />
                ))
            ) : (
                <div className="flex justify-center py-10">
                    <p>저장된 데이터가 없습니다.</p>
                </div>
            )}
        </>
    );
};

export default CenterList;
