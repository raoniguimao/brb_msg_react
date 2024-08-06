import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLogin from './pages/Login';
import Layout from "./pages/Layout";
import Entrada from "./pages/Entrada";
import Usuario from "pages/Cadastros/Acesso/Usuario";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageLogin />} />
                    <Route path="/entrada" element={<Entrada />} />
                    <Route path="/Cadastros/Acesso/Usuario" element={<Usuario breadcrumb="/Cadastros/Acesso/Usuario" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;