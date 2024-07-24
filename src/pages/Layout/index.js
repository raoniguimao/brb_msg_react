import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import { useSessionStorage } from "usehooks-ts";

const Layout = () => {
    const [usuario, setUsuario, removeUsuario] = useSessionStorage('usuario', 'u844670');
    return (
        <div className="App container">
            <header>
                <Cabecalho />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Rodape usuario={usuario} />
            </footer>
        </div>
    );
};

export default Layout;