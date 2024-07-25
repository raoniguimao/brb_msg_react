import styles from './layout.module.css';

import { Outlet } from "react-router-dom";

import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";

const Layout = () => {
    const usuario = window.sessionStorage.getItem('usuario');

    return (
        <div className='container'>
            <div className={styles.App}>
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
        </div>
    );
};

export default Layout;