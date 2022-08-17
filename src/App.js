import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home-page'
import { Login } from './pages/Login/login-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  )
}
