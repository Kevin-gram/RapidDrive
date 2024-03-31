import React from "react";
import Jobs from "./JobsPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Joblisting(){
    return(
        <div>
             <Navbar/>
        <Jobs/>
        <Footer/>
        </div>
    )
}