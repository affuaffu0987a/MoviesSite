import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movies}=useGlobalContext();

  return (
    <>
    <div className='movie-cards'>
    {
      movies.map((currElem,index)=>{
        const{Poster,Title,Year,Type,imdbID}=currElem;
        let movieName=Title.substring(0,13);
        return(
          <div  key={index}>
          <NavLink to={`movie/${imdbID}`} className="img-link">
          <div className="card">
          <img src={Poster} alt="Movie-Poster" />
          <div className="movie-info">
          <h3>Name: {movieName.length>=13?`${movieName}...`:movieName}</h3>
            <h5>Year: {Year}</h5>
            <h5>Type: {Type}</h5>
          </div>
          </div>
          </NavLink>
          </div>
        )
      })
     }
    </div>
    </>
  )
}

export default Movies
