import React from 'react'
import { Link } from 'react-router-dom' // Importa Link desde react-router-dom

// consultas
// import { buscarDominios } from '../consultas/dominioSena'

import { buscarPorRuta } from '../consultas/Peticiones'

function pedirDatosBackend() {
	buscarPorRuta('/dominio-sena', 'dominiosSena')
	buscarPorRuta('/rol', 'roles')
}

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/registro/1">
				<button onClick={pedirDatosBackend}>Regístrate</button>
			</Link>
			<button>Inicia Sesión</button>
		</div>
	)
}

export default Home
