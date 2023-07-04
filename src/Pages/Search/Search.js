import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import SingleCard from '../../components/SingleCard/SingleCard';
import '../Trending/Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination';


const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState(1)

  const darkTheme = createTheme({
    palette: {
      type : "dark",
      primary : {
        main : "#fff",
      },
      text: {
        primary: '#ffffff',
      },
    },
  });
  

  
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e,newvalue) =>{
    setPage(1);
    setType(newvalue);
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex",margin:"20px 0"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="white"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
         sx={{ paddingBottom: 5, width: "100%", display: "flex", justifyContent: "center" }}
          centered
        >
          <Tab label="Search Movies" style={{ flex: "0 0 50%" }} />
          <Tab label="Search TV Series" style={{ flex: "0 0 50%" }} />
          {/* </div> */}
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search