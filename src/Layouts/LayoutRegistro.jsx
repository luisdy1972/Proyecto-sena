import React from 'react'
import { Outlet } from 'react-router-dom'
import '../page/styles/registro.css'

export default function () {
	return (
		<>
			<form autocomplete="off" onSubmit={false} className="caja-azul">
				<div className="caja-blanca">
					<h2>REGISTRATE</h2>
					<div className="formulario">
						<Outlet></Outlet>
					</div>
				</div>
				<img
					className="img-registro"
					src="/img/mujerGorra.jpg"
					alt="aprendiz sena"
				/>
			</form>
		</>
	)
}
