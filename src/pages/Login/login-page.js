import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../components/button/buttonComponent'
import { Input } from '../../components/input/inputComponent'
import { client } from '../../service/client'

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
    <>
      <div>
        <Input type="email" label="Username" placeholder="Usuário" onChange={inputUsername} />
        <Input type="password" label="Password" placeholder="Senha" onChange={inputPassword} />
        <Button name="botao" onClick={handleClick} />
      </div>
    </>
  )
}
