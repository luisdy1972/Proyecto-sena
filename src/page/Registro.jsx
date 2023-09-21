import React, { useState } from 'react'
import { Input, Option, Select } from '@mui/joy'
import { Link } from 'react-router-dom'

import { datosRegistro } from '../consultas/Datos'

export default function Registro() {
	let [nombre, setNombre] = useState(datosRegistro.nombre)
	let [apellido, setApellido] = useState(datosRegistro.apellido)
	let [tDocumento, setTDocumento] = useState(datosRegistro.tDocumento)
	let [documento, setDocumento] = useState(datosRegistro.documento)
	let [correoSena, setCorreoSena] = useState(datosRegistro.correoSena)
	let [correo, setCorreo] = useState(datosRegistro.correo)
	let [fechaNacimiento, setFechaNacimiento] = useState(
		datosRegistro.fechaNacimiento
	)

	function handleChangeNombre(e) {
		setNombre(e.target.value)
	}

	function handleChangeApellido(e) {
		setApellido(e.target.value)
	}

	function handleChangeTDocumento(e, newValue) {
		setTDocumento(newValue)
	}

	function handleChangeNumeroDoc(e) {
		setDocumento(e.target.value)
		// console.log(documento)
	}

	function handleChangeCorreoSena(e) {
		setCorreoSena(e.target.value)
		// console.log(correoSena)
	}
	function handleChangeCorreo(e) {
		setCorreo(e.target.value)
		// console.log(correo)
	}

	function handlechangeFechaNacimiento(e) {
		setFechaNacimiento(e.target.value)
	}

	function mantenerDatos() {
		datosRegistro.nombre = nombre
		datosRegistro.apellido = apellido
		datosRegistro.tDocumento = tDocumento
		datosRegistro.documento = documento
		datosRegistro.correoSena = correoSena
		datosRegistro.correo = correo
		datosRegistro.fechaNacimiento = fechaNacimiento
	}

	function handleSiguiente() {
		mantenerDatos()
		console.log(datosRegistro)
	}

	return (
		<>
			<Input
				value={nombre}
				onChange={handleChangeNombre}
				placeholder="Nombre*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				value={apellido}
				onChange={handleChangeApellido}
				placeholder="Apellido*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Select
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
				defaultValue=""
				value={tDocumento}
				onChange={handleChangeTDocumento}
			>
				<Option value="">Tipo de documento*</Option>
				<Option value="T.I">Ti</Option>
				<Option value="Cc">Cc</Option>
				<Option value="Pa">Pa</Option>
			</Select>
			<Input
				value={documento}
				onChange={handleChangeNumeroDoc}
				placeholder="Número de documento*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				value={correoSena}
				onChange={handleChangeCorreoSena}
				placeholder="Correo institucional*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				value={correo}
				onChange={handleChangeCorreo}
				placeholder="Correo Personal"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
			/>
			<div style={{ display: 'block' }}>
				<div style={{ textAlign: 'center' }}>Fecha de nacimiento*</div>
				<Input
					onChange={handlechangeFechaNacimiento}
					value={fechaNacimiento}
					type="date"
					sx={{ borderRadius: '15px', minWidth: '16rem' }}
					variant="soft"
					required
				/>
			</div>
			<div className="navegacion">
				<Link to="/">
					<button onClick={mantenerDatos} className="button-navegacion">
						{'<<Atrás'}
					</button>
				</Link>

				{nombre == '' ||
				apellido == '' ||
				tDocumento == '' ||
				documento == '' ||
				correoSena == '' ||
				fechaNacimiento == '' ? (
					<button onClick={mantenerDatos} className="button-navegacion">
						{'Siguiente>>'}
					</button>
				) : (
					<Link to="/registro/2">
						<div onClick={handleSiguiente} className="button-navegacion">
							{'Siguiente>>'}
						</div>
					</Link>
				)}
			</div>
		</>
	)
}
