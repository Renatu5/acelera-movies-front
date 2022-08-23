import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home-page'
import { Login } from './pages/Login/login-page'
import { MovieId } from './pages/movie/movieId'

export const App = (id) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path='/movie/:id' element={<MovieId />} exact />
      </Routes>
    </BrowserRouter>
  )
}
