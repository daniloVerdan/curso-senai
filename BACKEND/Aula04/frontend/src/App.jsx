import { useState } from 'react'
import './App.css'

export function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:3007/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao cadastrar usuário')
      }

      alert('Usuário cadastrado com sucesso!')

      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      alert(error.message)
    }
  }

  

  return (
    <>
      
    </>
  )
}

