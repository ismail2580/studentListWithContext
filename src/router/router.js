import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import About from '../pages/About';
import Home from '../pages/Home';
import Post from '../pages/Post';
import ErrorPage from '../pages/ErrorPage';
import SinglePost from '../pages/SinglePost';

export const router = createBrowserRouter([
    {
        path: '/', element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            {
                path: "/post", element: <Post />,

                // loader: async () => (
                //     // ()this is return data that's why i'm not write return keyword here
                //     fetch(`https://jsonplaceholder.typicode.com/posts`)
                // )
            },
            { path: "/post/:postId", element: <SinglePost /> }

        ]
    },
])