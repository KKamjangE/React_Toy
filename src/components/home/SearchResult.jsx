import { useGetSearchCenters } from "../../hooks/queries/centerAPI";
import Center from "../list/Center";

const SearchResult = () => {
    const { data } = useGetSearchCenters();
    return (
        <>
            {data &&
                data.data.data.map((center) => (
                    <Center key={center.id} center={center} />
                ))}
        </>
    );
};

export default SearchResult;
