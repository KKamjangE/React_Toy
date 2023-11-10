import Center from "../components/list/Center";
import { useGetCenters } from "../hooks/queries/centerAPI";

const List = () => {
    const { data, isLoading } = useGetCenters();
    return (
        <section className="w-1/3">
            {isLoading ? (
                <div className="flex justify-center">
                    <p>데이터를 불러오는 중 입니다.</p>
                </div>
            ) : data.data.length > 0 ? (
                data.data.map((center) => (
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
