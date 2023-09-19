import { Input } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'

// componentes material
// import {
// 	TextField,
// 	MenuItem,
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	Button,
// } from '@mui/material/'

// componentes Joy UI

export default function Registro() {
	// const [tipoDoc, setTipoDoc] = React.useState('')

	// const handleChange = (event) => {
	// 	setTipoDoc(event.target.value)
	// }

	return (
		// material UI component
		// <>
		// 	<h1>reg 1</h1>
		// 	{/* <TextField
		// 		sx={{ width: '17rem', borderRadius: '50%' }}
		// 		size="small"
		// 		label="Nombre"
		// 		id="nombre-user"
		// 		variant="filled"
		// 		required
		// 	/>
		// 	<TextField
		// 		className="input-text"
		// 		size="small"
		// 		label="Apellido"
		// 		id="Apellido-user"
		// 		variant="filled"
		// 		required
		// 	/>
		// 	<FormControl variant="filled">
		// 		<InputLabel>Tipo de Documento</InputLabel>
		// 		<Select
		// 			className="input-text"
		// 			size="small"
		// 			variant="filled"
		// 			labelId="demo-simple-select-standard-label"
		// 			id="demo-simple-select-standard"
		// 			value={tipoDoc}
		// 			onChange={handleChange}
		// 			required
		// 		>
		// 			<MenuItem value={'Ti'}>Tarjeta de identidad</MenuItem>
		// 			<MenuItem value={'Cc'}>Cédula de ciudadanía</MenuItem>
		// 			<MenuItem value={'Pa'}>Pasaporte</MenuItem>
		// 		</Select>
		// 	</FormControl>

		// 	<TextField
		// 		className="input-text"
		// 		size="small"
		// 		label="Número de documento"
		// 		id="documento-user"
		// 		variant="filled"
		// 		required
		// 	/>
		// 	<TextField
		// 		type="email"
		// 		className="input-text"
		// 		size="small"
		// 		label="Correo institucional"
		// 		id="correo-misena-user"
		// 		variant="filled"
		// 		required
		// 	/>
		// 	<TextField
		// 		type="email"
		// 		className="input-text"
		// 		size="small"
		// 		label="Correo personal"
		// 		id="correo-personal-user"
		// 		variant="filled"
		// 		required
		// 	/>
		// 	<TextField
		// 		type="date"
		// 		className="input-text"
		// 		id="fehca nacimientto"
		// 		variant="filled"
		// 		required
		// 	/>

		// 	<div className="navegacion ">
		// 		<Link to="/">
		// 			<Button>
		// 				<div className="button-navegacion">{'<<Atrás'}</div>
		// 			</Button>
		// 		</Link>
		// 		<Link to="2">
		// 			<Button>
		// 				<div className="button-navegacion">{'Siguiente>>'}</div>
		// 			</Button>
		// 		</Link>
		// 	</div> */}
		// </>

		// Joy UI
		<>
			<Input
				placeholder="Nombre"
				sx={{ borderRadius: '10rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Apellido"
				sx={{ borderRadius: '10rem' }}
				variant="soft"
				required
			/>
		</>
	)
}
