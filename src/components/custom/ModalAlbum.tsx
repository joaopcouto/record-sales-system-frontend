import React, { FormEvent } from 'react';
import Button from '@/components/custom/Button';
import { IoClose } from "react-icons/io5";
import { AlbumModel } from '@/models/AlbumModel';
import { WalletModel } from '@/models/WalletModel';
import { album_api } from '@/services/apiService';
import toast from 'react-hot-toast';

interface ModalProps {
  closeModal: () => void;
  album: AlbumModel;
  wallet: WalletModel;
}

const ModalAlbum: React.FC<ModalProps> = ({ closeModal, album, wallet }:ModalProps) => {
  async function buyAlbum(event: FormEvent) {
    event.preventDefault();

    const albumPrice = album.value;

    if (wallet.balance >= albumPrice) {
      const requestBody = {
        name: album.name,
        idSpotify: album.id,
        artistName: album.artists[0].name,
        imageUrl: album.images[0].url,
        value: album.value
      };

      try {
        await album_api.post("/albums/sale", requestBody);
        toast.success("Álbum comprado!!");
        closeModal();
      } catch (error) {
        toast.error("Você já possui esse álbum");
      }
    } else {
      toast.error("Saldo insuficiente");
    }
  }

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black backdrop-blur-[0.5px]">
        <div className="relative bg-white w-[40rem] h-80 rounded-lg">
          <div className="flex justify-center items-center absolute mt-1 ml-[38rem] cursor-pointer hover:scale-110" onClick={closeModal}>
            <IoClose className="text-2xl"/>
          </div>
          <div className="flex w-80 h-80 mr-[20rem] absolute">
          <img
            className="w-96 rounded-l-lg"
            src={album.images[0].url} 
            alt={album.name}
          />
          </div>
          <div className="text-black cursor-default mt-4 absolute">
            <div className="ml-[23rem] text-2xl">
              <h1>{album.name}</h1>
            </div>
            <div className="text-gray-700 mt-12 ml-[23rem] text-sm">
              <h4>Artista(s): {album.artists.map(artist => artist.name).join(', ')}</h4>
              <h4>Tipo: {album.albumType}</h4>
              <h4>Data de lançamento: {album.releaseDate}</h4>
              <h4>Preço: R$ {album.value.toFixed(2)}</h4>
            </div>
            <form onSubmit={buyAlbum} className="flex justify-center mt-[4rem] ml-[25.5rem] absolute">
              <Button type="submit" style="text-white bg-yellow-300">Comprar</Button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default ModalAlbum;