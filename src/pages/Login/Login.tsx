import React, { FormEvent, useState } from 'react'
import logo from '../../assets/logo.png';
import InputBox from '@/components/custom/Input.tsx';
import { useAuth } from '@/hooks/UseAuth';
import Button from '@/components/custom/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isAuthenticated } = useAuth();


    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        login(email, password).then(() => {
            setTimeout(() => {
                navigate('/home')
            }, 2000)
        }).catch(() =>{
            toast.error("Erro ao efetuar o login");
        });
    }

    const handleNavigateRegister = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/register")
    }


    return (
        <>
            {isAuthenticated && <Navigate to='/home'/>}
            <div className="bg-back1 bg-cover bg-no-repeat h-screen">
                <div className="flex items-center justify-center h-screen backdrop-brightness-50 backdrop-blur-sm">
                {/* Container */}
                    <div className="flex max-w-[544px] bg-white p-10 rounded-xl">
                        <div className="flex flex-col items-center w-full gap-2">
                            <img src={logo} className="h-12" />
                            <h1 className="text-xl font-semibold">Acesse sua conta</h1>
                            {/* From */}
                            <form onSubmit={handleLogin} className="flex flex-col w-72">
                            <InputBox onChange={e => setEmail(e.target.value)} type='email'>Email:</InputBox>
                            <InputBox onChange={e => setPassword(e.target.value)} type='password'>Senha:</InputBox>
                            <Button type='submit' style='md:mr-8 bg-black text-white w-full'>Entrar</Button>
                            </form>
                            <p className="text-xs font-light flex">Ainda não tem conta ?</p> <p onClick={handleNavigateRegister} className="text-xs font-light flex font-semibold underline cursor-pointer">Inscrever-se</p>
                        {/* From */}
                        </div>
                    </div>
                {/* Container */}
                </div>
            </div>
        </>
    )
}