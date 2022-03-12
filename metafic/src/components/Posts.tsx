import * as React from 'react';
import { Card} from './Card';
import {Post} from "../interface/Post";


export interface props {

loading: boolean,
posts: Array<Post>,

}

export const Posts: React.FC <props>=({posts,loading}) =>{
  if (loading) {
    return <h2>Loading...</h2>;
  }
    return (
      
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {posts.map((post,index) => {
          return <Card key={index} post={post} />
          })}
      </div>
      </div>
    );
  }

