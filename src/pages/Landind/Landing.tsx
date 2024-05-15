import Header from "../../components/custom/Header";
import Title from "../../components/custom/Title";
import Subtitle from "../../components/custom/Subtitle";
import Button from "../../components/custom/Button";
import '../background.css'
import { useNavigate } from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();

    const handleNavigateRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/register");
    }

    return (
        <>
        <main className="background bg-back1 bg-cover bg-no-repeat bg-center h-screen">
            <Header />
            <section className="flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 xl:px-32 text-white mt-12 md:mt-18">
                <Title>A história da música <br/> não pode ser <br/> esquecida!</Title>
                <Subtitle>Crie já sua conta e curta os sucessos que marcaram os tempos no Vinil.</Subtitle>
                <Button style="bg-blue-200 text-black" handleNavigate={handleNavigateRegister}>Inscreva-se</Button>
            </section>
        </main>
        </>
    );
}

