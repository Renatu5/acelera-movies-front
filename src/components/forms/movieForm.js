
import { Button } from '../button/buttonComponent'
// import { Form } from './form'
import { Input } from '../input/inputComponent'
import './movieForm.css'

export const MovieForm = ({ textButton, onClick, onChange, sendClass }) => {
  return (
    <>
      <form className='form'>

        <div className='form-input'>
          <Input name='title' type='text' label='Title' onChange={onChange} />
          <Input name='subtitle' type='text' label='Subtitle' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='resume' type='text' label='Resume' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='gender' type='text' label='Gender' onChange={onChange} />
          <Input name='classification' type='text' label='Classification' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='releaseDate' type='text' label='Release Date' onChange={onChange} />
          <Input name='image' type='text' label='Image' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='director' type='text' label='Director' onChange={onChange} />
          <Input name='writer' type='text' label='writer' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='studio' type='text' label='Studio' onChange={onChange} />
          <Input name='note' type='text' label='Stars' onChange={onChange} />
        </div>
        <div className='form-input'>
          <Input name='actors' type='text' label='actors' onChange={onChange} />
          <Input name='awards' type='text' label='awards' onChange={onChange} />
        </div>
        <div>
          <Button text={textButton} onClick={onClick} className={sendClass} />
        </div>
      </form>
    </>
  )
}
