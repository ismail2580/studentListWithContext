import React, { useEffect, useState } from 'react'
import {
    Link,
    // useLoaderData
} from "react-router-dom";

function Post() {
    // this is finish resovled worke and then this useLoaderData function thorw data 
    // const post = useLoaderData()


    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)

            .then((response) => response.json())
            .then((response) => {
                setPost(response)
                setIsLoading(false)
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setIsLoading(false);
                setPost([])
            }
            )
    }, [])

    return (
        <div>
            <h1>All Post</h1>
            {isLoading && <h1>Loading...</h1>}
        {errorMessage && <h3>{errorMessage}</h3>}
            <ol>
                {post.map((post) => (
                    <li key={post.id}>
                        <Link to={`${post.id}`}>{post.id}. {post.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Post