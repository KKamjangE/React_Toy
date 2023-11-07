import Center from "../components/list/Center";
import { useGetCenters } from "../hooks/queries/centerAPI";

const List = () => {
    const { data, isSuccess } = useGetCenters();
    return (
        <section className="w-1/3">
            {isSuccess && data.data.data.centers.length > 0 ? (
                data.data.data.centers.map((center) => (
                    <Center key={center.id} center={center} />
                ))
            ) : (
                <div className="flex justify-center">
                    <p>저장된 데이터가 없습니다.</p>
                </div>
            )}
        </section>
    );
};

export default List;
