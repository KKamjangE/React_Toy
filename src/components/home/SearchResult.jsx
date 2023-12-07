import { useGetSearchCenters, usePostCenter } from "@/hooks/queries/centerAPI";
import CenterItem from "@/components/common/CenterItem";
import { useSearchStateStore } from "@/store/store";

const SearchResult = () => {
    const { page, perPage } = useSearchStateStore((state) => ({
        page: state.page,
        perPage: state.perPage,
    }));
    const { data } = useGetSearchCenters(page, perPage);
    const { mutate } = usePostCenter();

    const handleSaveCenter = (center) => {
        mutate({
            id: center.id,
            address: center.address,
            centerName: center.centerName,
            updatedAt: center.updatedAt,
            lat: center.lat,
            lng: center.lng,
            phoneNumber: center.phoneNumber,
            centerType: center.centerType,
        });
    };

    return (
        <>
            {data.data.data.map((center) => (
                <CenterItem
                    key={center.id}
                    center={center}
                    clickEvent={handleSaveCenter}
                    btnName={"저장"}
                />
            ))}
        </>
    );
};

export default SearchResult;
