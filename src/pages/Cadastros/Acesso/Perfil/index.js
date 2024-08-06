// import FormCadAccessPerfil from 'forms/Cadastro/Acesso/Perfil'
import comp_AltExcButtons from 'components/AltExcButtons';
import React from 'react'

const PageCadAccessPerfil = () => {
	const list = {
		perfils: [
			{ id: 1, nome: "Piloto", sistema: "FLX", alcada: 1, is_exclusivo: true },
		]
	};

	return (<>
		<h2>Cadastro de Perfil</h2>
		<table className='table table-striped'>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Sistema</th>
					<th>Alçada</th>
					<th>Exclusivo?</th>
					<th></th>
				</tr>
			</thead>
			<tbody>{list.perfils.map((perfil) => {
				return (<tr key={perfil.id}>
					<td>{perfil.nome}</td>
					<td>{perfil.sistema}</td>
					<td>{perfil.alcada}</td>
					<td>{perfil.is_exclusivo ? "Sim" : "Não"}</td>
					<td>
						<comp_AltExcButtons item={perfil} />
					</td>
				</tr>);
			})}</tbody>
		</table>
		{/* <FormCadAccessPerfil /> */}
	</>
	)
}

export default PageCadAccessPerfil