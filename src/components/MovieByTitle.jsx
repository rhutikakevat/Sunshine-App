import useFetch from "../useFetch";

const MoviesByTitle = ({title}) =>{
    const {data,loading,error} = useFetch(`https://backend-movies-api.vercel.app/movies/${title}`)
    
    // const {data,loading,error} = useFetch(`http://localhost:3000/movies/${title}`)
    // console.log(data);

    return (
        data? 
        (<div className="card bg-success text-white">
            <div className="card-header">
                <h2 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>{data.title}</h2>
             </div>

             <div className="card-body">
             <p><strong>Director: </strong>{data.director}</p>
             <p><strong>Country: </strong>{data.country}</p>
             <p><strong>Release Year: </strong>{data.releaseYear}</p>
             <p><strong>Ratings: </strong>{data.rating}</p>
             <p><strong>Actors: </strong>{data.actors.join(", ")}</p>
             <p><strong>Awards: </strong>{data.awards}</p>
             <p><strong>Plot: </strong>{data.plot}</p>
             <img src={data.posterUrl} alt="Poster Image" />
             </div>
        </div>) 
        : (loading && <p>Loading...</p>)
    
)
}
export default MoviesByTitle;