import Hora from "./hora";
import Atalhos from "../../components/Atalhos";
import styles from './Conteudo.module.css';

const Conteudo = ({ props, breadcrumb, children }) => {
	return (
		<>
			<div className="row">
				{props}
			</div>
			<div className="row">
				<div id="dHoraAtual">
					<Hora />
				</div>
				<div id="dBreadcrumb" className={styles.dBreadcrumb}>
					{breadcrumb}
				</div>
			</div>
			<div className="row">
				<Atalhos />
				<section id="secTelas" className="col-6">
					<h3>Tela</h3>
					{children}
				</section>
			</div>
		</>
	);
}

export default Conteudo;