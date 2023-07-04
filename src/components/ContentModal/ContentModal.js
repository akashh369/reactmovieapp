import React, { useEffect, useState } from 'react';
// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios';
import { img_500, unavailable } from '../../config/config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './ContentModal.css'
import { Badge } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';



const bcolor={
  backgroundColor: "red",
  fontWeight : 900,
}

const paper={
  width: "90%",
  height: "80%",
  backgroundColor: "#39445a",
  border: "1px solid #282c34",
  borderRadius: "10px",
  color: "white",
  boxShadow: "5px",
  // boxShadow: theme.shadows[5],
  // padding: theme.spacing(1, 1, 3),
  padding : "1px 2px 20px 0px",
}

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   // position: 'absolute',
  
    
};

export default function ContentModal({children, media_type , id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState();


  
  // const fetchData = async () =>{
    
  //   const data=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  //   .catch(err => {
  //     {  console.log(media_type) }})
  //     setContent(data.data);
  //     //console.log(data.data)
    
  // }
  // const fetchVideo = async () =>{
  //   const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, { validateStatus: false })
  //   const reqkey=data.results[data.results.length-1].key;
  //   if(reqkey===undefined)
  //   reqkey="18942"
  //   setVideo(reqkey)
  //   // console.log(data.results[data.results.length-1].key);
  //   // console.log(data.results);
  // }
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}>{children}
        </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        sx={style}
        onClose={handleClose}
        closeAfterTransition
        //slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {content &&(
            <div style={paper}>
              <div className="ContentModal">
                <CancelIcon onClick={handleClose} fontSize='large' className='crossbutton'/>
              <img
                  src={
                    content.poster_path
                    ? `${img_500}/${content.poster_path}`
                    : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                  style={{borderRadius:"10px"}}
                />
                <img
                  src={
                    content.backdrop_path
                    ? `${img_500}/${content.backdrop_path}`
                    : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                  style={{borderRadius:"10px"}}
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                  <div>

                  </div>
                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="primary"
                    sx={bcolor}
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )
          
          }

        </Fade>
      </Modal>
    </>
  );
}




// <div className="ContentModal">
//                 <img
//                   src={
//                     content.poster_path
//                       ? `${img_500}/${content.poster_path}`
//                       : unavailable
//                   }
//                   alt={content.name || content.title}
//                   className="ContentModal__portrait"
//                 />
//                 <img
//                   src={
//                     content.backdrop_path
//                       ? `${img_500}/${content.backdrop_path}`
//                       : unavailable
//                   }
//                   alt={content.name || content.title}
//                   className="ContentModal__landscape"
//                 />
//                 <div className="ContentModal__about">
//                   <span className="ContentModal__title">
//                     {content.name || content.title} (
//                     {(
//                       content.first_air_date ||
//                       content.release_date ||
//                       "-----"
//                     ).substring(0, 4)}
//                     )
//                   </span>
//                   {content.tagline && (
//                     <i className="tagline">{content.tagline}</i>
//                   )}

//                   <span className="ContentModal__description">
//                     {content.overview}
//                   </span>

//                   <div>
//                     {/* <   Carousel id={id} media_type={media_type} /> */}
//                   </div>

//                   <Button
//                     variant="contained"
//                     startIcon={<YouTubeIcon />}
//                     color="secondary"
//                     target="__blank"
//                     href={`https://www.youtube.com/watch?v=${video}`}
//                   >
//                     Watch the Trailer
//                   </Button>
//                 </div>
//               </div>