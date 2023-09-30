export default function CardDetails({character}){
    return(
        <div className="min-h-screen flex justify-center items-center card w-6/12 mx-auto" >
            <h1 className="font-bold text-6xl text-blue-700 text-center">Details</h1>
            <div className="card lg:card-side bg-fuchsia-900 shadow-xl mt-6">
                <figure><img src={character.img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{character.name}</h2>
                    <p>{character.status}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{character.specie}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}