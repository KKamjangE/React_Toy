import { useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const CenterList = () => {
    const { data, isLoading } = useGetCenters();

    return (
        <>
            {isLoading && (
                <div className="flex justify-center">
                    <p>데이터를 불러오는 중 입니다.</p>
                </div>
            )}
            {data &&
                data.data.map((center) => (
                    <CenterItem key={center.id} center={center} />
                ))}
            {data && data.data.length === 0 && (
                <div className="flex justify-center">
                    <p>저장된 데이터가 없습니다.</p>
                </div>
            )}
        </>
    );
};

export default CenterList;
