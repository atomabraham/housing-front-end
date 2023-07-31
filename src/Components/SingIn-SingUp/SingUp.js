//importation des dependances

import React from 'react'
import '../../Styles/SingIn-SingUp/SingUp.css'
import FirstBanner from '../Banners/FirstBanner'
import Line from '../Banners/Line'
import imageSingUp from '../../Assets/Images/600.jpg'
//composant de l'inscription

function SingUp(){
    //récupération des données du formulaire 1
    let email=document.getElementById('inputEmail')
    email.addEventListener('input',function(){
        alert('hello')
    })
    function Form1Next(){
        /*let circle1=document.getElementById('circle1')
        let circle2=document.getElementById('circle2')
        let formSingUp1=document.getElementById('formSingUp1')
        let formSingUp2=document.getElementById('formSingUp2')
        circle2.style.backgroundColor='#f6b105'
        formSingUp1.style.display='none'
        formSingUp2.style.display='block'*/
        
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
                    <form method='' className='formSingUP' id='formSingUP'>
                        <div className='formSingUp1' id='formSingUp1'>
                            <p className='titlesForm titlesForm1' id='titlesForm1'>AUTHENTIFICATION</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOS INFORMATIONS DE CONNEXION A VOTRE COMPTE</p>
                            <div className='blockForm1' id='blockForm1'>
                                <p className='labelForm labelEmail' id='labelEmail'>VOTRE ADDRESSE EMAIL *</p>
                                <input type='email' name='inputEmail' className='input inputEmail' id='inputEmail'/>
                                <span className='error errorEmail' id='errorEmail'>Veuillez entrez une addresse valide</span>
                                <p className='labelForm labelUserName' id='labelUserName'>VOTRE NOM D'UTILISATEUR</p>
                                <input type='text' name='inputUserName' className='input inputUserName' id='inputUserName'/>
                                <p className='labelForm labelPassword' id='labelPassword'>VOTRE MOT DE PASSE *</p>
                                <input type='email' name='inputPassword' className='input inputPassword' id='inputPassword'/>
                                <p className='labelForm labelPasswordRepeat' id='labelPasswordRepeat'>RESSAISISSEZ VOTRE MOT DE PASSE *</p>
                                <input type='text' name='inputPasswordRepeat' className='input inputPasswordRepeat' id='inputPasswordRepeat'/>
                                <div className='blockButton' id='blockButton'>
                                    <button type='button' className='prevButton prevButton1' id='prevButton prevButton1'>PRECEDENT</button>
                                    <button type='button' onClick={Form1Next} className='nextButton nextButton1' id='nextButton nextButton1'>SUIVANT</button>
                                </div>
                            </div>
                        </div>
                        <div className='formSingUp2' id='formSingUp2'>
                            <p className='titlesForm titlesForm2' id='titlesForm2'>INFORMATIONS PERSONNELLES</p>
                            <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VEUILLEZ RENSEIGNEZ VOS INFORMATIONS PERSONNELLES</p>
                            <div className='blockForm1' id='blockForm1'>
                                    <div className='scrolldiv1' id='scrollDiv1'>
                                        <p className='labelForm labelName' id='labelName'>NOM *</p>
                                        <input type='text' name='inputName' className='input inputName' id='inputName'/>
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
                                        <button type='button' className='nextButton nextButton4' id='nextButton4'>VALIDER</button>
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