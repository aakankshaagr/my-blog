import * as React from 'react';
import {Post} from "../interface/Post";
import { Tag } from "./Tag";
export interface ICardProps {
    post:Post
}

export function Card ({post}: ICardProps) {
  return (
    <div className="flex flex-row md:flex- max-w-4xl p-5 m-3">
      <div className="max-w-xl mx-auto bg-white rounded-xl p-5 shadow-2xl m-2">
        <div className="p-4 md:p-6">
          <h3 className="font-semibold mb-2 text-4xl font-bold italic text-[#8a3ffc] text-center p-3">
            {post.title}
          </h3>
          <h4 className="text-[#A1045A] mb-2 text-muted text-3xl">{post.author}</h4>
          <h3 className="flex flex-wrap space-x-2 p-3 justify-center ">
            {post["_tags"].map((tag:string,index)=>{
              return <Tag key={index} label={tag}/>
            })}</h3>
          <div className="flex flex-wrap flex-row px-2 justify-center">
            <h3 className="p-3 text-2xl text-muted">{post.created_at.slice(0, 10)}</h3>
            <h3 className="p-3 text-2xl text-muted">{post.created_at.slice(12,19)}</h3></div>
             <a href={post.url}>
              <h5 className="text-muted mb-2 p-3 font-italic text-center place-self-center text-2xl break-all">{post.url}
        </h5></a>
</div> 
      </div>
    </div>
        
  );
}
