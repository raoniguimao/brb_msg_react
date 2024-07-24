import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLogin from './pages/Login';
import Layout from "./pages/Layout";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageLogin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;