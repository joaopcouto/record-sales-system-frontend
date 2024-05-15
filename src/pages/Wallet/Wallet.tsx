import { IoClose } from "react-icons/io5";
import Banner from '../../assets/music-notes-banner.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { user_api } from "@/services/apiService";
import { WalletModel } from "@/models/WalletModel";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import './Wallet.css'
import toast from "react-hot-toast";


export default function WalletPage() {
    const navigate = useNavigate();
    const [wallet, setWallet] = useState<WalletModel>();
    const [creditValue, setCreditValue] = useState<string>('');

    const closeWallet = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/home");
    }

    const navigateProfile = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/profile");
    }

    useEffect(() => {
        user_api.get('/wallet')
            .then(response => {
                setWallet(response.data);
            });
    }, []);

    const handleAddCredit = () => {
        if (!creditValue) return; 
        user_api.post(`/wallet/credit/${creditValue}`)
            .then(response => {
                setWallet(response.data);
                toast.success("Credito adicionado à carteira");
                setCreditValue(''); 
            });
    }

    return (
        <div className="background3 bg-backProfile bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center">
            <div className="flex flex-row max-w-[600px] bg-gray-900  rounded-xl">
                <div className="flex justify-center items-center absolute mt-1 ml-[35rem] text-white cursor-pointer hover:scale-110" onClick={closeWallet}>
                    <IoClose className="text-4xl" />
                </div>
                <div className="card flex flex-col justify-center items-center">
                    <img
                        className="rounded-l-xl h-[19.7rem] w-[20rem]"
                        src={Banner}
                        alt="Banner"
                    />
                    <Avatar>
                        <AvatarImage className="cursor-pointer mt-[-15rem] h-44 hover:scale-110" onClick={navigateProfile} src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png' alt="Avatar" />
                        <AvatarFallback className="cursor-pointer"></AvatarFallback>
                    </Avatar>
                </div>

                <div className="flex flex-col mt-11 mr-10 ml-10 gap-10 mb-6">
                    <div className="flex flex-col" >
                        <p className="text-slate-300" >Saldo atual</p>
                        <p className="text-slate-500">{wallet?.balance}</p>
                    </div>
                    <div className="flex flex-col mt-[-1rem]" >
                        <p className="text-slate-300" >Pontos</p>
                        <p className="text-slate-500">{wallet?.points}</p>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            value={creditValue}
                            onChange={(e) => setCreditValue(e.target.value)}
                            placeholder="Digite o valor"
                            className="bg-gray-700 text-white border border-gray-600 rounded p-2"
                        />
                        <button onClick={handleAddCredit} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Adicionar Crédito
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}