// React
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Joy ui
import { Input, Option, Select, Autocomplete } from '@mui/joy'

import VisibilityIcon from '@mui/icons-material/Visibility' // iconos

import { datosRegistro } from '../consultas/Datos'

export default function Registro2() {
	const roles = JSON.parse(localStorage.getItem('roles'))
	const fichas = JSON.parse(localStorage.getItem('fichas'))

	const [rol, setRol] = useState(datosRegistro.rol)
	const [contrasena, setContrasena] = useState(datosRegistro.contrasena)
	const [contrasena2, setContrasena2] = useState('')
	const [ficha, setFicha] = useState(datosRegistro.ficha)
	const [telefono, setTelefono] = useState(datosRegistro.telefono)
	const [direccion, setDireccion] = useState(datosRegistro.direccion)

	let contrasIguales

	function handleChangeRol(event, newValue) {
		setRol(newValue)
		console.log(newValue)
	}
	function handleChangeContrasena(event) {
		setContrasena(event.target.value)
	}
	function handleChangeContrasena2(event) {
		setContrasena2(event.target.value)
	}

	function handleChangeFicha(event, newValue) {
		setFicha(newValue)
		console.log(newValue)
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

	const listRoles = roles.map((rol) => (
		<Option key={rol._id} value={rol._id}>
			{rol.nombre}
		</Option>
	))

	function compararContraseña() {
		if (contrasena != '' && contrasena2 != '' && contrasena == contrasena2) {
			console.log('sonIguales')
			contrasIguales = true
		} else {
			console.log('NO IGUAL')

			contrasIguales = false
		}
	}

	function guardarDatos() {
		datosRegistro.rol = rol
		datosRegistro.contrasena = contrasena
		datosRegistro.ficha = ficha
		datosRegistro.telefono = telefono
		datosRegistro.direccion = direccion
		console.log(datosRegistro)
	}

	useEffect(() => {
		console.clear()
		compararContraseña()
		guardarDatos()
	}, [rol, contrasena, contrasena2, ficha, telefono, direccion])

	return (
		<>
			<Select
				defaultValue={rol}
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				onChange={handleChangeRol}
				required
			>
				<Option key=" " value="">
					Rol *
				</Option>
				{listRoles}
			</Select>

			<Input
				onChange={handleChangeContrasena}
				type="password"
				placeholder="Contraseña*"
				endDecorator={<VisibilityIcon />}
				sx={{ borderRadius: '15px', maxWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				// value={contrasena2}
				onChange={handleChangeContrasena2}
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
					<div className="button-navegacion">{'<<Atrás'}</div>
				</Link>

				{rol == '' ||
				contrasena == '' ||
				contrasena2 == '' ||
				contrasIguales == false ||
				ficha == '' ||
				telefono == '' ||
				direccion == '' ? (
					<button className="button-navegacion">{'boton'}</button>
				) : (
					<Link to="/registro/3">
						<div className="button-navegacion">{'Siguiente>>'}</div>
					</Link>
				)}
			</div>
		</>
	)
}
