import { Card, CardActions, CardContent, Skeleton } from "@mui/material";

const SkeletonCenterItem = () => {
    return (
        <Card
            elevation={6}
            sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                marginBottom: 3,
            }}
        >
            <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
                <Skeleton variant="rounded" sx={{ width: 500 }} />
                <Skeleton variant="rounded" sx={{ width: 270 }} />
                <Skeleton variant="rounded" sx={{ width: 300 }} />
            </CardContent>
            <CardActions>
                <Skeleton variant="rounded" sx={{ width: 64, height: 36 }} />
            </CardActions>
        </Card>
    );
};

export default SkeletonCenterItem;
