import '../../global.css'

interface Props {
    children: React.ReactNode;
    style?: string;
    handleNavigate?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: string;
}

export default function Button({ children, type, style, handleNavigate, disabled }: Props) {
    return (
        <button className={`${style} rounded-full px-10 py-2 font-bold transition-transform duration-100 transform hover:scale-110`} onClick={handleNavigate} type={ type } disabled = { disabled }>
            {children}
        </button>
    );
}
