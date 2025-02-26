import { useState } from 'react'
import './App.css'
import AddMovie from './components/Movie/AddMovie'
import MovieDisplay from './components/Movie/MovieDisplay'
import { allmovies } from './components/utilis/bookData'
import Navbar from './components/Navbar'
import {Navigate, Route,Routes} from "react-router-dom";
import HomePage from './components/Movie/HomePage'
import MovieDetails from './components/Movie/MovieDetails'
function App() {
  const [movieList,setMovieList]=useState(allmovies)
  return (
   <>
   {/* App.jsx should be neat and tidy */}
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    
       {/* Any website migrating a new link ? Old customers + new customers 
    New customers ?
    Old customers ? millions of users + so incase need to handle with react?
    /films to /allmovies
    {<Navigate replace to '/allmovies'/>}
    */}
    <Route path="/allmovies" element={ <MovieDisplay movieList={movieList}/>}/>
    <Route path='/films' element={<Navigate replace to ='/allmovies'/>}/>
    
    {/* dynamic routing */}
    <Route path="/movie/:id" element={<MovieDetails movieList={movieList}/>}/>
     {/* Error Page || Page Not Found Error */}
    
     {/* /7878  to /404  || 10-12 min*/} 
        
  
  </Routes>
   </>
   
    
  )
}

export default App
// named  import export >>{}
// default import export >>

