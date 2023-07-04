import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    setGenres,
    setselectedGenres,
    type,
    genres,
    setPage,
    selectedGenres,
}

) => {
    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(genres);
        //console.log(data.genres);
      };
      

      useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);
      
  return (
    <>
        
    </>
  )
}

export default Genres