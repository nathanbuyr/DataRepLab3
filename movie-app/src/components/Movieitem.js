import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
{/* MovieItem Function*/ }
{/* Using seprated components,it separates concerns and makes the app modular*/ }
const MovieItem = (props)=>
{
    useEffect(() => {
        console.log("Movie Item:", props.Mymovies);
      }, [props.mymovie]); // Only run this effect when the mymovie prop changes
    
    return(
        <div>
            <Card>
            
            <Card.Header>{props.myMovies.Title}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <footer>{props.myMovies.Year}</footer>
            <img src={props.myMovies.Poster}></img>
            </blockquote>
            </Card.Body>
            </Card>
        </div>
    );
}



export default MovieItem;