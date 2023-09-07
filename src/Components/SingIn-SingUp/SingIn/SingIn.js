import React from 'react';
import "../../../Styles/SingIn-SingUp/SingIn.css"
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../Authentification/AuthContext';
import axios from '../../Authentification/axios';
import Modal from 'react-bootstrap/Modal';
import logo2 from '../../../Assets/Images/logo 3.png'

function SingIn (){

    //les constances du modal
    const [setShow] = useState(false);
    const handleClose = () => setShow(false);

    //les constances de l'authentification
    const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);

    // login user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
        await csrfToken();
		try {

			const resp = await axios.post('http://localhost:8000/api/login', body);
			if (resp.status === 200) {
				console.log(resp.data.user.id);
                document.getElementById('incorrectIdenfiant').innerHTML=""
                return (
                    document.location.href="http://localhost:3000/"
                )
			}

		} catch (error) {
			if (error.response.status === 401 || error.response.status === 422) {
                // alert("ERROR")
                document.getElementById('incorrectIdenfiant').innerHTML="Email ou mot de passe incorrect"
			}
		}
	};

    return(
        <>
            {/* modal pour connexion */}
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <p className='connexionTitle' id='connexionTitle'>Connexion</p>
            <img src={logo2} className='logoSingIn' id='logoSingIn' alt='HOUSING'/>
            <p className='incorrectIdenfiant' id='incorrectIdenfiant'></p>
            <form method='POST' action='#' onSubmit={handleSubmit}>
                <div className="group group1">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"></path></g></svg>
                    <input name='email' placeholder="Addresse email" type="text"  className="email inputForm"/>
                </div>
                <div className="group group2">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></g></svg>
                    <input name='password' placeholder="Mot de passe" type="password"  className="password inputForm"/>
                </div>
                <div className='remenber' id='remenber'>
                    <label for="checkbox1"  className="checkbox">
                        <input type="checkbox" className='checkbox1' id="checkbox1" />
                        <span  className="checkmark"></span>
                        <span  className="label">Se souvenir de moi</span>
                    </label>
                </div>
                <button type='submit' className='submitSignIn' id='submitSignIn'>Se connecter</button>
                <Link to='/SignUp' onClick={handleClose} className='createAccount' id='createAccount'>Je n'ai pas encore de compte ?</Link>
            </form>
        </Modal.Body>
        </>
    )
}

export default SingIn