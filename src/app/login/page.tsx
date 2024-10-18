// components/Login.tsx
'use client'
import { LockOutlined, EmailOutlined } from '@mui/icons-material'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Bienvenido Usuario
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-md px-3">
            <EmailOutlined className="text-gray-500" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 focus:outline-none border-gray-300 text-black placeholder-gray-500"
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-md px-3">
            <LockOutlined className="text-gray-500" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 focus:outline-none border-gray-300 text-black placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Iniciar sesión
          </button>
          <p className="text-center text-gray-500">
            ¿No tienes cuenta? <a className="text-blue-500 underline">Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
