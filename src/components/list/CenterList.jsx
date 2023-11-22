import { useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";
import Error from "../common/Error";
import Loading from "../common/Loading";

const CenterList = () => {
    const { data, isPending, isError, error, refetch } = useGetCenters();

    return (
        <>
            {isPending && <Loading />}

            {isError && <Error error={error} retry={refetch} />}

            {data && data.data.length === 0 && (
                <div className="flex justify-center">
                    <p>저장된 데이터가 없습니다.</p>
                </div>
            )}

            {data &&
                data.data.map((center) => (
                    <CenterItem key={center.id} center={center} />
                ))}
        </>
    );
};

export default CenterList;
