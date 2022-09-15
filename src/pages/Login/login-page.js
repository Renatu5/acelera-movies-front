import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button/buttonComponent'
import { Input } from '../../components/input/inputComponent'
import { client } from '../../service/client'
import './login-page.css'
export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const inputUsername = ({ target }) => setUsername(target.value)

  const inputPassword = ({ target }) => setPassword(target.value)

  const handleClick = () => {
    const user = { username, password }
    client.post('/login', user)
    navigate('/home')
  }

  return (
    <div className='container'>
      <form className='form-container'>
        <div className='form-login'>
          <Input type="email" label="Username" placeholder="Usuário" onChange={inputUsername} className='login' />
          <Input type="password" label="Password" placeholder="Senha" onChange={inputPassword} className='login' />
          <Button text="login" onClick={handleClick} className='button' />
        </div>
      </form>
    </div>
  )
}
