import { Paper, Typography } from "@mui/material";
import { useDeleteCenter, useGetCenters } from "@/hooks/queries/centerAPI";
import CenterItem from "@/components/common/CenterItem";
import { useCenterTypeStore } from "@/store/store";

const CenterList = () => {
    const { data } = useGetCenters();
    const { centerType } = useCenterTypeStore((state) => ({
        centerType: state.centerType,
    }));
    const { mutate } = useDeleteCenter();

    const handleDeleteCenter = (center) => {
        mutate(center.id);
    };

    return (
        <>
            {data.data.length > 0 ? (
                data.data
                    .filter(
                        (center) =>
                            centerType === "" ||
                            centerType === center.centerType,
                    )
                    .map((center) => (
                        <CenterItem
                            key={center.id}
                            center={center}
                            clickEvent={handleDeleteCenter}
                            btnName={"삭제"}
                        />
                    ))
            ) : (
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingY: 3,
                    }}
                >
                    <Typography variant="subtitle1">
                        저장된 데이터가 없습니다.
                    </Typography>
                </Paper>
            )}
        </>
    );
};

export default CenterList;
