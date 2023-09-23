import { Select, Option, Checkbox, Button } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Registro3() {
	function handleChange(event, newValue) {
		console.log(`Cambiaste a "${newValue}"`)
	}
	return (
		<>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={handleChange}
			>
				<Option value="">Tipo de sangre*</Option>
				<Option value="A+">A+</Option>
				<Option value="A-">A-</Option>
				<Option value="O+">O+</Option>
				<Option value="O-">O-</Option>
				<Option value="AB+">AB+</Option>
				<Option value="AB-">AB-</Option>
			</Select>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={handleChange}
			>
				<Option value="">Genero*</Option>
				<Option value="M">Masculino</Option>
				<Option value="F">Femenino</Option>
				<Option value="O">Otros</Option>
			</Select>
			<Select
				sx={{ borderRadius: '15px', margin: '0 30%' }}
				variant="soft"
				required
				defaultValue=""
				onChange={handleChange}
			>
				<Option value="">Eps*</Option>
				<Option value="...">...</Option>
			</Select>
			<div className="caja-politicas">
				<Checkbox variant="soft" />
				<text> Acepto las politicas de privacidad y seguridad</text>
			</div>
			<Button sx={{ borderRadius: '15px', margin: '0 30%' }}>Registrar</Button>
			<div className="boton-atras-registro3">
				<Link to="/registro/2">Atrás</Link>
			</div>
		</>
	)
}
