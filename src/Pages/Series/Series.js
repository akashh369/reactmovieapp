import React, { useEffect, useState } from 'react'
import '../Trending/Trending.css'
import axios from 'axios';
import SingleCard from '../../components/SingleCard/SingleCard';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Series = () => {
  const [Content, setContent] = useState([]);
  const [page,setPage] = useState(1);
  const fetchSeries= async () =>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    setContent(data.results);
  }
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page])
  
  return (
    
    <>
      <span className="pageTitle">Web Series</span>  
      <div className="trending">
      {Content &&
        Content.map((c)=>(
          <SingleCard
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="tv"
          vote_average={c.vote_average}
          />
        ))
      }
      </div>
      <CustomPagination setPage={setPage}
      />
    </>
    )
}

export default Series