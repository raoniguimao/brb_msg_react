// import style from './Login.module.css';
import InputMatricula from "../../components/InputMatricula";
import FormButtons from '../../components/FormButtons';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const [inputs, setInputs] = useState('');
    const navigate = useNavigate();

    const aoEntrar = (evento) => {
        evento.preventDefault();
        window.sessionStorage.setItem('usuario', inputs.matricula);
        navigate('/entrada');
    }

    const aoAlterar = (evento) => {
        const name = evento.target.name;
        const value = evento.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    return (
        <form onSubmit={evento => aoEntrar(evento)}>
            <div className="form-group row">
                <InputMatricula
                    label={"Matrícula"}
                    nome={"matricula"}
                    id={"matricula"}
                    mascara={"u999999"}
                    obrigatorio={true}
                    placeHolder={"'u'+ matricula"}

                    onChange={aoAlterar}
                />
            </div>
            <div className="form-group row">
                <label htmlFor="senha">Senha:</label>
                <input type="password" className="form-control"
                    name="senha" id="senha"
                    placeholder="senha"
                    required

                    onChange={aoAlterar}
                />
            </div>
            <div className="form-group row">
                <label htmlFor="perfil">Perfil:</label>
                <select name="perfil" id="perfil"
                    required className="custom-select"

                    onChange={aoAlterar}>
                    <option></option>
                    <option value='Monitor'>Monitor</option>
                </select>
            </div>
            <div className="row btn-group">
                <FormButtons />
                <button className="btn btn-info">Esqueci minha senha</button>
            </div>
        </form>
    );
}

export default FormLogin;