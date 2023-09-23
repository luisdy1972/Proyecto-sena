import axios from 'axios'

function buscarPorRuta(endPoin = String, saveLocalStorage = String) {
	axios
		.get(`https://proyecto-backend-sgbienestar.onrender.com${endPoin}`)
		.then(function (response) {
			localStorage.setItem(saveLocalStorage, JSON.stringify(response.data))
			console.log(
				endPoin + ':',
				JSON.parse(localStorage.getItem(saveLocalStorage))
			)
		})
		.catch(function (error) {
			console.log(error)
		})
		.finally(() => {})
}

function registrarUsuario(datos) {
	axios
		.post(`https://proyecto-backend-sgbienestar.onrender.com/registro`, datos)
		.then(function (response) {
			console.log(response)
		})
		.catch(function (error) {
			console.log(error)
		})
}

export { buscarPorRuta, registrarUsuario }
