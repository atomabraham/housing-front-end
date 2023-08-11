import "../../../../Styles/SingIn-SingUp/SingUp.css"

let Email = '';

//
function BlockForm1 () {
    const saveEmail = (e)=>{
        console.log('changing');
        Email = e.target.value;
    };

    function Form1Next(){
        // recuperation des donnees du formulaire 1
        let email = document.getElementById('inputEmail')
        let userName = document.getElementById('inputUserName')
        let password = document.getElementById('inputPassword')
        let passwordRepeat = document.getElementById('password_confirmation')
        let errorEmail = document.getElementById('errorEmail')
        let errorPassword = document.getElementById('errorPassword')
        let errorPasswordRepeat = document.getElementById('errorPasswordRepeat')
        let emailValue = email.value
        let userNameValue = userName.value
        let passwordValue = password.value
        let passwordRepeatValue = passwordRepeat.value

        //
        

        // controle des donnees du formulaire
        if(emailValue=='' && passwordValue=='' && passwordRepeatValue==''){
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
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
            }
            // else if(emailExist==true){
            //     errorEmail.innerHTML='Cette adresse email existe déja'
            //     email.style.borderColor='red'
            // }
            else{
                errorEmail.innerHTML=''
                email.style.borderColor='#00000064'
                emailValid=true
                //alert(emailToChecked)
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

    return(
        <>
            {/* form 1 (information pour se connecter au compte) */}
            <div className='formSingUp1' id='formSingUp1'>
                <p className='titlesForm titlesForm1' id='titlesForm1'>AUTHENTIFICATION</p>
                <p className='titleDescriptionForm titleDescriptionForm1' id='titleDescriptionForm1'>VOS INFORMATIONS DE CONNEXION A VOTRE COMPTE</p>
                <div className='blockForm1' id='blockForm1'>
                    <div className='scrolldiv scrolldiv1' id='scrollDiv1'>
                        <p className='labelForm labelEmail' id='labelEmail'>VOTRE ADDRESSE EMAIL *</p>
                        <input type='email' name='email' className='input inputEmail email' id='inputEmail' onChange={saveEmail}/>
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
                            <button type='button'  onClick={ Form1Next } className='nextButton nextButton1' id='nextButton nextButton1'>SUIVANT</button>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default BlockForm1