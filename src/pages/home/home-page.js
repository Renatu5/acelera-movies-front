
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import { MovieForm } from './components/movieForm'

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    client.get('/movie').then(
      function (response) {
        setMovies(response.data)
      }
    )
  }, [])

  return (
    <>
      <div>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              < Link to={`/movie/${movie.id}`}>
                {movie.title} - {movie.releaseDate} - {movie.resume}
              </Link>
            </li>
          ))}
          <Modal title='Adicionar novo filme'>
            <MovieForm />
          </Modal>
        </ul>
      </div>
    </>
  )
}
