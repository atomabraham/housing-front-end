//importation des dependances

import React, { useState, useEffect } from 'react'
import '../../Styles/SingIn-SingUp/SingUp.css'
import FirstBanner, { CloseMenu } from '../ElementsPages/Banners/FirstBanner'
import Line from '../ElementsPages/Banners/Line'
import {redirect  } from 'react-router-dom'
import axios from '../Authentification/axios'
import { useAuth } from '../Authentification/AuthContext'
import BlockSteps from '../SingIn-SingUp/SingUP/BlockLeft/BlockSteps'
import BlockForm1 from '../SingIn-SingUp/SingUP/BlockForms/BlockForm1'
import BlockForm2 from '../SingIn-SingUp/SingUP/BlockForms/BlockForm2'
import BlockForm3 from '../SingIn-SingUp/SingUP/BlockForms/BlockForm3'
import BlockForm4 from '../SingIn-SingUp/SingUP/BlockForms/BlockForm4'
import HaveAccount from '../SingIn-SingUp/SingUP/HaveAcount/HaveAcount'

//

//composant de l'inscription

function SingUp(){
    //gestion de l'inscription d'un utilisateur
    const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');

    //enregistrement d'un utilisateur
    const handleSubmit = async (e) => {
		e.preventDefault();
		const { userName, name, secondname, phone, birthday, country, city, postalcode, email, password, password_confirmation,  } = e.target.elements;
		const body = {
			name:   name.value,
			userName:   userName.value,
			secondname:   secondname.value,
			phone:   phone.value,
			birthday:   birthday.value,
			country:   country.value,
			city:   city.value,
			postalcode:   postalcode.value,
			email: email.value,
			password: password.value,
			password_confirmation: password_confirmation.value,
		};
        console.log(body)

        try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {

                console.log(resp.data.user);
                
                return (
                    document.location.href="http://localhost:3000/"
                )
			}
		} catch (error) {
			if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
				}
				if (error.response.data.errors.email) {
					setEmailError(error.response.data.errors.email[0]);
				} else {
					setEmailError('');
				}
				if (error.response.data.errors.password) {
					setPasswordError(error.response.data.errors.password[0]);
				} else {
					setPasswordError('');
				}
			}
		}
    }
    
    // verification de l'existance ou non d'une addresse email
    const ok = async (e) => {
        e.preventDefault();
        const {email} = e.target.elements
            const body = {
                email: email.value
            };
        let errorEmail = document.getElementById('errorEmail')
        let emailValue = email.value

        console.log(body.email)
            const resp =await axios.post('http://localhost:8000/api/emailVerification', body);
            if (resp.data.message === 'found') {
                errorEmail.innerHTML='Cette adresse email existe déja'
                email.style.borderColor='red'
                return true
            }else{
                errorEmail.innerHTML=''
                email.style.borderColor='#00000064'
                return false
            }
    }

    // Verifier si un utilisateur est connecter ou non au serveur
	useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('http://localhost:8000/api/user');
				if (resp.status === 200) {
                    window.location.href="/"
				}
			} catch (error) {
				if (error.response.status === 401) {
					
				}
			}
		})();
	}, );

    return(
        <>
            
            <FirstBanner/>
            <Line/>

            {/* block d'inscription */}
            <div onClick={CloseMenu} className='row blockSingUp' id='blockSingUp'>
                
                {/* block de droite */}
                <div className='blockRightSingUp' id='blockRightSingUp'>
                    <BlockSteps/>

                    {/* la ligne qui separe le block de gauche a celui de droite */}
                    <div className='secondVerticalLine' id='secondVerticalLine'>
                    </div>

                    {/* formulaire d'inscription */}
                    <form method='POST' action='#' onSubmit={handleSubmit} className='formSingUP' id='formSingUP'>
                        <BlockForm1/>

                        <BlockForm2/>
                        
                        <BlockForm3/>
                        
                        <BlockForm4/>
                    </form>
                </div>
                <HaveAccount/>
            {/* `   <SignUpSuccess/> */}
                
            </div>
        </>
    )
}

export default SingUp