import AddMovieForm from './components/AddMovieForm'
import MoviesByTitle from './components/MovieByTitle'
import Movies from "./components/Movies"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return (
    <main className='container py-3'>
      <AddMovieForm/><hr />

      <Movies />

      <MoviesByTitle title="Dilwale Dulhania Le Jayenge"/>
    </main>
  ) 
}