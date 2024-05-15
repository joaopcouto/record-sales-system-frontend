import React from "react";
import LogoImage from '../../assets/logo.png'

export default function Logo(){
    return(
        <div className="flex items-center gap-4 ml-6">
            <img className='w-10 h-12' src={LogoImage} alt="logo" />
            <h3 className='text-white font-bold'>Bootplay</h3>
        </div>
    )
}


