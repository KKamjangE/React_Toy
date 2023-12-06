import { useGetCenters } from "@/hooks/queries/centerAPI";
import { useState } from "react";
import Nivo from "@/components/chart/Nivo";
import Rechart from "@/components/chart/Rechart";
import { Button, Card, CardContent, Container } from "@mui/material";

const ChartUI = () => {
    const { data } = useGetCenters();

    const [change, setChange] = useState(false);

    const changeChart = () => {
        setChange((prev) => !prev);
    };

    return (
        <Container maxWidth="sm">
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CardContent sx={{ width: "100%", height: 400 }}>
                    {change ? (
                        <Nivo data={data.data} />
                    ) : (
                        <Rechart data={data.data} />
                    )}
                </CardContent>
                <Button variant="contained" onClick={changeChart}>
                    {change ? "Go rechart" : "go nivo chart"}
                </Button>
            </Card>
        </Container>
    );
};

export default ChartUI;
