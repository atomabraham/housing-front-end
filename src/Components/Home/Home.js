//importation des dépendances
import React from 'react'
import '../../Styles/Home/Home.css'
import FirstBanner from '../Banners/FirstBanner'
import Line from '../Banners/Line'
import SecondBanner from '../Banners/SecondBanner'

//composant de la page d'acceuil

function Home(){

    return(
        <div className='home' id='home'>
            <FirstBanner/>
            <Line/>
            <SecondBanner/>
        </div>
    )
}

export default Home