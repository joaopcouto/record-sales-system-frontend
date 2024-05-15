import '../../global.css'
import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

export default function ButtonContainer() {
    const navigate = useNavigate();

    const handleNavigateRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/register");
    }

    const handleNavigateLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/login");
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end">
            <Button style='md:mr-8 bg-black text-white' handleNavigate={handleNavigateLogin}>Login</Button>
            <Button style='bg-blue-200 text-black' handleNavigate={handleNavigateRegister}>Inscreva-se</Button>
        </div>
    );
}