import { createContext, useContext, useState } from 'react';
// import axios from 'axios';
import axios from './axios';


//creation d'un objet user avec valeur par defaut null

const AuthContent = createContext({
	user: null,
	setUser: () => {},//mise a jour de l'objet user avec une nouvelle valeur
	csrfToken: () => {},//génère un jeton CSRF .
});

//initialisation de l'etat de l'utilisateur a l'aide de la methode useState et extraction de la valeur dans stockage local a l'aide de JSON.parse(localStorage.getItem('user'))
export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState( 
		JSON.parse(localStorage.getItem('user')) || null
	);

	//mise à jour de l' état de l'utilisateur et définition de l' objet user sur le stockage local à l'aide de JSON.stringify et localStorage.setItem 
	const setUser = (user) => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};
	
	// généré un jeton CSRF en adressant une requête GET au point de terminaison sanctum/csrf-cookie à l'aide d' axios
	const csrfToken = async () => {
		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		return true;
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};