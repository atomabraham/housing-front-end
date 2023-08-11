import "../../../../Styles/SingIn-SingUp/SingUp.css"

//form 2 (informations personnelles)

function BlockForm2 () {

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

    return(
        <>
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
        </>
    )
}

export default BlockForm2