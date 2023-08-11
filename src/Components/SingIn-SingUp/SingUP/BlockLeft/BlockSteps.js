
import "../../../../Styles/SingIn-SingUp/SingUp.css"

//
function BlockSteps (){
    return(
      <>
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
      </>  
    )
}

export default BlockSteps