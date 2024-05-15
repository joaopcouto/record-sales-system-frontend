import React from "react";

interface Props{
    children: string;
}

export default function Subtitle({ children }: Props){
    return (
        <div className="subtitle_text text-base md:text-lg mb-4 md:mb-6 text-gray-400 font-bold">
            <p>
                { children }
            </p>
        </div>
    )
}
