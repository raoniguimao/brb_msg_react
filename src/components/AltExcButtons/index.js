import React from 'react'

const comp_AltExcButtons = ({ item }) => {
    function excluir(it) {
        const id = it.id;
        let mensagem = `item ${id} não excluído`;

        if (window.confirm("Deseja realmente excluir este item?")) {
            mensagem = `item ${id} excluído`;
        }

        console.log(mensagem);
    }

    function alterar(it) {
        console.log(it);
    }

    return (
        <>
            <button className='btn btn-secondary btn-sm' onClick={() => alterar(item)}>Alterar</button>
            <button className='btn btn-danger btn-sm' onClick={() => excluir(item)}>Excluir</button>
        </>
    )
}

export default comp_AltExcButtons