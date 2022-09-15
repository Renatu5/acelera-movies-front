import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import { MovieForm } from '../../components/forms/movieForm'
import './style.css'

export const Home = () => {
  const initialValue = {
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: '',
    director: '',
    writer: '',
    studio: '',
    actors: '',
    resume: '',
    awards: '',
    note: 0
  }

  const [values, setValues] = useState(initialValue)
  const [movies, setMovies] = useState([])

  const onChange = (ev) => {
    const { name, value } = ev.target

    setValues({ ...values, [name]: value })
  }

  const submit = (ev) => {
    ev.preventDefault()
    const data = {
      ...values,
      releaseDate: new Date(values.releaseDate)
    }
    console.log(data)
    client.post('/movie/', data)
      .then((response) => {
        alert('filme adicionado com sucesso!')
        location.reload()
      })
  }
  useEffect(() => {
    client.get('/movie').then(
      function (response) {
        setMovies(response.data)
      }
    )
  }, [])

  return (
    <>
      <header className='header'>
        <h1 className='header-content'>Acelera Movies</h1>
      </header>
      <div className='home'>
        <nav className='navigate'>
          <Modal titleButton='adicionar filme' title='Adicionar novo filme' buttonClass='style-button'>
            <MovieForm onClick={submit} onChange={onChange} textButton='adicionar filme' sendClass='sendButton' />
            {console.log(onChange)}
          </Modal>
        </nav>
        <ul className='movie-list'>
          <div className='title-page'>
            <h2>All Movies</h2>
          </div>
          {movies.map((movie, index) => (
            <li key={index} className='movies'>
              < Link to={`/movie/${movie.id}`}>
                <img src={movie.image} />
                <h3 value>{movie.title}</h3>
                <section>{movie.releaseDate} -</section>
                {movie.resume}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
