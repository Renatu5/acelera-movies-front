import { useState } from 'react'
import { Button } from '../../../components/button/buttonComponent'
import { Form } from '../../../components/forms/form'
import { Input } from '../../../components/input/inputComponent'
import { client } from '../../../service/client'

export const MovieForm = () => {
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

  const onChange = (ev) => {
    const { name, value } = ev.target

    setValues({ ...values, [name]: value })
  }
  // const formatDate = (data) => {
  //   return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  // }
  const submit = (ev) => {
    ev.preventDefault()
    const data = {
      ...values,
      releaseDate: new Date(values.releaseDate)
    }
    console.log(data)
    client.post('/movie', data)
      .then((response) => {
        location.reload()
      })
  }

  return (
    <>
      <Form>
        <div>
          <Input name='title' type='text' label='Title' onChange={onChange} />
          <Input name='subtitle' type='text' label='Subtitle' onChange={onChange} />
        </div>
        <div>
          <Input name='resume' type='text' label='Resume' onChange={onChange} />
        </div>
        <div>
          <Input name='gender' type='text' label='Gender' onChange={onChange} />
          <Input name='classification' type='text' label='Classification' onChange={onChange} />
        </div>
        <Input name='releaseDate' type='text' label='Release Date' onChange={onChange} />
        <Input name='image' type='text' label='Image' onChange={onChange} />
        <div>
          <Input name='director' type='text' label='Director' onChange={onChange} />
          <Input name='writer' type='text' label='writer' onChange={onChange} />
        </div>
        <Input name='studio' type='text' label='Studio' onChange={onChange} />
        <Input name='stars' type='text' label='Stars' onChange={onChange} />
        <div>
          <Input name='actors' type='text' label='actors' onChange={onChange} />
          <Input name='awards' type='text' label='awards' onChange={onChange} />
        </div>
        <Button text='Add new movie' onClick={submit} />
      </Form>
    </>
  )
}
