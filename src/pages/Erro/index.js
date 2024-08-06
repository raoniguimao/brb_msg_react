import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (<>
        <h1>Ops!</h1>
        <p>Desculpe, mas um erro inesperado aconteceu!</p>
        <p>{error.statusText || error.message}</p>
    </>)
}

export default ErrorPage