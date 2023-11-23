import { useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const CenterList = () => {
    const { data } = useGetCenters();

    return (
        <>
            {data.data.map((center) => (
                <CenterItem key={center.id} center={center} />
            ))}
        </>
    );
};

export default CenterList;
