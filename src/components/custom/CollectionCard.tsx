interface Props {
    children: React.ReactNode;
    value: string;
    style?: string;
    style2?: string;
    imageSrc: string;
}

export default function CollectionCards({ children, style, imageSrc, value, style2 }: Props){
    return(
        <div className={`${style} flex flex-row max-w-64 bg-white p-5 rounded-xl hover:scale-110`}>
            <img className={`${style2} w-12 bg-black rounded-full mr-5`} src={imageSrc} alt="" />
            <div>
                <p className='flex flex-row font-semibold text-sm'>{children}</p>
                <p className="flex flex-row">{ value }</p>
            </div>
        </div>
    )
}