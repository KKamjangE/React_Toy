import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import PropTypes from "prop-types";

const Nivo = ({ data }) => {
    const [activeId, setActiveId] = useState(null);

    const countObject = data.reduce((result, item) => {
        result[item.centerType] = (result[item.centerType] || 0) + 1;
        return result;
    }, {});

    const chartData = Object.keys(countObject).map((key) => ({
        id: key,
        value: countObject[key],
    }));

    return (
        <ResponsivePie
            data={chartData}
            margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
            sortByValue={true}
            activeId={activeId}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["brighter", 3]],
            }}
            arcLinkLabelsTextColor="#fff" // 링크 라벨 글자 색상
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            activeInnerRadiusOffset={10}
            activeOuterRadiusOffset={10}
            onClick={(item) => {
                setActiveId(item.id);
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
                    onClick: (item) => {
                        setActiveId(item.id);
                    },
                },
            ]}
            // defs={[
            //     {
            //         id: "opacity",
            //         type: "linearGradient",
            //         // color: "rgba(255,255,255,0.5)",
            //         colors: [{ offset: 0, color: "opacity: 0.5" }],
            //         background: "inherit",
            //         opacity: 0.5,
            //     },
            // ]}
            fill={[{ id: "opacity", match: { id: "지역" } }]}
        />
    );
};

Nivo.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Nivo;
