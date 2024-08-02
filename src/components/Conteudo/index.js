// import Hora from "./hora";
import Atalhos from "../../components/Atalhos";

const Conteudo = ({ children }) => {
	return (
		<>
			<div className="row">
				<h4>Barra de ações</h4>
			</div>
			<div className="row">
				<div id="dHoraAtual">
					{/* <Hora /> */}
				</div>
				<div id="dBreadcrumb">
					<h4>Breadcrumb</h4>
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