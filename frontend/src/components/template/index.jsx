import React from "react";
import Home from "../../pages/home/home";
import Create from "../../pages/create";
import Edit from "../../pages/edit";
import View from "../../pages/view";
import Contact from "../../pages/contact";
import Contacts from "../../pages/contacts";
import { Route, Routes } from "react-router-dom";
import "./index.css";


export const Template = ({ children }) => {
    return (
        <div className="t-template">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='/view/:id' element={<View/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </div>
    );
}