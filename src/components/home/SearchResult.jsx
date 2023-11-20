import { useGetSearchCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const SearchResult = () => {
    const { data } = useGetSearchCenters();
    return (
        <>
            {data &&
                data.data.data.map((center) => (
                    <CenterItem key={center.id} {...center} />
                ))}
        </>
    );
};

export default SearchResult;
