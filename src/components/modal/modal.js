import { Button } from '../button/buttonComponent'
import { useState } from 'react'
import './modal.css'

export const Modal = ({ titleButton, title, buttonStyle, children, buttonClass }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)

  return (
    <>
      <Button text={titleButton} onClick={handleClick} buttonStyle={buttonStyle} className={buttonClass} />

      {toggle && (
        <div className='modal-background'>
          <div className='modal'>
            <header>
              <h1>{title}</h1>
              <Button text='X' onClick={handleClick} className='close' />
            </header>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
