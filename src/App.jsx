import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import List from "./page/List";
import Sign from "./page/Sign";
import Layout from "./page/Layout";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/sign" element={<Sign />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
