import style from './Login.module.css';
import InputMatricula from "../InputMatricula";

const Login = () => {
    return (
        <form method="post">
            <div className="form-group row">
                <label htmlFor="matricula">Matrícula:</label>
                <InputMatricula nome={"matricula"} mascara={"u999999"} obrigatorio={true} placeHolder={"'u'+ matricula"} />
            </div>
            <div className="form-group row">
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" className="form-control" required />
            </div>
            <div className="form-group row">
                <label htmlFor="perfil">Perfil:</label>
                <select name="perfil" id="perfil" className="custom-select">
                    <option></option>
                    <option value='M'>Monitor</option>
                </select>
            </div>
            <div className="row btn-group">
                <button className="btn btn-primary" type="submit">Ok</button>
                <button className="btn btn-light" type="reset">Limpar</button>
                <button className="btn btn-info">Esqueci minha senha</button>
            </div>
        </form>
    );
}

export default Login;