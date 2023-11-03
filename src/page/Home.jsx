import { useState } from "react";
import Button from "./../components/Button";
import home from "../api/home";

const Home = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const onHandleClickGetCenters = async () => {
        const { data } = await home.getCenters(page, perPage);
        console.log(data);
    };

    return (
        <div className="flex gap-5 items-end rounded">
            <div className="flex flex-col items-start gap-2">
                <label htmlFor="page" className="text-xs">
                    Page
                </label>
                <input
                    type="text"
                    id="page"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                    className="border-solid border-2 rounded w-28 px-2 py-1 text-sm"
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
                    className="border-solid border-2 rounded w-28 px-2 py-1 text-sm"
                />
            </div>
            <Button text={"조회"} clickEvent={onHandleClickGetCenters} />
        </div>
    );
};

export default Home;
