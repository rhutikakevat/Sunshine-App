import { useState } from "react"
import useFetch from "../useFetch"
import { FaTrash } from 'react-icons/fa';

const Movies = () => {
    const [successMessage, setSuccessMessage] = useState("")

    const {data,loading,error} = useFetch(`https://backend-movies-api.vercel.app/movies`)
    
    // const {data,loading,error} = useFetch("http://localhost:3000/movies");
    // console.log(data);

    const handleDelete = async (movieId) => {
        try{
            const response = await fetch(`https://backend-movies-api.vercel.app/movies/${movieId}`, {
                method:"DELETE",
            })

            if(!response.ok){
                throw "Failed to delete movie"
            }else{
                const data = await response.json()

                if(data){
                 setSuccessMessage("Movie deleted successfully")
                 window.location.reload()
                }        
            }

        
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="py-2">
            <h1 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>All Movies</h1>

            <ul className="list-group">
            {data?.map((movie)=>
            <li key={movie._id} className="list-group-item bg-black text-light py-2"><span className="fw-semibold fs-5">{movie.title}</span>{"  "} 
                <button className="float-end btn btn-outline-danger" style={{color:"red"}} onClick={()=>handleDelete(movie._id)}>
                    <FaTrash/>
                </button>
            </li>)}

            {/* "?" = optional channing (JS concept) => data is present before "?" then you run method on it. */}
            </ul>

            <p className="py-3 fw-bold fs-3">{successMessage}</p>
        </div>
    )
}

export default Movies;