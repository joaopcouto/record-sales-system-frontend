import { useLocation } from 'react-router-dom';
import Logo from "./Logo";
import ButtonContainer from "./ButtonContainer";
import UsersContainer from "./UserContainer";

export default function Header(){

    const background = {
        backgroundColor: 'rgba(112, 112, 112, 0.5)',
        backdropFilter: 'blur(10px)'
    }

    const location = useLocation();
    const { pathname } = location;

    const renderContainer = () => {
        if (pathname === '/') {
            return <ButtonContainer />;
        } else {
            return <UsersContainer />;
        }
    };

    return (
        <header style={background} className='h-15 md:h-16 lg:h-30 '>
            <div className="header_content flex justify-between items-center py-2 px-4 md:px-8 lg:px-12" >
                <Logo />
                {renderContainer()}
            </div>
        </header>
    )
}
