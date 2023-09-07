import '../../Styles/Home/NotFound.css'
import image from '../../../src/Assets/Images/logo 3.png'
import FirstBanner from '../ElementsPages/Banners/FirstBanner'

function NotFound () {
    
    return(
        <>
            <FirstBanner/>
            <div className="container div404">
                <img className='image404' src={image} alt=""/>
                <p className="notFound404">404 PAGE NON TROUVE</p>
                <p className="textNotFound">désolé la page que vous essayez d'atteindre n'existe pas</p>
            </div>
        </>
    )
}

export default NotFound