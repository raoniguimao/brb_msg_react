const Rodape = ({ usuario }) => {

    const dtAtual = new Date();
    const ano = dtAtual.getFullYear();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mes = meses[dtAtual.getMonth()];
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dia = dtAtual.getDate();

    return (<>
        <div className="row">
            <div className="col-4">Brasília/DF, {diasSemana[dtAtual.getDay()]}, {`${dia} de ${mes} de ${ano}`}.</div>
            <div className="col-2"></div>
            <div className="col-2">{usuario}</div>
            <div className="col-4"></div>
        </div>
    </>);
}

export default Rodape;