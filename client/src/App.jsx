import React from 'react'
import { Routes, Route} from "react-router"
import Movie from './pages/Movie'
import { useDispatch } from "react-redux"
import { getMovies } from './store/APIReducer'

export default function App() {
  let dispatch = useDispatch()
  dispatch(getMovies({limit : 5, offset: 2, sort: "title", sortType: "desc"}))
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <header>Megogo from china🍣🍥🍣</header>
      <main style={{flexGrow: 1}}>
        <Routes>
          <Route path='/' element={<h1>Main</h1>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/*' element={<h1>Not Found</h1>}/>
        </Routes>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} AliExpress 
      </footer>
    </div>
  )
}
