import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
    <div className="Card  h-[20rem] min-w-50 flex flex-col items-center m-5 rounded-lg  duration-300 shadow-[0px_0px_8px_3px] shadow-black/50 hover:scale-105 hover:shadow-red-500/60">
      
      <div className="image h-full relative group">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster of ......" className='w-full h-[100%]  rounded-xl'/>

            <div className='absolute top-2 right-2 bg-black/45 p-1 rounded-lg group-hover:bg-black/85 duration-150 ease-in'>
                  <p className='text-center text-sm'>{movie.popularity}</p>
            </div>

             <div className="details bg-black/50 text-white absolute bottom-0 left-0 right-0  rounded-md flex flex-col items-center group-hover:bg-black/85 duration-150 ease-in h-fit p-1">
                <h1 className='text-lg font-bold text-center'>{movie.title}</h1>
                <p className='text-center  text-sm text-white/50 '>{movie.release_date}</p>
            </div>

      </div>
     
    </div>
     </a>
  )
}
export default MovieCard
