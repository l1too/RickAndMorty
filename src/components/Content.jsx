import { useState, useEffect } from "react"
import Card from "./card"


export default function Content({buscador}){
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
        

    return(
        <> 
            <h1 className=" text-6xl font-bold text-fuchsia-500 py-5 text-center">Rick & Morty</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 justify-items-center">
            {characters.results.filter((character)=>{
                return buscador.toLowerCase() === '' ? character : character.name.toLowerCase().includes(buscador)
                }).map ((character) => {
                return(
                    
                    <Card key={character.id} character={{name:character.name , img:character.image, species:character.species, id:character.id}}/>
                
                    )
                })
            }
            </div> 
        </>
    )
}