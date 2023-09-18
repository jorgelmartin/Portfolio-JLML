import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Contact } from "../Contact/Contact";
import { Projects } from "../Projects/Projects";
import { Stack } from "../Stack/Stack";
import { Home } from "../Home/Home";

export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stack" element={<Stack />} />
                {/* <Route path="/register" element={<Register />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/admin" element={<Admin />} /> 
                <Route path="/users" element={<Users />} /> */}
            </Routes>
        </>
    );
};