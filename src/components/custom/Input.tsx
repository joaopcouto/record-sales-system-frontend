import React from "react";

interface Props{
    children : React.ReactNode,
    type: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox({ children, type, onChange }: Props){
    return(
        <div className="input_box flex flex-col">
            <label htmlFor={type} className="text-sm font-normal">{children}</label>
            <input type={type} onChange={onChange} className="bg-zinc-50 p-2 rounded-md ring-1 ring-zinc-900/20 mb-3"/>
        </div>
    )
}