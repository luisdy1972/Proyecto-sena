import React, { useState } from 'react'
import { Input, Option, Select } from '@mui/joy'
import { Link } from 'react-router-dom'

export default function Registro() {
	let [nombre, setNombre] = useState('')
	let [apellido, setApellido] = useState('')
	let [tDocumento, setTDocumento] = useState('')
	let [documento, setDocumento] = useState('')
	let [correoSena, setCorreoSena] = useState('')
	let [correo, setCorreo] = useState('')
	let [fechaNacimiento, setFechaNacimiento] = useState('')

	function handleChangeNombre(e) {
		setNombre(e.target.value)
		// console.log(nombre)
	}

	function handleChangeApellido(e) {
		setApellido(e.target.value)
		// console.log(apellido)
	}

	function handleChangeTDocumento(e, newValue) {
		setTDocumento(newValue)
		// console.log(tDocumento)
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
		console.log(fechaNacimiento)
	}

	function handleSiguiente() {
		console.log(nombre)
		console.log(apellido)
		console.log(tDocumento)
		console.log(documento)
		console.log(correoSena)
		console.log(correo)
		console.log(fechaNacimiento)
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
				<Option value="Ti">Ti</Option>
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
				required
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
					<button className="button-navegacion">{'<<Atrás'}</button>
				</Link>

				{nombre == '' ? (
					<Link to="/registro/2">
						<div onClick={handleSiguiente} className="button-navegacion">
							{'Siguiente>>'}
						</div>
					</Link>
				) : (
					<button className="button-navegacion">{'Siguiente>>'}</button>
				)}
			</div>
		</>
	)
}
