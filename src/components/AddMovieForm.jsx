// Add the entry in the database from frontend

// cors => Security check in backend for frontend
// cors => cross origin policy 

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const AddMovieForm =()=>{
    const [formData, setFormData] = useState({
        title: "",
        releaseYear: "",
        genre: "",
        director: "",
        actors: "",
        language: "",
        country: "",
        rating: "",
        plot: "",
        awards:"",
        posterUrl:"",
        trailerUrl:""
    });
    const [successMessage, setSuccessMessage] = useState(false)

    const handlerChange = (e) =>{
        const {name,value} = e.target;
        // console.log(name,value)

        setFormData((prevState) => ({
            ...prevState,
            [name]: name === "releaseYear" || name === "rating" ? parseFloat(value): value
        }))
        // console.log({[name]: name === "releaseYear" || name === "rating" ? parseInt(value): value})
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("https://backend-movies-api.vercel.app/movies",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData),              
            });
            
            if(!response.ok){
                throw "Failed to add movie";
            }else{
                const data = await response.json();
                
                if(data){
                    setSuccessMessage("Movie added successfully.");
                    window.location.reload()
                }

                // console.log("Added Movie: ",data);
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h2 className="py-2 display-4" style={{fontFamily:"-moz-initial"}}>Add New Movie</h2>

            <form onSubmit={handlerSubmit} className="py-2">
                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Title: </label><br/>
                <input type="text" className="form-control" name="title" 
                value={formData.title} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Release Year: </label><br />
                <input type="number" className="form-control" name="releaseYear"
                value={formData.releaseYear} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Genre: </label><br />
                <input type="text" name="genre" className="form-control" placeholder="Drama, Romance, Autobiography, Thriller, etc.."
                value={formData.genre} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Director: </label><br />
                <input type="text" name="director" className="form-control"
                value={formData.director} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Actors: </label><br />
                <input type="text" name="actors" className="form-control" 
                value={formData.actors} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Language: </label><br />
                <input type="text" name="language" className="form-control"
                value={formData.language} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Country: </label><br />
                <input type="text" name="country" className="form-control" 
                value={formData.country} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Rating: </label><br />
                <input type="number" name="rating" className="form-control" placeholder="Rate between 1 to 5..."
                value={formData.rating} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Plot: </label><br />
                <input type="text" name="plot" className="form-control" 
                value={formData.plot} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Awards: </label><br />
                <input type="text" name="awards" className="form-control" 
                value={formData.awards} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Poster URL: </label><br />
                <input type="text" name="posterUrl" className="form-control"
                value={formData.posterUrl} onChange={handlerChange} />
                <br />

                <label className="fs-4" style={{fontFamily:"-moz-initial"}}>Trailer URL: </label><br />
                <input type="text" name="trailerUrl" className="form-control" 
                value={formData.trailerUrl} onChange={handlerChange} />
                <br />

                <button className="btn btn-outline-info fw-bold fs-4 mt-3">
                    Submit  <FaPaperPlane/> 
                </button>

                <p className="mt-3 fw-bold fs-3">{successMessage}</p>
            </form>
        </div>
    )
}

export default AddMovieForm;