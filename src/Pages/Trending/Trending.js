import axios from 'axios'
import React, { useEffect, useState } from 'react'

import SingleCard from '../../components/SingleCard/SingleCard'
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
  const [page, setPage] = useState(1);
  const [Content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)

    await setContent(data.results);
  }

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);


  return (
    <>
      <span className="pageTitle">TRENDING THIS WEEK</span>
      <div className="trending">
        {Content && 
        Content.map((c) => (<SingleCard 
          key={c.id} 
          id={c.id} 
          poster={c.poster_path} 
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          />
          ))}
      </div>
      <CustomPagination setPage={setPage} page={page}/>
    </>
  )
}

export default Trending