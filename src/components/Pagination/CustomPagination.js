import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';


const darkTheme= createTheme({
  components: {
    // Name of the component
    MuiPaginationItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color:"#fff",
        },
      },
    },
  },
});

const CustomPagination = ({
    setPage,
    numOfPages=10,
    }) => {

        const handleChange = (page) => {
            setPage(page);
            window.scroll(0,0); 
          };

  return (
    <div 
        style={{
            width:"100%",
            display: "flex",
            justifyContent: "center",
            marginTop : 10,
            }}>
              <ThemeProvider theme={darkTheme}>
                <Pagination 
                onChange={(e) => handleChange(e.target.textContent)} 
                count={numOfPages} 
                
                shape='rounded'
                color='primary' 
                size='large'
                hideNextButton
                hidePrevButton
                />
              </ThemeProvider>
    </div>
  )
}

export default CustomPagination