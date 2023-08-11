import "../../../../Styles/SingIn-SingUp/SingUp.css"

//form 3 (localisation)

function BlockForm3 () {
    
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

    return(
        <>
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
        </>
    )
}

export default BlockForm3