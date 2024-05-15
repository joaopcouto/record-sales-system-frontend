import { IoClose } from "react-icons/io5";
import Banner from '../../assets/music-notes-banner.png'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAuth } from "@/hooks/UseAuth";
import { useEffect, useState } from "react";
import { album_api } from "@/services/apiService";
import { AlbumModel } from "@/models/AlbumModel";
import MusicIcon from '../../assets/music-icon.svg';
import MoneyIcon from '../../assets/money-icon.png';
import CollectionCards from "@/components/custom/CollectionCard";
import { useNavigate } from "react-router-dom";


export default function ProfilePage(){
    const { name, email } = useAuth();
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [totalAlbums, setTotalAlbums] = useState<number>(0);
    const navigate = useNavigate();

    const closeProfile = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/home");
    }

    const navigateWallet = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/my-wallet");
    }

    useEffect(() => {
        album_api.get('/albums/my-collection')
        .then(response => {
            setAlbums(response.data);
            setTotalAlbums(response.data.length);
        });
    }, []);

    useEffect(() => {
        const initialValue = 0;
        const sum = albums.reduce((accumulator, currentAlbum) => accumulator + currentAlbum.value, initialValue);
        setTotalValue(parseFloat(sum.toFixed(2)));
    }, [albums]);

    return(
        <div className="background3 bg-backProfile bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center">
            <div className="flex flex-col max-w-[544px] bg-gray-900 pb-8 rounded-xl">
                <div className="flex justify-center items-center absolute mt-1 ml-[29.6rem] cursor-pointer hover:scale-110" onClick={closeProfile}>
                    <IoClose className="text-4xl"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img
                        className="rounded-t-xl h-[18rem] w-[32.2rem]"
                        src={Banner}
                    />
                    <Avatar>
                        <AvatarImage className="cursor-pointer mt-[-13rem] h-44 hover:scale-110" src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png'/>
                        <AvatarFallback className="cursor-pointer"></AvatarFallback>
                    </Avatar>
                </div>

                <div className="flex flex-row mt-11 ml-10">
                    <div className="flex flex-col" >
                        <p className="text-slate-300" >Nome Completo</p>
                        <p className="text-slate-500">{`${name}`}</p>
                    </div>
                </div>

                <div className="flex flex-row mt-5 ml-10">
                    <div className="flex flex-col" >
                        <p className="text-slate-300" >E-mail</p>
                        <p className="text-slate-500">{`${email}`}</p>
                    </div>
                </div>

                <div className="flex flex-row mt-5 ml-9 mb-[-2rem] h-[6rem] w-[28rem]">
                    <CollectionCards value={`${totalAlbums}`} imageSrc={MusicIcon} style2='bg-blue-300'>Total de Albuns</CollectionCards>
                    <CollectionCards value={`R$ ${totalValue}`} imageSrc={MoneyIcon} style2='bg-blue-300' style='ml-5'>Valor Investido</CollectionCards>
                </div>

                <div className="flex flex-row items-center justify-center mt-16">
                        <button onClick={navigateWallet} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Minha carteira
                        </button>
                </div>
            </div>
        </div>
    );
}