import React from "react";
import {Routes,Route} from "react-router-dom"
import { Profile } from "../Components/Profile";
import { Project } from "../Components/Project";
import { Skills } from "../Components/Skills";
import { MainPage } from "./MainPage";


const AllRoutes =()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/project" element={<Project/>}></Route>
                <Route path="/Profile" element={<Profile/>}></Route>
                <Route path="/skill" element={<Skills/>}></Route>
                {/* <Route path="/products/:id" element={<ProductDetails/>}></Route> */}

                
            </Routes>
        </div>
    )
}
export default AllRoutes;