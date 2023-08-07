//importation des dependances

import React, { useEffect } from 'react'
import '../../Styles/SingIn-SingUp/SingUp.css'
import FirstBanner, { NavClik } from '../Banners/FirstBanner'
import Line from '../Banners/Line'
import imageSingUp from '../../Assets/Images/600.jpg'
import { Link, Navigate } from 'react-router-dom'
import axios from '../Authentification/axios'
import { useAuth } from '../Authentification/AuthContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import logo2 from '../../Assets/Images/logo 3.png'


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
			userName:   userName.value,
			name:   name.value,
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
        try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/" />;
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
    
    function Form1Next(){
        // recuperation des donnees du formulaire 1
        let email=document.getElementById('inputEmail')
        let userName=document.getElementById('inputUserName')
        let password=document.getElementById('inputPassword')
        let passwordRepeat=document.getElementById('password_confirmation')
        let errorEmail=document.getElementById('errorEmail')
        let errorPassword=document.getElementById('errorPassword')
        let errorPasswordRepeat=document.getElementById('errorPasswordRepeat')
        let emailValue=email.value
        let userNameValue=userName.value
        let passwordValue=password.value
        let passwordRepeatValue=passwordRepeat.value

        // controle des donnees du formulaire
        if(emailValue=='' || passwordValue=='' || passwordRepeatValue==''){
            if(emailValue==''){
                errorEmail.innerHTML='Veuillez entrez une addresse valide'
                errorEmail.style.color='red'
                email.style.borderColor='red' 
            }
            if(passwordValue==''){
                errorPassword.innerHTML='Veuillez saisir un mot de passe'
                errorPassword.style.color='red'
                password.style.borderColor='red' 
            }
            if(passwordRepeatValue==''){
                errorPasswordRepeat.innerHTML='Veuillez saisir un mot de passe'
                errorPasswordRepeat.style.color='red'
                passwordRepeat.style.borderColor='red' 
            }
        }else{
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            errorEmail.innerHTML=''
            email.style.borderColor='#00000064' 
            errorPassword.innerHTML=''
            password.style.borderColor='#00000064'
            errorPasswordRepeat.innerHTML=''
            passwordRepeat.style.borderColor='#00000064' 

            let emailValid=false
            let passwordValid=false
            // validite de l'email 
            if(!emailValue.match(mailformat)){
                errorEmail.innerHTML='Addresse email invalide'
                errorEmail.style.color='red'
                email.style.borderColor='red' 
            }else{
                errorEmail.innerHTML=''
                email.style.borderColor='#00000064'
                emailValid=true
            }
            //validite des passwords
            if(passwordValue.length<=6){
                errorPassword.innerHTML='Votre mot de passe doit avoir au moins 6 caractères'
                errorPassword.style.color='red'
                password.style.borderColor='red'  
            }else if(passwordValue!=passwordRepeatValue){
                errorPassword.innerHTML='Les mot de passe ne correspondent pas'
                errorPassword.style.color='red'
                password.style.borderColor='red'
                errorPasswordRepeat.innerHTML='Les mot de passe ne correspondent pas'
                errorPasswordRepeat.style.color='red'
                passwordRepeat.style.borderColor='red'
            }else{
                errorPassword.innerHTML=''
                password.style.borderColor='#00000064'
                errorPasswordRepeat.innerHTML=''
                passwordRepeat.style.borderColor='#00000064'
                passwordValid=true  
            }
            if(emailValid==true && passwordValid==true){
                let circle2=document.getElementById('circle2')
                let formSingUp1=document.getElementById('formSingUp1')
                let formSingUp2=document.getElementById('formSingUp2')
                circle2.style.backgroundColor='#f6b105'
                formSingUp1.style.display='none'
                formSingUp2.style.display='block' 
            }
        }
        
    }

    function Form2Prev(){
        let circle1=document.getElementById('circle1')
        let circle2=document.getElementById('circle2')
        let formSingUp1=document.getElementById('formSingUp1')
        let formSingUp2=document.getElementById('formSingUp2')
        circle2.style.backgroundColor='#ffff'
        circle1.style.backgroundColor='#f6b105'
        formSingUp2.style.display='none'
        formSingUp1.style.display='block'
    }

    function Form2Next(){
        

        // let circle2=document.getElementById('circle2')
        // let circle3=document.getElementById('circle3')
        // let formSingUp2=document.getElementById('formSingUp2')
        // let formSingUp3=document.getElementById('formSingUp3')
        // circle3.style.backgroundColor='#f6b105'
        // formSingUp2.style.display="none"
        // formSingUp3.style.display="block"
    }

    function Form3Prev(){
        let circle2=document.getElementById('circle2')
        let circle3=document.getElementById('circle3')
        let formSingUp2=document.getElementById('formSingUp2')
        let formSingUp3=document.getElementById('formSingUp3')
        circle2.style.backgroundColor='#f6b105'
        circle3.style.backgroundColor='#ffff'
        formSingUp2.style.display="block"
        formSingUp3.style.display="none"
    }

    function Form3Next(){
        let circle4=document.getElementById('circle4')
        let formSingUp3=document.getElementById('formSingUp3')
        let formSingUp4=document.getElementById('formSingUp4')
        circle4.style.backgroundColor='#f6b105'
        formSingUp3.style.display='none'
        formSingUp4.style.display='block'
    }

    function Form4Prev(){
        let circle4=document.getElementById('circle4')
        let formSingUp3=document.getElementById('formSingUp3')
        let formSingUp4=document.getElementById('formSingUp4')
        circle4.style.backgroundColor='#ffff'
        formSingUp3.style.display='block'
        formSingUp4.style.display='none'
    }

    function valider(){

    }

    //le modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <FirstBanner/>
            <Line/>
            {/* block d'inscription */}
            <div onClick={NavClik} className='row blockSingUp' id='blockSingUp'>
                {/* title register */}
                <p className='titleSingUp' id='titleSingUp'>CREER VOTRE COMPTE</p>

                {/* block de gauche */}
                <div className='blockLeftSingUp' id='blockLeftSingUp'>
                    <div className='verticalLine' id='verticalLine'>
                        <div className='blockCircle blockCircle1' id='blockCircle1'>
                            <div className='circle circle1' id='circle1'>
                                <p className='number number1' id='number1'>1</p>
                            </div>
                        </div>
                        <div className='circle circle2' id='circle2'>
                            <p className='number number2' id='number2'>2</p>
                        </div>
                        <div className='circle circle3' id='circle3'>
                            <p className='number number3' id='number3'>3</p>
                        </div>
                        <div className='circle circle4' id='circle4'>
                            <p className='number number4' id='number4'>4</p>
                        </div>
                    </div>
                    <div className='blockTitles' id='blockTitles'>
                        <div className="titlesSingUp">
                            <p className='titles title1' id='title1'>AUTHENTIFICATION</p>
                            <p className='titleDescription titleDescription1' id='titleDescription1'>VOS INFORMATIONS DE CONNEXION A VOTRE COMPTE</p>
                        </div>
                        <div className="titlesSingUp">
                            <p className='titles title2' id='title2'>INFORMATIONS PERSONNELLES</p>
                            <p className='titleDescription titleDescription2' id='titleDescription2'>LES INFORMATIONS SUR VOUS</p>
                        </div>
                        <div className="titlesSingUp">
                            <p className='titles title3' id='title3'>ADDRESSES</p>
                            <p className='titleDescription titleDescription3' id='titleDescription3'>VOTRE LOCALISATION</p>
                        </div>
                        <div className="titlesSingUp">
                            <p className='titles title4' id='title4'>PERMISSIONS</p>
                            <p className='titleDescription titleDescription4' id='titleDescription4'>POLITIQUE DE CONFIDENTIALITE</p>
                        </div>
                    </div>
                </div>

                {/* block de droite */}
                <div className='blockRightSingUp' id='blockRightSingUp'>
                    
                    {/* la ligne qui separe le block de gauche a celui de droite */}
                    <div className='secondVerticalLine' id='secondVerticalLine'>
                    </div>

                    {/* formulaire d'inscription */}
                    <form method='POST' action='#' onSubmit={handleSubmit} className='formSingUP' id='formSingUP'>
                        {/* form 1 (information pour se connecter au compte) */}
                        <div className='formSingUp1' id='formSingUp1'>
                            <p className='titlesForm titlesForm1' id='titlesForm1'>AUTHENTIFICATION</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOS INFORMATIONS DE CONNEXION A VOTRE COMPTE</p>
                            <div className='blockForm1' id='blockForm1'>
                                <div className='scrolldiv scrolldiv1' id='scrollDiv1'>
                                    <p className='labelForm labelEmail' id='labelEmail'>VOTRE ADDRESSE EMAIL *</p>
                                    <input type='email' name='email' className='input inputEmail email' id='inputEmail'/>
                                    <span className='error errorEmail' id='errorEmail'></span>
                                    <p className='labelForm labelUserName' id='labelUserName'>VOTRE NOM D'UTILISATEUR (facultatif)</p>
                                    <input type='text' name='userName' className='input inputUserName' id='inputUserName'/>
                                    <span className='error errorUserName' id='errorUserName'></span>
                                    <p className='labelForm labelPassword' id='labelPassword'>VOTRE MOT DE PASSE *</p>
                                    <input type='password' name='password' className='input inputPassword password' id='inputPassword'/>
                                    <span className='error errorPassword' id='errorPassword'></span>
                                    <p className='labelForm labelPasswordRepeat' id='labelPasswordRepeat'>RESSAISISSEZ VOTRE MOT DE PASSE *</p>
                                    <input type='password' name='password_confirmation' className='input inputPasswordRepeat password_confirmation' id='password_confirmation'/>
                                    <span className='error errorPasswordRepeat' id='errorPasswordRepeat'></span>
                                </div>
                                <div className='blockButton' id='blockButton'>
                                        <button type='button' disabled='true' className='prevButton prevButton1' id='prevButton prevButton1'>PRECEDENT</button>
                                        <button type='button'  onClick={Form1Next} className='nextButton nextButton1' id='nextButton nextButton1'>SUIVANT</button>
                                </div>
                            </div>
                        </div>

                        {/* form 2 (informations personnelles) */}
                        <div className='formSingUp2' id='formSingUp2'>
                            <p className='titlesForm titlesForm2' id='titlesForm2'>INFORMATIONS PERSONNELLES</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VEUILLEZ RENSEIGNEZ VOS INFORMATIONS PERSONNELLES</p>
                            <div className='blockForm1' id='blockForm1'>
                                    <div className='scrolldiv scrolldiv2' id='scrollDiv2'>
                                        <p className='labelForm labelName' id='labelName'>NOM *</p>
                                        <input type='text' name='name' className='name input inputName' id='name inputName'/>
                                        <p className='labelForm labelSecondName' id='labelSecondName'>PRENOM *</p>
                                        <input type='text' name='secondname' className='input inputUserName' id='inputUserName'/>
                                        <p className='labelForm labelNumberPhone' id='labelNumberPhone'>NUMERO DE TELEPHONE *</p>
                                        <input type='phone' name='phone' className='input inputNumberPhone' id='inputPassword'/>
                                        <p className='labelForm labelBirthday' id='labelBirthday'>DATE DE NAISSANCE</p>
                                        <input type='date' name='birthday' className='input inputBirthday' id='inBirthday'/>
                                    </div>
                                    <div className='blockButton' id='blockButton'>
                                        <button type='button' onClick={Form2Prev} className='prevButton prevButton2' id='prevButton2'>PRECEDENT</button>
                                        <button type='button' onClick={Form2Next} className='nextButton nextButton2' id='nextButton2'>SUIVANT</button>
                                    </div>
                            </div>
                        </div>

                        {/* form 3 (localisation) */}
                        <div className='formSingUp3' id='formSingUp3'>
                            <p className='titlesForm titlesForm3' id='titlesForm3'>ADDRESSE</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOTRE LOCALISATION</p>
                            <div className='blockForm1' id='blockForm1'>
                                    <div className='scrolldiv2' id='scrollDiv2'>
                                        <p className='labelForm labelCountry' id='labelCountry'>PAYS *</p>
                                        <input type='text' name='country' className='input inputName' id='inputName'/>
                                        <p className='labelForm labelCity' id='labelCity'>VILLE *</p>
                                        <input type='text' name='city' className='input inputUserName' id='inputUserName'/>
                                        <p className='labelForm labelPostalCode' id='labelPostalCode'>CODE POSTAL (facultatif)</p>
                                        <input type='phone' name='postalcode' className='input inputNumberPhone' id='inputPassword'/>
                                        
                                    </div>
                                    <div className='blockButton3' id='blockButton3'>
                                        <button type='button' onClick={Form3Prev} className='prevButton prevButton3' id='prevButton3'>PRECEDENT</button>
                                        <button type='button' onClick={Form3Next} className='nextButton nextButton3' id='nextButton3'>SUIVANT</button>
                                    </div>
                            </div>
                        </div>

                        {/* form 4 (acceptation des conditions d'utilisation) */}
                        <div className='formSingUp4' id='formSingUp4'>
                            <p className='titlesForm titlesForm4' id='titlesForm4'>PERMISSIONS</p>
                            <div className='blockForm1' id='blockForm1'>
                                    
                                    <div className='blockButton4' id='blockButton4'>
                                        <button type='button' onClick={Form4Prev} className='prevButton prevButton4' id='prevButton4'>PRECEDENT</button>
                                        <button type='submit' className='nextButton nextButton4' id='nextButton4'>VALIDER</button>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* j'ai deja un compte */}
                <div className='haveAccount' id='haveAccount'>
                    Déja inscrit ? <span onClick={handleShow} className='signInRegister' id='signInRegister'>Se connecter</span>
                </div>
            </div>


            {/* modal pour connexion */}
            <Modal show={show} onHide={handleClose} id="login">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <p className='connexionTitle' id='connexionTitle'>Connexion</p>
                <img src={logo2} className='logoSingIn' id='logoSingIn' alt='HOUSING'/>
                <form method='POST' action='#'>
                    <div className="group group1">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"></path></g></svg>
                        <input name='email' placeholder="Addresse email" type="text" class="email inputForm"/>
                    </div>
                    <div className="group group2">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></g></svg>
                        <input name='password' placeholder="Mot de passe" type="password" class="password inputForm"/>
                    </div>
                    <div className='remenber' id='remenber'>
                        <label for="checkbox1" class="checkbox">
                            <input type="checkbox" className='checkbox1' id="checkbox1" />
                            <span class="checkmark"></span>
                            <span class="label">Se souvenir de moi</span>
                        </label>
                    </div>
                    <button type='submit' className='submitSignIn' id='submitSignIn'>Se connecter</button>
                    <Link to='/SignUp' onClick={handleClose} className='createAccount' id='createAccount'>Je n'ai pas encore de compte ?</Link>
                </form>
            </Modal.Body>
            </Modal>
        </>
    )
}

export default SingUp