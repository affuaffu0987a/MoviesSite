import React from 'react'
import { useParams } from 'react-router-dom'
import { API_Key } from './context';
import { useState,useEffect } from 'react';
import Isloading from './Isloading';
const SingleMovie = () => {
  const {id}=useParams();
const[isLoading,setIsLoading]=useState(true);
const[movies,setMovies]=useState("");


const getMovies=async(url)=>{
  setIsLoading(true);
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response==='True'){
        setIsLoading(false)
        setMovies(data)
    }
    }
    catch(error){
        console.log(error);
    }

    
}

useEffect(()=>{
    let timer=setTimeout(()=>{
        getMovies(`${API_Key}&i=${id}`)
    },800)
    return()=> clearTimeout(timer)
},[id])
  return (
    <>
 <Isloading/>
  <section>
    <picture className='single-Poster'>
      <img src={movies.Poster} alt="Poster"  />
    </picture>
    <div className="singleMovie-details">
      <h2>{movies.Title}</h2>
      <h3>{movies.imdbRating}</h3>
      <h3>{movies.Actors}</h3>
      <h3>{movies.Director}</h3>
      <h3>{movies.Genre}</h3>
      <h3>{movies.Language}</h3>
      <h3>{movies.Released}</h3>
      <h3>{movies.Plot}</h3>
    </div>
  </section>
    </>
  )
}

export default SingleMovie
