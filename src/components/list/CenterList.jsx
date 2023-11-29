import { Paper, Typography } from "@mui/material";
import { useDeleteCenter, useGetCenters } from "../../hooks/queries/centerAPI";
import CenterItem from "../common/CenterItem";

const CenterList = () => {
    const { data } = useGetCenters();

    const { mutate } = useDeleteCenter();

    const handleDeleteCenter = (center) => {
        mutate(center.id);
    };

    return (
        <>
            {data.data.length > 0 ? (
                data.data.map((center) => (
                    <CenterItem
                        key={center.id}
                        center={center}
                        clickEvent={handleDeleteCenter}
                        btnName={"삭제"}
                    />
                ))
            ) : (
                <Paper elevation={6} sx={{ paddingX: 10, paddingY: 3 }}>
                    <Typography variant="subtitle1">
                        저장된 데이터가 없습니다.
                    </Typography>
                </Paper>
            )}
        </>
    );
};

export default CenterList;
