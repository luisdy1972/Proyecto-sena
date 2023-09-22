// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Joy ui
import { Input, Option, Select, Autocomplete, TextField } from '@mui/joy'

// iconos
import VisibilityIcon from '@mui/icons-material/Visibility'

import { datosRegistro } from '../consultas/Datos'

export default function Registro2() {
	const roles = JSON.parse(localStorage.getItem('roles'))
	const fichas = JSON.parse(localStorage.getItem('fichas'))

	const [rol, setRol] = useState(datosRegistro.rol)
	const [contrasena, setContrasena] = useState(datosRegistro.contrasena)
	const [contrasena2, setContrasena2] = useState('')
	const [ficha, setFicha] = useState(datosRegistro.ficha)
	const [telefono, setTelefono] = useState(datosRegistro.telefono)
	// const [barrio, setBarrio] = useState(datosRegistro.barrio)
	const [direccion, setDireccion] = useState(datosRegistro.direccion)

	function handleChangeRol(_event, newValue) {
		setRol(newValue)
	}
	function handleChangeContrasena(event) {
		setContrasena(event.target.value)
	}
	function handleChangeContrasena2(event) {
		setContrasena2(event.target.value)
	}
	function handleChangeFicha(_event, newValue) {
		setFicha(newValue)
	}
	function handleChangeTelefono(event) {
		setTelefono(event.target.value)
	}
	function handleChangeDireccion(event) {
		setDireccion(event.target.value)
	}
	// function handleChangeBarrio(event) {
	// 	setBarrio(event.target.value)
	// }
	function mantenerDatos() {
		console.log('ficha ::', ficha)
		console.log('rol', rol)
	}
	const listRoles = roles.map((rol) => (
		<Option key={rol._id} value={rol._id}>
			{rol.nombre}
		</Option>
	))

	return (
		<>
			<Select
				defaultValue={rol}
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				onChange={handleChangeRol}
				required
			>
				<Option value="">Rol *</Option>
				{listRoles}
			</Select>

			<Input
				defaultValue={contrasena}
				onChange={handleChangeContrasena}
				type="password"
				placeholder="Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				onChange={handleChangeContrasena2}
				defaultValue={contrasena2}
				type="password"
				placeholder="Confirmar Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Autocomplete
				onInputChange={handleChangeFicha}
				options={fichas}
				getOptionLabel={(fichas) => fichas.codigo}
				placeholder="Número de ficha*"
				variant="soft"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				required
			/>
			<Input
				value={telefono}
				onChange={handleChangeTelefono}
				placeholder="Telefono*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				value={direccion}
				onChange={handleChangeDireccion}
				placeholder="Dirección*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			{/* <Input
				value={barrio}
				onChange={handleChangeBarrio}
				placeholder="Barrio*"
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/> */}
			<div className="navegacion ">
				<Link to="/registro/1">
					<div onClick={mantenerDatos} className="button-navegacion">
						{'<<Atrás'}
					</div>
				</Link>
				{rol == '' ||
				contrasena == '' ||
				ficha == '' ||
				telefono == '' ||
				direccion == '' ? (
					<button onClick={mantenerDatos} className="button-navegacion">
						{'♥'}
					</button>
				) : (
					<Link to="/registro/3">
						<div onClick={mantenerDatos} className="button-navegacion">
							{'Siguiente>>'}
						</div>
					</Link>
				)}
			</div>
		</>
	)
}
