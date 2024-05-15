import './Home.css'
import Header from "../../components/custom/Header";
import Title from '../../components/custom/Title';
import Subtitle from '../../components/custom/Subtitle';
import SearchBox from '../../components/custom/SearchBox';
import { CardsCarousel, CardsList } from '../../components/Cards';
import { useState } from 'react';

export default function HomePage() {
    const [searchUsed, setSearchUsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setSearchUsed(true);
    };

    return (
        <>
            <main className='background2 bg-gray-900 bg-back2 bg-cover bg-no-repeat bg-center h-full'>
                <Header />
                <div className="flex flex-auto">
                    <div className="flex flex-col justify-center items-start ml-12 mt-0 text-white w-[48%]">
                        <Title children='A história da música não pode ser esquecida!' />
                        <Subtitle children='Sucessos que marcaram o tempo!!!' />
                    </div>
                </div>
                <section className='flex flex-col'>
                    <div className='xl:mt-36 lg:mt-[-3rem] md:mt-[4.5rem]' >
                        <SearchBox onSearch={handleSearch} />
                        {!searchUsed && <h2 className='text-white text-4xl font-semibold ml-28 mb-5'>Trends</h2>}
                        {!searchUsed ? <CardsCarousel /> : <CardsList searchTerm={searchTerm} />}
                    </div>
                </section>
            </main>
        </>
    )
}
