import { Button } from '../button/buttonComponent'
import { useState } from 'react'
import './modal.css'

export const Modal = ({ children, title, buttonStyle }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)

  return (
    <>
      <Button text="Abrir Modal" onClick={handleClick} buttonStyle={buttonStyle} />

      {toggle && (
        <div className='modal-background'>
          <div className='modal'>
            <header>
              <h1>{title}</h1>
              <Button text='X' onClick={handleClick} />
            </header>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
