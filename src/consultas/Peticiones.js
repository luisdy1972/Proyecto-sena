import axios from 'axios'

async function buscarPorRuta(endPoin = String, saveLocalStorage = String) {
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

export { buscarPorRuta }
