import { useEffect, useState } from "react";
import centerAPI from "../api/centerAPI";
import Center from "../components/list/Center";

const List = () => {
    const [centers, setCenters] = useState();

    useEffect(() => {
        const { data } = centerAPI.getCenters();
        if (data) {
            setCenters(data);
        }
    }, []);

    return (
        <section>
            {centers ? (
                centers.map((center) => (
                    <Center key={center.id} center={center} />
                ))
            ) : (
                <div>
                    <p>저장된 데이터가 없습니다.</p>
                </div>
            )}
        </section>
    );
};

export default List;
