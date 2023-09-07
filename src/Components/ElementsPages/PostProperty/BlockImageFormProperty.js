import "../../../Styles/PostProperty/PostProperty.css"
import ImageBlockPost from "../../../Assets/Images/600.jpg"
import { CloseMenu } from "../Banners/FirstBanner"
import { useEffect } from "react"

function BlockImagePostPorperty(){
    useEffect(() => {
        // // document.addEventListener('DOMContentLoaded', function(){
        //     const textElement = document.getElementById('texteBlockImagePostPorperty')

        //     // tableau des mots a affihcer
        //     const mots = ['Vendez' , 'Louez']
    
        //     // indice du mot courant
        //     let indiceMot = 0
    
        //     setInterval (() => {
                
        //         // ajout de la classe invisible pour cacher le texte
        //         textElement.classList.add('invisible')
                
        //         setTimeout (() => {
        //             //changement du mot courant
        //             indiceMot = (indiceMot + 1) % mots.length
        //             textElement.style.opacity = 0
        
                    
        //             setTimeout(() => {
        //                 // modification du texte dans l'élément <p> après un court délais
        //                 textElement.textContent = mots[indiceMot] + 'votre bien immobilier facilement et rapidement'
        //                 textElement.style.opacity = 1
                        
        //                 // suppression de la classe "invisible" pour afficher le texte avec une transition
        //                 // textElement.classList.remove()
        //             },500)
        //         }, 500)
        //     }, 5000) // executer toutes les 5 secondes
        // // })
        // alert(changeText.innerHTML)
        
        // function changeText(){
        //     let changeText = document.getElementById('changeText')
        //     if (changeText.innerHTML == "Vendez"){
        //         // alert('ok')
        //         changeText.innerHTML = "Louez"
        //     } else{
        //         changeText.innerHTML = "Vendez"
        //     }
        // }
        // changeText()
    
        // setInterval(changeText,5000)
    })


    

    return(
        <div onClick={CloseMenu} className="BlockImagePostPorperty" id="BlockImagePostPorperty">
            <div className="background" id="background">
                <div className="container">
                    <p className="TextBlockImagePost1" id="texteBlockImagePostPorperty"> <span className="changeText invisibles" id="changeText">Vendez</span> votre bien immobilier rapidement et facilement !</p>
                </div>
            </div>
        </div>
    )
}

export default BlockImagePostPorperty