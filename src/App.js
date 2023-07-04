import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/header';
import MainNav from './components/MainNav'
import { Route,Routes} from 'react-router-dom';
// import { Search } from '@mui/icons-material';

import Movies from './Pages/Movies/Movies';
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

function App() {
  return (
    <>
      <Header/>
      <div className="app">
      <Container>
        <Routes>
          <Route path='/' Component={Trending} /> 
          {/* we are using exact because if this route is inside of other routes then it dont get overlap */}
          <Route path='/movies' Component={Movies}/>
          <Route path='/series' Component={Series}/>
          <Route path='/search' Component={Search}/>
        </Routes>
      </Container>
      </div>
      <MainNav/>
    </>
  );
}

export default App;
