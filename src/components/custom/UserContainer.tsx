import { useNavigate } from "react-router-dom";
import { DropdownMenuUser } from "./Dropdown";


export default function UsersContainer(){
    const navigate = useNavigate();

    const handleNavigateCollection = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/collection");
    }

    const handleNavigateWallet = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate("/my-wallet");
    }

    return(
        <div className="flex flex-wrap md:flex-row items-center justify-center md:justify-end gap-10 mr-10">
            <div className="flex gap-10">
                <h4 onClick={handleNavigateCollection} className="text-white font-semibold hover:scale-110 cursor-pointer">Meus discos</h4>
                <h4 onClick={handleNavigateWallet} className="text-white font-semibold hover:scale-110 cursor-pointer">Carteira</h4>
            </div>
            <DropdownMenuUser/>
        </div>
    )
}