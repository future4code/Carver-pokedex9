import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"; 
import PokemonsPage from "../Pages/PokemonsPage/PokemonsPage";
import DetalhesPage from "../Pages/DetalhesPage/DetalhesPage";


const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/pokedex" element={<PokemonsPage/>}/>
               <Route path="/detalhes" element={<DetalhesPage/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default Router;