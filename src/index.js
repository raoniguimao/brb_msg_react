import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppRoutes from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'pages/Layout';
import PageLogin from 'pages/Login';
import ErrorPage from 'pages/Erro';
import Entrada from 'pages/Entrada';
import PageCadAccessUsuario from 'pages/Cadastros/Acesso/Usuario';
import PageCadAccessPerfil from 'pages/Cadastros/Acesso/Perfil';

const routes = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <PageLogin /> },
			{
				path: "/", element: <Layout />, children: [
					{ path: "/entrada", element: <Entrada /> },
					{ path: "/Cadastros/Acesso/Usuario", element: <PageCadAccessUsuario /> },
					{ path: "/Cadastros/Acesso/Perfil", element: <PageCadAccessPerfil /> }
				]
			},
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <AppRoutes /> */}
		<RouterProvider router={routes} />
	</React.StrictMode>
);