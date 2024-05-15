import Button from "../../components/custom/Button";
import InputBox from "../../components/custom/Input";
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import '../background.css';
import toast from "react-hot-toast";
import { user_api } from "@/services/apiService";

export default function RegisterPage(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNavigateLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/login");
    }

    async function handleRegister(event: FormEvent) {
        setLoading(true);
        const toastId = toast.loading("Criando conta...");
        event.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password
        }

        try {
            await user_api.post("/users/create", data)
            .then(
                response => {
                    console.log(response.data);
                    toast.dismiss(toastId);
                    toast.success("Conta criada com sucesso");
                    setLoading(false);
                }
            );
    
            // Limpar os campos do formulário após o registro bem-sucedido
            setName("");
            setEmail("");
            setPassword("");
            
            navigate('/');
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Erro ao criar sua conta");
            setLoading(false);
        }
    }


    return (
        <div className="bg-back1 bg-cover bg-no-repeat h-screen">
            <div className="flex items-center justify-center h-screen backdrop-brightness-50 backdrop-blur-sm">
            {/* Container */}
                <div className="flex max-w-[544px] bg-white p-10 rounded-xl">
                    <div className="flex flex-col items-center w-full gap-2">
                        <img src={logo} className="h-12" />
                        <h1 className="text-xl font-semibold">Acesse sua conta</h1>
                        {/* From */}
                        <form onSubmit={handleRegister} className="flex flex-col w-72">
                        <InputBox onChange={e => setName(e.target.value)} type='text'>Nome Completo:</InputBox>
                        <InputBox onChange={e => setEmail(e.target.value)} type='email'>Email:</InputBox>
                        <InputBox onChange={e => setPassword(e.target.value)} type='password'>Senha:</InputBox>
                        <Button type='submit' disabled = { loading } style='md:mr-8 bg-black text-white w-full'>{ loading ? "Carregando..." : "Criar conta"}</Button>
                        </form>
                        <p className="text-xs font-light flex">Já tem conta ? </p><p onClick={handleNavigateLogin} className="text-xs font-light flex font-semibold underline cursor-pointer">Entrar</p>
                    {/* From */}
                    </div>
                </div>
            {/* Container */}
            </div>
        </div>
    )
}