import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLogin from './pages/Login';
import Layout from "./pages/Layout";
import Tela01 from "./pages/Tela01";
import Usuario from "pages/Cadastros/Acesso/Usuario";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageLogin />} />
                    <Route path="/entrada" element={<Tela01 />} />
                    <Route path="/Cadastros/Acesso/Usuario" element={<Usuario />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;