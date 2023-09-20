// React
import React from 'react'
import { Input, Option, Select, Autocomplete, Button } from '@mui/joy'
// Ruta
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Link } from 'react-router-dom'

export default function Registro2() {
	function handleChange(event, newValue) {
		console.log(`Cambiaste a "${newValue}"`)
	}
	const [value, setValue] = React.useState('')
	const minLength = 12
	const Fichas = [
		{ label: '1994 The Shawshank Redemption', Ficha: 1994 },
		{ label: 'The Godfather', Ficha: 1972 },
		{ label: 'The Godfather: Part II', Ficha: 1974 },
		{ label: 'The Dark Knight', Ficha: 2008 },
		{ label: '12 Angry Men', Ficha: 1957 },
		{ label: "Schindler's List", Ficha: 1993 },
		{ label: 'Pulp Fiction', Ficha: 1994 },
	]
	return (
		<>
			<Select
				sx={{ borderRadius: '15px', minWidth: '16rem' }}
				variant="soft"
				required
				defaultValue=""
				onChange={handleChange}
			>
				<Option value="">Rol *</Option>
				<Option value="Aprendiz">Aprendiz</Option>
				<Option value="Instr">Instructor</Option>
				<Option value="Admin">Administrador</Option>
			</Select>

			<Input
				type="password"
				endDecorator={<VisibilityIcon />}
				placeholder="Contraseña"
				value={''}
			/>

			<Input type="password" placeholder="Confirma contraseña" value={''} />

			<Autocomplete
				placeholder="Número de ficha"
				options={Fichas}
				sx={{ width: '16rem' }}
			/>
		</>
	)
}
