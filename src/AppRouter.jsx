import React from "react";
import {Route, Routes} from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage, PokemonPage } from "./pages";


export const AppRouter = () => {
    return <Routes>
        <Route path='/' element={<Header/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path='pokemon/:id' element={<PokemonPage/>}></Route>
        </Route>
        <Route path='*' element={<Header to='/'/>}/>
    </Routes> 
}