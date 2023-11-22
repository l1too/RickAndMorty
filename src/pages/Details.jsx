import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import CardDetails from "../components/CardDetails"
import { useEffect, useState } from "react"

export default function Details(){
    const api = import.meta.env.VITE_URL_API
    const [characters, setCharacters] = useState(null)
    useEffect(()=>{
        fetch(api)
        .then((res)=> res.json())
        .then((data) => {setCharacters(data)})
    },[])

    if(!characters){
        return<div>Loading...</div>
    }
        const query = location.search
        const params = new URLSearchParams(query)
        const queryId = Number(params.get("id"))


    return(
        <>
            <Navbar/>
            <CardDetails character={{name:characters.results[queryId -1].name, specie:characters.results[queryId -1].species, status:characters.results[queryId -1].status, img:characters.results[queryId-1].image, gender:characters.results[queryId-1].gender}}/>
            <Footer/>
        </>
    )
}