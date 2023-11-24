import { ResponsivePie } from "@nivo/pie";
import { useGetCenters } from "../../hooks/queries/centerAPI";

const ChartUI = () => {
    const { data } = useGetCenters();
    const testData = [
        {
            id: "lisp",
            label: "lisp",
            value: 288,
            color: "hsl(322, 70%, 50%)",
        },
        {
            id: "php",
            label: "php",
            value: 51,
            color: "hsl(250, 70%, 50%)",
        },
        {
            id: "erlang",
            label: "erlang",
            value: 345,
            color: "hsl(5, 70%, 50%)",
        },
        {
            id: "css",
            label: "css",
            value: 28,
            color: "hsl(213, 70%, 50%)",
        },
        {
            id: "go",
            label: "go",
            value: 281,
            color: "hsl(13, 70%, 50%)",
        },
    ];

    data.data.forEach((item) => {
        console.log(item);
    });

    return (
        <ResponsivePie
            data={testData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            sortByValue={true}
            colors={{ scheme: "dark2" }}
            activeOuterRadiusOffset={8}
            arcLinkLabelsTextColor="#fff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["brighter", "3"]],
            }}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#fff",
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default ChartUI;
