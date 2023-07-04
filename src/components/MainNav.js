import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate=useNavigate();

  useEffect(() =>{
    if (value===0) navigate("/");
    else if(value===1) navigate("/movies")
    else if(value===2) navigate("/series")
    else if(value===3) navigate("/search")
    // console.log(value)
  },[value,navigate])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <BottomNavigation 
    sx={{ width: '100%' , position:"fixed" , bottom:0 , backgroundColor:"#2d313a" , zIndex :100}}
     value={value} onChange={handleChange}>
      <BottomNavigationAction
        sx={{color:"white"}}
        label="Trending"
        //value="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
      sx={{color:"white"}}
        label="Movies"
        // value="favorites"
        icon={<MovieIcon/>}
      />
      <BottomNavigationAction
      sx={{color:"white"}}
        label="TV Shows"
        // value="nearby"
        icon={<TvIcon />}
      />
      <BottomNavigationAction 
      sx={{color:"white"}}
      label="Search" 
      // value="folder" 
      icon={<SearchIcon />} />
    </BottomNavigation>
  );
}





// we use navigate to navigate(render) different routes