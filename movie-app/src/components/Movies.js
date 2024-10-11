import MovieItem from "./Movieitem";
import Read from "./Read";
{/* Movies Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
const Movies = (props) => {
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovies={movie} key={movie.imdbID}/>
        }
    );
  }
  
  export default Movies;