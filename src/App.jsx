import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./page/Home";
import List from "./page/List";
import Sign from "./page/Sign";
import Layout from "./components/common/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
