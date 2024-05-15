import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface Props {
    onSearch: (term: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="search_box flex justify-center items-center">
            <IoSearchSharp className='search_icon flex items-center absolute  text-white text-lg ml-[19rem] mt-7 cursor-pointer'/>
            <div className="input_box_search mt-8 text-white">
                <input 
                    className="border border-white bg-transparent rounded-lg h-12 pl-2 w-[22rem]"
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    );
}