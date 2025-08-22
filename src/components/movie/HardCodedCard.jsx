import React from 'react'
import poster from '../../assets/imgs/dune.jpg'

const HardCodedCard = () => {

    //Default card data //! Change Later for reusability 
    const release = "01/03/2024"
    // const rating = "10/10"



  return (
    <div className="Card  h-[20rem] min-w-50 flex flex-col items-center m-5 rounded-lg  duration-300 shadow-[0px_0px_8px_1px] shadow-black/50 hover:scale-105 hover:shadow-red-500/40">
        
        <div className="image h-full relative group">
            <img src={poster} alt="poster of ......" className='w-full h-[100%]  rounded-xl'/>

            <div className='absolute top-2 right-2 bg-black/45 p-1 rounded-lg group-hover:bg-black/85 duration-150 ease-in'>
                  <p className='text-center text-sm'>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            </div>

             <div className="details bg-black/50 text-white h-13  absolute bottom-0 left-0 right-0  rounded-md flex flex-col items-center group-hover:bg-black/85 duration-150 ease-in">
                <h1 className='text-lg font-bold'>Dune Part Two</h1>
                <p className='text-center  text-sm text-white/50 '>{release}</p>
            </div>

        </div>

    </div>
  )
}


export default HardCodedCard
