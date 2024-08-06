import menus from '../../atalhos.json';
// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Atalhos.module.css';
import NavButton from './NavButton';

const Atalhos = () => {
	const [tela, setTela] = useState('');
	const [breadcrumb, setBreadcrumb] = useState('');

	useEffect(() => {
		document.getElementById("dBreadcrumb").innerHTML = breadcrumb;
	});

	const abreLinks = (obj, objPai) => {
		const lis = obj.children.map((objn4) => {
			return (<li key={`li_n4_${objn4.id}`}>
				<NavButton
					// key={`nb_n4_${objn4.id}`}
					to={`${objn4.url}`}
					onClick={() => setBreadcrumb(`${objPai.nome}/${obj.nome}/${objn4.nome}`)}
				>
					{objn4.nome}
				</NavButton>
			</li>);
		});

		setTela(lis);
	}

	const idAccordion = `div_Accordion_${menus.id}`;
	const n2 = menus.children.filter(function (elem) {
		return elem.id.length === 2;
	});
	return (<>
		<section id={`sec_${menus.id}`} className="col-2">
			<h3 id={`h3_${menus.id}`}>{menus.nome}</h3>
			<div id={idAccordion} className="accordion">
				{n2.map((objN2) => {
					const head_N2_ID = `head_n2_${objN2.id}`;
					const div_N2_ID = `div_n2_${objN2.id}`;

					const n3 = objN2.children.filter(function (elem) {
						return elem.id.length === 3;
					});

					return (
						<div key={`card_${objN2.id}`} className="card">
							<div id={head_N2_ID} className="card-header">
								<h4 key={`h4_n2_${objN2.id}`}>
									<button className='btn btn-link'
										key={`btn_n2_${objN2.id}`}
										data-toggle="collapse"
										aria-expanded="false"
										data-target={`#${div_N2_ID}`}
										aria-controls={div_N2_ID}>
										{objN2.nome}
									</button>
								</h4>
							</div>
							<div id={div_N2_ID} className='collapse' aria-labelledby={head_N2_ID} data-parent={`#${idAccordion}`}>
								<div key={`div_cBody_${objN2.id}`} className='card-body'>
									<ul key={`ul_${objN2.id}`} className='nav flex-column'>{
										n3.map((objN3) => {
											return (<li key={`li_n3_${objN3.id}`} className='nav-item'>
												<button className='btn btn-link' onClick={evento => abreLinks(objN3, objN2)}>{objN3.nome}</button>
											</li>);
										})
									}
									</ul>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
		<section id="secArvore" className="col-2">
			<h3>Árvore</h3>
			<div id='dLinks'><ul className={`nav flex-column ${styles.ul_dLinks}`}>{tela}</ul></div>
		</section>
	</>);
}

export default Atalhos;