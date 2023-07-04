import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import axios from 'axios';
import SingleCard from '../../components/SingleCard/SingleCard';
import '../Trending/Trending.css'
// import Genres from '../../components/Genres';

const Movie = () => {
  const [page, setPage] = useState(1);
  const [Content, setContent] = useState([]);
  // const [genres, setGenres] = useState([]);
  // const [selectedGenres, setSelectedGenres] = useState([]);


  const foetchMovies = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=`)
    
    setContent(data.results);
    //console.log(data.results);
  }

  useEffect(() => {
    
    foetchMovies();
    // eslint-disable-next-line
  }, [page])
  
  return (
    <>
      <span className="pageTitle">Movies</span>
      {/* <Genres
        setGenres={setGenres}
        setselectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        type={media_type}
        genres={genres}
        setPage={setPage}
      /> */}
      <div className="trending">
        {
        Content &&
          Content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} page={page}/>
    </>
  )
}

export default Movie