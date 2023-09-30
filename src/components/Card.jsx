import { Link } from "react-router-dom"

export default function Card({character}){
    return(
        <div className="card w-80 bg-slate-800 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={character.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{character.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to={`/details?id=${character.id}`} >{character.species}</Link></button>
    </div>
  </div>
</div>
    )
}