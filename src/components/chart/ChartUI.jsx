import { useGetCenters } from "../../hooks/queries/centerAPI";
import { useState } from "react";
import Button from "./../common/Button";
import Nivo from "./Nivo";
import Rechart from "./Rechart";

const ChartUI = () => {
    const { data } = useGetCenters();

    const [change, setChange] = useState(false);

    const changeChart = () => {
        setChange((prev) => !prev);
    };

    return (
        <section className="flex flex-col items-center w-1/3 h-96 rounded bg-gray-700 px-12 py-5 shadow-lg shadow-slate-950 text-black text-xs">
            <Button text="Chart Change" clickEvent={changeChart} />
            {change ? <Nivo data={data.data} /> : <Rechart data={data.data} />}
        </section>
    );
};

export default ChartUI;
