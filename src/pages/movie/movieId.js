import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { client } from '../../service/client'

export const MovieId = () => {
  const { id } = useParams()
  const [moviesId, setMoviesId] = useState({ title: '' })

  useEffect(() => {
    client.get(`/movie/${id}`)
      .then((response) => {
        setMoviesId(response.data.movieList)
      })
  }, [])

  return (
    <>
      <div>
        <p> {moviesId.title}</p>
      </div>
    </>
  )
}
