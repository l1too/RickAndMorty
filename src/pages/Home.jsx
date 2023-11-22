import Content from "../components/content"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import { useState } from "react"

export default function Home(){
    const [buscador, setBuscador] = useState("")
    return(
        <>
            <Navbar buscador={buscador} setBuscador={setBuscador}/>
            <Content buscador={buscador} />
            <Footer/>
        </>
    )
}