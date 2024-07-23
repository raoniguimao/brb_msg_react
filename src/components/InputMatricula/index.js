import InputMask from "react-input-mask";

const InputMatricula = ({ nome, mascara, obrigatorio = false, placeHolder }) => {
    return (
        <InputMask
            id={nome}
            name={nome}
            mask={mascara}
            required={obrigatorio}
            className="form-control"
            placeholder={placeHolder}
        >
        </InputMask>
    );
}

export default InputMatricula;