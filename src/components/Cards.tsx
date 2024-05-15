import { useEffect, useState } from "react";
import { AlbumModel } from "../models/AlbumModel";
import { album_api, user_api } from "../services/apiService";
import './Cards.css';
import ModalAlbum from "./custom/ModalAlbum";
import { WalletModel } from "@/models/WalletModel";

interface Props {
  searchTerm: string;
}

export function CardsList({ searchTerm }: Props) {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel | null>(null);
  const [wallet, setWallet] = useState<WalletModel | null>(null);

  useEffect(() => {
    album_api.get(`/albums/all?searchText=${searchTerm}`)
      .then(response => {
        setAlbums(response.data);
      });
  }, [searchTerm]);

  useEffect(() => {
    user_api.get('/wallet')
        .then(response => {
            setWallet(response.data);
        });
}, []);

  function handleLink(album: AlbumModel) {
    setSelectedAlbum(album);
  }

  const limitedAlbums = albums.slice(0, 6);

  return (
    <div className='flex flex-wrap gap-4 justify-center h-full mt-9'>
      {/*Cards*/}
      {limitedAlbums.map((album, i) => (
        <div key={i} style={{ '--bg-card': `url(${album.images[0].url})` } as React.CSSProperties} className='bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md mx-7 hover:scale-110'>
          <div onClick={() => handleLink(album)} className='relative flex h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer'>
            <h1 className='text-2xl font-semibold text-white text-center'>{album.name}</h1>
            <h2 className='text-xl font-semibold text-white absolute bottom-4 right-2'>R$ {album.value}</h2>
          </div>
        </div>
      ))}
      {selectedAlbum && (
        <ModalAlbum album={selectedAlbum} wallet={wallet} closeModal={() => setSelectedAlbum(null)} />
      )}
    </div>
  );
}


export function CardsCarousel() {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel | null>(null);
  const [wallet, setWallet] = useState<WalletModel | null>(null);

  useEffect(() => {
    album_api.get("/albums/all?searchText=yung lixo").then((response) => {
      setAlbums(response.data);
    });
  }, []);

  useEffect(() => {
    user_api.get('/wallet')
        .then(response => {
            setWallet(response.data);
        });
}, []);

  function handleLink(album: AlbumModel) {
    setSelectedAlbum(album);
  }
  
  const limitedAlbums = albums.slice(0, 10);

  return (
    <div className="flex justify-center overflow-hidden mt-1 mb-0">
      <div className="carousel-home relative left-0 flex items-center w-full">
        {limitedAlbums.map((album, i) => (
          <div
            key={i}
            style={{
              "--bg-card": `url(${album.images[0].url})`,
            }}
            className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md mx-7 hover:scale-110 cursor-pointer"
            onClick={() => handleLink(album)}
          >
            <div className="relative flex h-full justify-center items-center backdrop-brightness-50 p-6">
              <h1 className="text-2xl font-semibold text-white text-center">
                {album.name}
              </h1>
              <h2 className="text-xl font-semibold text-white absolute bottom-4 right-2">
                R$ {album.value}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {selectedAlbum && (
        <ModalAlbum album={selectedAlbum} wallet={wallet} closeModal={() => setSelectedAlbum(null)} />
      )}
    </div>
  );
}

export function MyCardsCollection(){
    const [albums, setAlbums] = useState<AlbumModel[]>([]);

    useEffect(() => {
        album_api.get('/albums/my-collection')
        .then(response => {
          setAlbums(response.data);
        });
    }, []);


    function handleLink(id: string){
        id = `https://open.spotify.com/intl-pt/album/${id}`;
        window.open(id, '_blank');
    }

    return(
        <div className='flex flex-wrap gap-4 justify-center h-full ml-[-13rem]'>
            {/*Cards*/}
            {albums.map((album, i) => (
            <div key={i} style={{'--bg-card': `url(${album.imageUrl})`} as React.CSSProperties} className='bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md mx-7 hover:scale-110'>
                <div onClick={() => handleLink(album.idSpotify)} className='relative flex h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer'>
                    <h1 className='text-2xl font-semibold text-white text-center'>{album.name}</h1>
                    <h2 className='text-xl font-semibold text-white absolute bottom-4 right-2'>R$ {album.value}</h2>
                </div>
            </div>
            ))}
        </div>
    );
}