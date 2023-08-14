//importation des dépendances
import React from 'react';
import '../../../Styles/Banners/SecondBanner.css'
import { TbListSearch } from 'react-icons/tb';
import { TbHomePlus } from 'react-icons/tb';
import {CloseMenu} from './FirstBanner'
//conposqnt qui créé la navbar du filtre de recherche

function SecondBanner(){

    
    function Resolution(){
            return(
            <React.Fragment className='filterSelect'>
                <div className='blockFilter' id='blockFilter'>
                    <input type='text' className='inputFilter inputLouer' id='inputLouer' placeholder='Lieu'/>
                    
                    <input type='text' className='inputFilter inputType' id='inputType' placeholder='Type'/>
                    
                    <input type='text' className='inputFilter inputLouer' id='inputLouer' placeholder='A Louer'/>

                    <input type='text' className='inputFilter inputLouer' id='inputLouer' placeholder='A Louer'/>

                    <button type='submit' className='submitSearch' id='submitSearch'>
                        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="#F7B100"/>
                            <path d="M32.9398 31.867L38 37.98L36.3282 40L31.2693 33.8856C29.3869 35.709 27.0456 36.7007 24.6331 36.6966C18.7636 36.6966 14 30.9405 14 23.8483C14 16.756 18.7636 11 24.6331 11C30.5025 11 35.2661 16.756 35.2661 23.8483C35.2696 26.7634 34.4488 29.5925 32.9398 31.867ZM30.5699 30.8078C32.0693 28.9446 32.9066 26.4471 32.9032 23.8483C32.9032 18.3278 29.2017 13.8552 24.6331 13.8552C20.0644 13.8552 16.3629 18.3278 16.3629 23.8483C16.3629 29.3688 20.0644 33.8414 24.6331 33.8414C26.7838 33.8455 28.8507 32.8337 30.3926 31.0219L30.5699 30.8078Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            
                <div className='blockSearch' id='blockSearch'>
                    <div className='search block1'>
                        <p><TbListSearch className='iconSearch icon1'/></p>
                        <span className='textSearch text1' id='textSearch'>Rechercher</span>
                    </div>
                    <div className='search block2'>
                        <p><TbHomePlus className='iconSearch icon2' /></p>
                        <span className='textSearch text2' id='textSearch'>Rechercher</span>
                    </div>
                    <div className='search block3'>
                        <p><TbListSearch className='iconSearch icon3'/></p>
                        <span className='textSearch text3' id='textSearch'>Rechercher</span>
                    </div>
                </div>
            </React.Fragment>
            )
    }

    return(
    <nav className='secondBanner' id='secondBanner' onClick={CloseMenu}>
        <Resolution/>
        {/*<select className='language'>
            <option selected>
                
            </option>
            <option >En</option>
        </select>*/}
        
    </nav>
    )
    
}

export default SecondBanner