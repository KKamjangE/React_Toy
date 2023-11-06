import { useState } from "react";
import Button from "../components/common/Button";
import home from "../api/home";
import { useCentersStore } from "./../store/store";
import Center from "../components/list/Center";

const Home = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const { centers, setCenters } = useCentersStore();

    const onHandleClickGetCenters = async () => {
        const { data } = await home.getCenters(page, perPage);
        console.log(data);
        setCenters(data);
    };

    return (
        <section className="w-1/3">
            <div className="flex justify-between items-end gap-5 rounded bg-white shadow-lg px-12 py-5">
                <div className="flex gap-5">
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="page" className="text-xs">
                            Page
                        </label>
                        <input
                            type="text"
                            id="page"
                            value={page}
                            onChange={(e) => setPage(e.target.value)}
                            className="border-solid border-2 rounded w-36 px-2 py-1 text-sm"
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="page" className="text-xs">
                            PerPage
                        </label>
                        <input
                            type="text"
                            id="page"
                            value={perPage}
                            onChange={(e) => setPerPage(e.target.value)}
                            className="border-solid border-2 rounded w-36 px-2 py-1 text-sm"
                        />
                    </div>
                </div>
                <Button text={"조회"} clickEvent={onHandleClickGetCenters} />
            </div>
            {centers &&
                centers.data.map((center) => (
                    <Center key={center.id} center={center} />
                ))}
        </section>
    );
};

export default Home;
