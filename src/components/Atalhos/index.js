import { Link } from 'react-router-dom';
import menus from '../../atalhos.json';

function imprimeLi(elemento) {
    if (!elemento.children) {
        console.log(elemento.id + ': ' + elemento.nome);
        return (
            <li key={elemento.id} className="nav-item">
                <Link to={elemento.url} className='nav-link'>{elemento.nome}</Link>
            </li>
        );
    }
    return (
        <li key={elemento.id} className='nav-item dropdown'>
            <Link className='nav-link dropdown-toggle' data-toggle="dropdown" role='button' aria-haspopup="true" aria-expanded="false">{elemento.nome}</Link>
            <ul className='dropdown-menu'>{imprimeLi(elemento)}</ul>
        </li>
    );
}

const Atalhos = () => {
    const n2 = menus.children.filter(function (elem) {
        return elem.id.length === 2;
    });
    return (
        <section id="secAtalhos" className="col-2">
            <h3>{menus.nome}</h3>
            <div className="accordion" id="accordionAtalhos">
                {n2.map((objN2) => {
                    const headID = `head${objN2.id}`;
                    const divID = `div${objN2.id}`;

                    const n3 = objN2.children.filter(function (elem) {
                        return elem.id.length === 3;
                    });

                    return (
                        <div id={`card${objN2.id}`} className="card">
                            <div className='card-header' id={headID}>
                                <h4>
                                    <button
                                        className="btn btn-default"
                                        type="button"
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                        data-target={`#${divID}`}
                                        aria-controls={divID}>
                                        {objN2.nome}
                                    </button>
                                </h4>
                            </div>
                            <div id={divID} className='collapse' aria-labelledby={headID} data-parent="#accordionAtalhos">
                                <div className='card-body'>
                                    <ul className='nav flex-column'>{
                                        n3.map((objN3) => {
                                            return (<li key={objN3.id} className='nav-item'>
                                                <a className='nav-link'>{objN3.nome}</a>
                                            </li>);
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {/*
                <div className="card-header" id="headingCadastros">
                    <h4>
                        <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#divCadastros" aria-expanded="false" aria-controls="divCadastros">Cadastros</button>
                    </h4>
                </div>
                <div id="divCadastros" className="collapse" aria-labelledby="headingCadastros" data-parent="#accordionAtalhos">
                    <div className="card-body">
                        <ul className="nav flex-column">
                            <li className="nav-item"><a className="nav-link" href="#">Acesso</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Catálogo</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Operações</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Horário</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Ambiente</a></li>
                        </ul>
                    </div>
                </div>
                */}
            </div>
        </section >
    );
}

export default Atalhos;