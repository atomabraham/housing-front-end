import Axios from 'axios';

//creation d'une nouvelle instance axios
const axios = Axios.create({
	baseURL: "http://localhost:8000/api",
	withCredentials: true, //true signifie que  les cookies seront envoyés avec les demandes, permettant des demandes authentifiées
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default axios;