// React
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Joy ui
import { Input, Option, Select, Autocomplete } from '@mui/joy'

// iconos
import VisibilityIcon from '@mui/icons-material/Visibility'

import { datosRegistro } from '../consultas/Datos'

export default function Registro2() {
	const roles = JSON.parse(localStorage.getItem('roles'))
	const listRoles = roles.map((rol) => (
		<Option key={rol._id} value={rol._id}>
			{rol.nombre}
		</Option>
	))

	let [fichas, setFichas] = useState(datosRegistro.fichas)

	const Fichas = [
		{ label: '1994 The Shawshank Redemption', Ficha: 1994 },
		{ label: 'The Godfather', Ficha: 1972 },
		{ label: 'The Godfather: Part II', Ficha: 1974 },
		{ label: 'The Dark Knight', Ficha: 2008 },
		{ label: '12 Angry Men', Ficha: 1957 },
		{ label: "Schindler's List", Ficha: 1993 },
		{ label: 'Pulp Fiction', Ficha: 1994 },
	]
	function handleChangeRol(event, newValue) {
		console.log(`Rol: "${newValue}"`)
	}

	return (
		<>
			<Select
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				defaultValue=""
				onChange={handleChangeRol}
				required
			>
				<Option value="">Rol *</Option>
				{listRoles}
			</Select>

			<Input
				type="password"
				placeholder="Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				type="password"
				placeholder="Confirmar Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Autocomplete
				placeholder="Número de ficha*"
				options={Fichas}
				variant="soft"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				required
			/>
			<Input
				placeholder="Ciudad*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Barrio*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Dirección*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<div className="navegacion ">
				<Link to="/registro/1">
					<div className="button-navegacion">{'<<Atrás'}</div>
				</Link>
				<Link to="/registro/3">
					<div className="button-navegacion">{'Siguiente>>'}</div>
				</Link>
			</div>
		</>
	)
}
