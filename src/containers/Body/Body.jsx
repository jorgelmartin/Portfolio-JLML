import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Projects } from "../Projects/Projects";
// import { useNavigate } from 'react-router-dom';

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/register" element={<Register />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/admin" element={<Admin />} /> 
                <Route path="/users" element={<Users />} /> */}
            </Routes>
        </>
    );
};