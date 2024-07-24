import imgLogoBRB from "./logoBRB.png";

const Cabecalho = () => {
    return (
        <h1>
            MSG ReactJS
            <img src={imgLogoBRB} width="80px" alt="Logo do Banco BRB" />
        </h1>
    );
}

export default Cabecalho;