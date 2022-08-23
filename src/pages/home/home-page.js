
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import { MovieForm } from '../../components/forms/movieForm'

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
            <MovieForm onClick={submit} onChange={onChange} textButton='adicionar filme' />
          </Modal>
        </ul>
      </div>
    </>
  )
}
