import "../../../../Styles/SingIn-SingUp/SingUp.css"



//form 4 (acceptation des conditions d'utilisation)

function BlockForm4 () {
    
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
            <div className='formSingUp4' id='formSingUp4'>
                <p className='titlesForm titlesForm4' id='titlesForm4'>PERMISSIONS</p>
                <div className='blockForm1' id='blockForm1'>
                        
                        <div className='blockButton4' id='blockButton4'>
                            <button type='button' onClick={Form4Prev} className='prevButton prevButton4' id='prevButton4'>PRECEDENT</button>
                            <button type='submit' className='nextButton nextButton4' id='nextButton4'>VALIDER</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default BlockForm4