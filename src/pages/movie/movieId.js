import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
// import { Button } from '../../components/button/buttonComponent'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import { MovieForm } from '../../components/forms/movieForm'
import { pen } from 'fontawesome'
import { Button } from '../../components/button/buttonComponent'

export const MovieId = () => {
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
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    client.get(`/movie/${id}`)
      .then((response) => {
        setValues(response.data.movieList)
        console.log(response.data)
      })
  }, [])
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
    client.put(`/movie/${id}`, data)
      .then(() => {
        alert('filme editado com sucesso!')
        location.reload()
      })
  }

  const deleteId = () => {
    const movieTitle = values.title
    client.delete(`/movie/${id}`, values)
      .then(() => {
        alert(`${movieTitle} foi deletado!`)
        navigate('/home')
      })
  }

  return (
    <>
      <div>
        <Modal title='editar filme' buttonStyle={pen}>
          <MovieForm textButton='atualizar filme' onClick={submit} onChange={onChange} />
        </Modal>
        <Button onClick={deleteId} text={'deletar filme'} />
        <img src={values.image} />
        <p> {values.title} </p>
      </div>
    </>
  )
}
