import React from 'react'

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import './SingleCard.css'
import {img_300} from '../../config/config'
import unavailable from '../../assests/unavailable.png'
import ContentModal from '../ContentModal/ContentModal';
import { ThemeProvider, createTheme } from '@mui/material';
import { blue, green } from '@mui/material/colors';

const Theme= createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#56b53f',
    },
    secondary: {
      main: '#007ef5',
    },
    text: {
      primary: '#ffffff',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
    
});


const SingleCard = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  //console.log(media_type);
  return (
    
    <ContentModal media_type={media_type} id={id}>
      <ThemeProvider theme={Theme}>
      <Badge badgeContent={vote_average.toFixed(1)}  theme={Theme} color={vote_average > 8 ? "primary" : "secondary"}/>
    </ThemeProvider>
      {/* we can use vote_average.toFixed(2) for rounding to 2 decimal places */}
      <img className="poster" src={poster ?`${img_300}/${poster}`: unavailable} alt="hero" />
      <b className="title">{title}</b>
      <span className="sunTitle">
        {media_type==="tv" ? "TV Series" : "Movie"}
        <span className="sunTitle">{date}</span>
      </span>
    </ContentModal>
    
  )
}
//console.log({unavailable});
export default SingleCard