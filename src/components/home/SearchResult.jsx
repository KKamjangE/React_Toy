import { useGetSearchCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const SearchResult = () => {
    const { data } = useGetSearchCenters();

    return (
        <>
            {data.data.data.map((center) => (
                <CenterItem key={center.id} center={center} />
            ))}
        </>
    );
};

export default SearchResult;
