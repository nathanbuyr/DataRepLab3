import Read from "./Read";
{/* Movies Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
const Movies = (props) => {
    return (
    <div>
        hello from movies
        {console.log(props.myMovies)}
    </div>
    )
  };
  
  export default Movies;