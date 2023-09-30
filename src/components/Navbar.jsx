import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar(){
  const api = import.meta.env.VITE_URL_API

  const [characters, setCharacters] = useState(null)
  useEffect(()=>{
      fetch(api)
      .then((res)=> res.json())
      .then((data) => {setCharacters(data)})
  },[])
    if(!characters){
      return <div>Loading...</div>
    }
    return(
        <div className="navbar bg-indigo-900">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl">Rick&Morty</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={characters.results[2].image} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
</div>
    )
}