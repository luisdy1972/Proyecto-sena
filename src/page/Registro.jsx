import React from 'react'
import { Input, Option, Select } from '@mui/joy'
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

	function handleChange(event, newValue) {
		console.log(`Cambiaste a "${newValue}"`)
	}

	return (
		// material UI component
		// <>
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
		// 		id="fehca nacimiento"
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
				placeholder="Nombre*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
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
				onChange={handleChange}
			>
				<Option value="">Tipo de documento*</Option>
				<Option value="Ti">Ti</Option>
				<Option value="Cc">Cc</Option>
				<Option value="Pa">Pa</Option>
			</Select>
			<Input
				placeholder="Número de documento*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Correo institucional*"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<Input
				placeholder="Correo Personal"
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
			/>
			<div style={{ display: 'block' }}>
				<div style={{ textAlign: 'center' }}>Fecha de nacimiento</div>
				<Input
					type="date"
					sx={{ borderRadius: '15px' }}
					variant="soft"
					required
				/>
			</div>
			<div className="navegacion ">
				<Link to="/">
					<div className="button-navegacion">{'<<Atrás'}</div>
				</Link>
				<Link to="/registro/2">
					<div className="button-navegacion">{'Siguiente>>'}</div>
				</Link>
			</div>
		</>
	)
}
