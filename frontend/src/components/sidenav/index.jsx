import React from "react";  
import "./index.css";

export const Sidenav = () => {
    return(
        <div className="sidenav">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/create">Create</a>
                </li>
                <li>
                    <a href="/contacts">Contact</a>
                </li>
            </ul>
        </div>
    );
};