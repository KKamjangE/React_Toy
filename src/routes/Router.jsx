import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./../components/common/Header";
import Layout from "./../components/common/Layout";
import Home from "./../pages/Home";
import PrivateRoute from "./PrivateRoute";
import List from "./../pages/List";
import PublicRoute from "./PublicRoute";
import Sign from "./../pages/Sign";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/list" element={<List />} />
                    </Route>
                    <Route element={<PublicRoute />}>
                        <Route path="/sign" element={<Sign />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
