import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import HardCodedCard from './HardCodedCard'
import Filters from './Filters'

const Library = () => {
  
  const [movies, setMovies] = useState([])

  // Array of filters
  const [filter, setFilter] = useState({
    sortBy: "",
    orderBy: ""
  })

  //returns a list of movies from api and stores in useState hook
  const fetchMovies = async() => {
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8f3a9599e928444c24d2820789c2c8c3');
      const data = await res.json()
      setMovies(data.results)
  }

  useEffect(()=>{
    fetchMovies()
      
  },[])
  
  //Updates on state CHnage for development
  // useEffect(() => {
   
  //   movies.map(movie => console.log(movie.original_title))
  // },[movies])


  
  return ( 
  <>
    <Filters filter={filter} setFilter={setFilter} movies={movies} setMovies={setMovies}/>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center '>
        <HardCodedCard/>   
        {movies.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  </>
  )
}

export default Library
