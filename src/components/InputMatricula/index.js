import InputMask from "react-input-mask";

const InputMatricula = ({ label, nome, mascara, obrigatorio = false, placeHolder }) => {
    return (<>
        <label htmlFor={nome}>{label}:</label>
        <InputMask
            id={nome}
            name={nome}
            mask={mascara}
            required={obrigatorio}
            className="form-control"
            placeholder={placeHolder}
        >
        </InputMask>
    </>);
}

export default InputMatricula;