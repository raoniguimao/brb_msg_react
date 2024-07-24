// import style from './Login.module.css';
import InputMatricula from "../../components/InputMatricula";
import FormButtons from '../../components/FormButtons';

const FormLogin = () => {
    return (
        <form method="post">
            <div className="form-group row">
                <InputMatricula label={"Matrícula"} nome={"matricula"} id={"matricula"} mascara={"u999999"} obrigatorio={true} placeHolder={"'u'+ matricula"} />
            </div>
            <div className="form-group row">
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" id={"senha"} className="form-control" required />
            </div>
            <div className="form-group row">
                <label htmlFor="perfil">Perfil:</label>
                <select name="perfil" id="perfil" className="custom-select">
                    <option></option>
                    <option value='M'>Monitor</option>
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