import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';
import { ContentHeader } from '../components/contentHeader';



export const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}