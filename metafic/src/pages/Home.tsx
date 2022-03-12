import React, { useState, useEffect } from 'react';
import axios, {AxiosResponse} from 'axios';
import {Posts} from "../components/Posts";
import {Post} from "../interface/Post";
import {Pagination} from "../components/Pagination";

export function Home() {
    const [posts, setPosts]=useState<Post[]>([]);
    const [index, setIndex]=useState(0)
    const [loading, setLoading]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [postPerPage, setPostPerPage]=useState(10);
    const [query, setQuery] = useState("");
    const fetchPosts = () => {
        setLoading(true);
        axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=" + index)
            .then((response: AxiosResponse) => {
                if (response.status===200){
                    setPosts([...posts,...response.data.hits]);
                }
            });
        setLoading(false);
        setIndex( index + 1);
        console.log(index)
    }
    useEffect(() => {
        const timer = setInterval(fetchPosts, 10000);
        return () => clearInterval(timer);
    }, []);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

    
    const handleSubmit = () => {
        setPosts(posts.filter(post => {
            if (query === "") {
                //if query is empty
                return post;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return post;
            }
            else if (post.author.toLowerCase().includes(query.toLowerCase())) {
                //returns filtered array
                return post;
            }
        }))}
    return (
       
        <div>
            <h1 className=' text-[#25216e] font-semibold font-bold-italic text-7xl '>My Blog</h1>
            <form className="w-3/5 mx-auto flex justify-center flex-col items-center my-3 pt-10 ">
                <div className="flex justify-between w-full cursor-pointer flex wrap space-x-5 ">
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-base border border-blue-500 rounded py-4 px-4  leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Title or Story" onChange={event => setQuery(event.target.value)} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleSubmit()}>Search</button>
                </div>
            </form>
             <Posts posts={currentPosts} loading={loading}/>
            <div className="page">
                <Pagination
                    postsPerPage={postPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
           </div>
        </div>
    )
}
   

