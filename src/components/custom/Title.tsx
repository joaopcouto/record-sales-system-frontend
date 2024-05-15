import React from "react";

interface Props{
    children: string;
}

export default function Title({ children }: Props){
    return (
        <div className="welcome_text text-3xl mt-32 md:text-4xl lg:text-6xl mb-4 md:mb-6 font-bold">
            <h1>
                { children }
            </h1>
        </div>
    )

}

