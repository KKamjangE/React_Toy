import { Card, Container, Skeleton } from "@mui/material";

const SkeletonChart = () => {
    return (
        <Container maxWidth="sm">
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Skeleton variant="circular" width={250} height={250} />
            </Card>
        </Container>
    );
};

export default SkeletonChart;
