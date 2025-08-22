import React, { useEffect } from 'react'

const Filters = ({filter, setFilter, movies , setMovies}) => {


    const handleChange = (e) => {
    const {name , value} = e.target
    setFilter(prev => ({...prev,[name]:value }))
  }

  //Updates every time dependency array changes 
  useEffect(() => {
    const copy = [...movies] // Get a copy of the movies to apply filters 
    const sortedMovies = changeOrder(filter.sortBy, copy, filter.orderBy);
    setMovies(sortedMovies);
    
  }, [filter])


  const changeOrder = (sortByValue, movieList, rotation) => {
    return movieList.sort((a, b) => {
      let aValue, bValue; // Stores sort type Data 

      // Decide which property to sort
      if (sortByValue === "Date") {
        aValue = new Date(a.release_date).getTime();
        bValue = new Date(b.release_date).getTime();
      } else if (sortByValue === "Rating") {
        aValue = a.popularity;
        bValue = b.popularity;
      }

      // Ascending or Descending
      return rotation === "Ascending" ? aValue - bValue : bValue - aValue;
    });
  };


  return (
    <div className="flex justify-center gap-5 my-3  ">
        <select name="sortBy" onChange={(e) => (handleChange(e))} className='rounded-md p-2 text-white-700 bg-white/1 shadow-sm shadow-black/50 focus:outline-none focus:ring-1 focus:ring-red-500 duration-150 ease-in'>
            <option value="" className='bg-[#242424] text-white'>Sort By</option>
            <option value="Date" className='bg-[#242424] text-white'>Date</option>
            <option value="Rating" className='bg-[#242424] text-white'>Rating</option>
        
        </select>
        <select name="orderBy" onChange={(e) => (handleChange(e))} className='  rounded-md p-2 text-white-700 bg-white/1 shadow-sm shadow-black/50 focus:outline-none focus:ring-1 focus:ring-red-500 duration-150 ease-in'>
            <option value="Ascending" className='bg-[#242424] text-white'>Ascending </option>
            <option value="Descending" className='bg-[#242424] text-white'>Descending</option>
        </select>
    </div>
  )
}

export default Filters
