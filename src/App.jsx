import AddMovieForm from './components/AddMovieForm'
import MoviesByTitle from './components/MovieByTitle'
import Movies from "./components/Movies"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return (
    <main className='container py-3'>
      <div className='row'>
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <AddMovieForm/><hr />
    
          <Movies />
    
          <MoviesByTitle title="Dilwale Dulhania Le Jayenge"/>
        </div>
        </div>
    </main>
  ) 
}
