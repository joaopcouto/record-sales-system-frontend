import Header from '@/components/custom/Header';
import MusicIcon from '../../assets/music-icon.svg';
import MoneyIcon from '../../assets/money-icon.png';
import CollectionCards from '@/components/custom/CollectionCard';
import { MyCardsCollection } from '@/components/Cards';
import { useEffect, useState } from 'react';
import { AlbumModel } from '@/models/AlbumModel';
import { album_api } from '@/services/apiService';


export default function CollectionPage(){
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [totalAlbums, setTotalAlbums] = useState<number>(0);

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
        <div className="bg-gray-900 bg-cover h-[150rem]">
            <Header/>
            <main className='flex flex-col justify-left items-left ml-[14rem] mt-32 mb-10'>
                <h2 className='flex flex-row text-white text-4xl font-semibold mb-14'>Meus discos</h2>
                <div className='flex flex-col md:flex-row mb-10 md:mb-14 space-y-4 md:space-y-0 md:space-x-10'>
                    <CollectionCards value={`${totalAlbums}`} imageSrc={MusicIcon}>Total de Albuns</CollectionCards>
                    <CollectionCards value={`R$ ${totalValue}`} imageSrc={MoneyIcon} style='ml-7'>Valor Investido</CollectionCards>
                </div>
                <MyCardsCollection/>
            </main>
        </div>
    )
}