import React from 'react';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Name from "./Pages/Name";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "/name",
            element: <Name/>,
        },
    ]);

    return(
        <>
            <h1 className={"title"}>Learn React</h1>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;