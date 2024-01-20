import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom"

function SinglePost() {
    const [singlePost, setSinglePost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const { postId } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setSinglePost(response);
                setIsLoading(false);
            })
            .catch((err) => {
                setErrorMessage(err.message);
                setIsLoading(false);
                setSinglePost({})
            })
    }, [])
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errorMessage && <h3>{errorMessage}</h3>}
            <ol></ol>
            <h1><strong>Post Details Page Of Post Id: {postId} </strong></h1>
            <div>
                <h3><strong>Post Title:</strong> {singlePost?.title}</h3>
                <h4><strong>Post Body:</strong> {singlePost?.body}</h4>
            </div>
        </div>
    )
}

export default SinglePost