//importation des dépendances

import { useEffect, useState } from 'react';
import '../../../Styles/Banners/Line.css'

//Composant qui créé la ligne qui sépare les deux banniere

function Line(){
    //afficher le box-shadow lorsqu'on commence a scroller
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
        setHasScrolled(true);
        } else {
        setHasScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <div className={`line ${hasScrolled ? 'line--scrolled' : ''}`} id='line'>
    </div>
    )
}

export default Line