import PropTypes from "prop-types";
import { useState } from "react";
import {
    Cell,
    LabelList,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const Rechart = ({ data }) => {
    const colors = {
        0: "#e9c19f",
        1: "#f47560",
    };

    const [activeName, setActiveName] = useState(null);

    const countObject = data.reduce((result, item) => {
        result[item.centerType] = (result[item.centerType] || 0) + 1;
        return result;
    }, {});

    const chartData = Object.keys(countObject).map((key) => ({
        name: key,
        value: countObject[key],
        select: false,
    }));

    chartData.sort((a, b) => a.value - b.value);

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={chartData}
                    dataKey={"value"}
                    nameKey={"name"}
                    isAnimationActive={false}
                    label={(entry) => entry.name}
                >
                    {chartData.map((item, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index]}
                            fillOpacity={
                                activeName && activeName !== item.name && 0.5
                            }
                        />
                    ))}
                    <LabelList dataKey={"value"} />
                </Pie>
                <Tooltip />
                <Legend
                    onMouseEnter={(prop) => setActiveName(prop.value)}
                    onMouseLeave={() => setActiveName(null)}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

Rechart.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Rechart;
