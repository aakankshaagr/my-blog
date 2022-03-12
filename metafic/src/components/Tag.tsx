import * as React from 'react';
import tag from "../assests/tag.svg";
export interface ITagProps {
    label:string;
}

export function Tag({ label }: ITagProps) {
    return (
    <div className="text-base flex flex-wrap items-center font-bold leading-lg uppercase px-4 py-2 mb-3 bg-blue-200 text-blue-700 rounded-full ">
    
    {label}
</div>
    )}