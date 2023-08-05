//importation des dependances

import React, { useEffect } from 'react'
import '../../Styles/SingIn-SingUp/SingUp.css'
import FirstBanner from '../Banners/FirstBanner'
import Line from '../Banners/Line'
import imageSingUp from '../../Assets/Images/600.jpg'
import { Link, Navigate } from 'react-router-dom'
import axios from '../Authentification/axios'
import { useAuth } from '../Authentification/AuthContext'

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
		const { name, email, password, password_confirmation } = e.target.elements;
		const body = {
			name:   name.value,
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

   
    

    //controle des données du formulaire 1
    let emailValid=false
    let userNameValid=false
    let passwordValid=false
    let passwordRepeatValid=false

    /*useEffect(()=>{
        let email=document.getElementById('inputEmail')
        let userName=document.getElementById('inputUserName')
        let password=document.getElementById('inputPassword')
        let passwordRepeat=document.getElementById('inputPasswordRepeat')
        
        //controle de la vailiditer de l'email
        email.addEventListener('input',function(){
            let emailValue=email.value
            let errorEmail=document.getElementById('errorEmail')
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(!emailValue.match(mailformat)){
                errorEmail.innerHTML='Veuillez entrez une addresse valide'
                errorEmail.style.color='red'
                email.style.borderColor='red'
            }else{
                errorEmail.innerHTML='Votre addresse mail est valide'
                errorEmail.style.color='#f6b105'
                email.style.borderColor='#f6b105'
            }
        })
        
        //controle de la validité des mots de passe
        password.addEventListener('input',function(){
            let errorPassword=document.getElementById('errorPassword')
            if(password.value.length<6){
                password.style.borderColor='red'
                errorPassword.style.color='red'
                errorPassword.innerHTML='Votre mot de passe doit avoir au moins 6 caractère' 
            }else{
                password.style.borderColor='#f6b105'
                errorPassword.style.color='#f6b105'
                errorPassword.innerHTML='Votre mot de passe est valide'
            }
        })
        passwordRepeat.addEventListener('input',function(){
            let passwordValue=document.getElementById('inputPassword').value
            let passwordRepeatValue=document.getElementById('inputPasswordRepeat')
            let errorPasswordRepeat = document.getElementById("errorPasswordRepeat")
            let errorPassword=document.getElementById('errorPassword')
            if(passwordValue==passwordRepeatValue){
                errorPasswordRepeat.innerHTML="Mots de passe valide"
                errorPassword.innerHTML='Mots de passe valide'
                passwordRepeat.style.borderColor="#f6b105"
                password.style.borderColor='#f6b105'
                errorPasswordRepeat.style.color="#f6b105"
                errorPassword.style.color='#f6b105'
            }else{
                passwordRepeat.style.borderColor="red"
                errorPasswordRepeat.style.color="red"
                errorPasswordRepeat.innerHTML="Les deux mots de passes ne sont pas identiques."
                password.style.borderColor='red'
                errorPassword.style.color='red'
                errorPassword.innerHTML='Les deux mots de passes ne sont pas identiques.'
            }

        })
    })*/
    
    function Form1Next(){
        let circle1=document.getElementById('circle1')
        let circle2=document.getElementById('circle2')
        let formSingUp1=document.getElementById('formSingUp1')
        let formSingUp2=document.getElementById('formSingUp2')
        circle2.style.backgroundColor='#f6b105'
        formSingUp1.style.display='none'
        formSingUp2.style.display='block'
        /*let prevButton1=document.getElementById('prevButton1')
        if(emailValid==false&&userNameValid==false&&passwordValid==false&&passwordRepeatValid){
            prevButton1.style.disabled="false" 
        }*/
        
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
        let circle2=document.getElementById('circle2')
        let circle3=document.getElementById('circle3')
        let formSingUp2=document.getElementById('formSingUp2')
        let formSingUp3=document.getElementById('formSingUp3')
        circle3.style.backgroundColor='#f6b105'
        formSingUp2.style.display="none"
        formSingUp3.style.display="block"
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

    return(
        <>
            <FirstBanner/>
            <Line/>
            <div className='row blockSingUp' id='blockSingUp'>
                <p className='titleSingUp' id='titleSingUp'>CREER VOTRE COMPTE</p>
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
                <div className='blockRightSingUp' id='blockRightSingUp'>
                    <div className='secondVerticalLine' id='secondVerticalLine'>
                    </div>
                    <form method='POST' action='#' onSubmit={handleSubmit} className='formSingUP' id='formSingUP'>
                        <div className='formSingUp1' id='formSingUp1'>
                            <p className='titlesForm titlesForm1' id='titlesForm1'>AUTHENTIFICATION</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOS INFORMATIONS DE CONNEXION A VOTRE COMPTE</p>
                            <div className='blockForm1' id='blockForm1'>
                                <div className='scrolldiv scrolldiv1' id='scrollDiv1'>
                                    <p className='labelForm labelEmail' id='labelEmail'>VOTRE ADDRESSE EMAIL *</p>
                                    <input type='email' name='email' className='input inputEmail email' id='inputEmail email'/>
                                    <span className='error errorEmail' id='errorEmail'></span>
                                    <p className='labelForm labelUserName' id='labelUserName'>VOTRE NOM D'UTILISATEUR</p>
                                    <input type='text' name='inputUserName' className='input inputUserName' id='inputUserName'/>
                                    <span className='error errorUserName' id='errorUserName'></span>
                                    <p className='labelForm labelPassword' id='labelPassword'>VOTRE MOT DE PASSE *</p>
                                    <input type='password' name='password' className='input inputPassword password' id='inputPassword'/>
                                    <span className='error errorPassword' id='errorPassword'></span>
                                    <p className='labelForm labelPasswordRepeat' id='labelPasswordRepeat'>RESSAISISSEZ VOTRE MOT DE PASSE *</p>
                                    <input type='password' name='password_confirmation' className='input inputPasswordRepeat password_confirmation' id='inputPasswordRepeat password_confirmation'/>
                                    <span className='error errorPasswordRepeat' id='errorPasswordRepeat'></span>
                                </div>
                                <div className='blockButton' id='blockButton'>
                                        <button type='button' disabled='true' className='prevButton prevButton1' id='prevButton prevButton1'>PRECEDENT</button>
                                        <button type='button'  onClick={Form1Next} className='nextButton nextButton1' id='nextButton nextButton1'>SUIVANT</button>
                                </div>
                            </div>
                        </div>
                        <div className='formSingUp2' id='formSingUp2'>
                            <p className='titlesForm titlesForm2' id='titlesForm2'>INFORMATIONS PERSONNELLES</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VEUILLEZ RENSEIGNEZ VOS INFORMATIONS PERSONNELLES</p>
                            <div className='blockForm1' id='blockForm1'>
                                    <div className='scrolldiv scrolldiv2' id='scrollDiv2'>
                                        <p className='labelForm labelName' id='labelName'>NOM *</p>
                                        <input type='text' name='name' className='name input inputName' id='name inputName'/>
                                        <p className='labelForm labelSecondName' id='labelSecondName'>PRENOM *</p>
                                        <input type='text' name='inputUserName' className='input inputUserName' id='inputUserName'/>
                                        <p className='labelForm labelNumberPhone' id='labelNumberPhone'>NUMERO DE TELEPHONE *</p>
                                        <input type='phone' name='inputNumberPhone' className='input inputNumberPhone' id='inputPassword'/>
                                        <p className='labelForm labelBirthday' id='labelBirthday'>DATE DE NAISSANCE</p>
                                        <input type='date' name='inputBirthday' className='input inputBirthday' id='inBirthday'/>
                                    </div>
                                    <div className='blockButton' id='blockButton'>
                                        <button type='button' onClick={Form2Prev} className='prevButton prevButton2' id='prevButton2'>PRECEDENT</button>
                                        <button type='button' onClick={Form2Next} className='nextButton nextButton2' id='nextButton2'>SUIVANT</button>
                                    </div>
                            </div>
                        </div>
                        <div className='formSingUp3' id='formSingUp3'>
                            <p className='titlesForm titlesForm3' id='titlesForm3'>ADDRESSE</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOTRE LOCALISATION</p>
                            <div className='blockForm1' id='blockForm1'>
                                    <div className='scrolldiv2' id='scrollDiv2'>
                                        <p className='labelForm labelCountry' id='labelCountry'>PAYS *</p>
                                        <input type='text' name='inputName' className='input inputName' id='inputName'/>
                                        <p className='labelForm labelCity' id='labelCity'>VILLE *</p>
                                        <input type='text' name='inputUserName' className='input inputUserName' id='inputUserName'/>
                                        <p className='labelForm labelPostalCode' id='labelPostalCode'>CODE POSTAL (facultatif)</p>
                                        <input type='phone' name='inputNumberPhone' className='input inputNumberPhone' id='inputPassword'/>
                                        
                                    </div>
                                    <div className='blockButton3' id='blockButton3'>
                                        <button type='button' onClick={Form3Prev} className='prevButton prevButton3' id='prevButton3'>PRECEDENT</button>
                                        <button type='button' onClick={Form3Next} className='nextButton nextButton3' id='nextButton3'>SUIVANT</button>
                                    </div>
                            </div>
                        </div>
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
            </div>
        </>
    )
}

export default SingUp