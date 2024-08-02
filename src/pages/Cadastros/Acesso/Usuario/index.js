import FormButtons from "components/FormButtons";

const Usuario = () => {
    return (<>
        <form>
            <div className="text-left">
                <div className="row">
                    <div className="col-3 form-group">
                        <label htmlFor="codUsuario">Cod Usuário:</label>
                        <input className="form-control" type="number" name="codUsuario" id="codUsuario" disabled />
                    </div>
                    <div className="col-9 form-group">
                        <label htmlFor="nomeUsuario">Nome:</label>
                        <input className="form-control" type="text" name="nomeUsuario" id="nomeUsuario" maxLength="80" required placeholder="Nome do usuário" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 form-group">
                        <label htmlFor="dtInicio">Dt. Início:</label>
                        <input className="form-control" type="date" name="dtInicio" id="dtInicio" required />
                    </div>
                    <div className="col-4 form-group">
                        <label htmlFor="dtFim">Dt. Fim:</label>
                        <input className="form-control" type="date" name="dtFim" id="dtFim" required />
                    </div>
                    <div className="col-4 form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input className="form-control" type="password" name="senha" id="senha" maxLength="80" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="emailPessoal">E-mail Pessoal:</label>
                        <input className="form-control" type="email" name="emailPessoal" id="emailPessoal" maxLength="200" placeholder="e-mail pessoal" />
                    </div>
                    <div className="col form-group">
                        <label htmlFor="emailBrb">E-mail Brb:</label>
                        <input className="form-control" type="email" name="emailBrb" id="emailBrb" maxLength="200" required placeholder="e-mail BRB" />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="fonePessoal">Fone Pessoal:</label>
                        <input className="form-control" type="tel" name="fonePessoal" id="fonePessoal" maxLength="50" placeholder="telefone pessoal" />
                    </div>
                    <div className="col form-group">
                        <label htmlFor="foneBrb">Fone Brb:</label>
                        <input className="form-control" type="tel" name="foneBrb" id="foneBrb" maxLength="50" placeholder="telefone BRB" />
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="celular">Celular:</label>
                        <input className="form-control" type="tel" name="celular" id="celular" maxLength="50" required placeholder="celular de contato" />
                    </div>
                    <fieldset className="col">
                        <legend>Status</legend>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="statusUsuario" id="statusUsuario_Ativo" value="A" />
                            <label className="form-check-label" htmlFor="statusUsuario_Ativo">Ativo</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="statusUsuario" id="statusUsuario_Inativo" value="I" />
                            <label className="form-check-label" htmlFor="statusUsuario_Inativo">Inativo</label>
                        </div>
                    </fieldset>
                </div>
                <div className="row">
                    <FormButtons />
                </div>
            </div>
        </form>
    </>);
}

export default Usuario;