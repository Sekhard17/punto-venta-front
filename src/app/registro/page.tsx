'use client'
import { useState, useEffect } from 'react'
import { User, Mail, Lock, BadgeCheck, CreditCard, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegistroForm() {
  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
  })
  
  const formatRUT = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    let formatted = ''
    for (let i = 0; i < cleaned.length; i++) {
      if (i === 2 || i === 5) formatted += '.'
      if (i === 8) formatted += '-'
      formatted += cleaned[i]
      if (formatted.length >= 12) break
    }
    return formatted
  }

  useEffect(() => {
    setFormData(prev => ({ ...prev, rut: formatRUT(prev.rut) }))
  }, [formData.rut])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: name === 'rut' ? value : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <Card className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">Registro de Usuario</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rut" className="text-gray-700">RUT</Label>
              <div className="relative">
                <CreditCard className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="rut"
                  name="rut"
                  placeholder="12.345.678-9"
                  value={formData.rut}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  maxLength={12}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-gray-700">Nombre</Label>
              <div className="relative">
                <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Juan"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="apellido" className="text-gray-700">Apellido</Label>
              <div className="relative">
                <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="apellido"
                  name="apellido"
                  placeholder="Pérez"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="correo" className="text-gray-700">Correo</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="juan.perez@ejemplo.com"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contrasena" className="text-gray-700">Contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="contrasena"
                  name="contrasena"
                  type="password"
                  placeholder="********"
                  value={formData.contrasena}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmarContrasena" className="text-gray-700">Confirmar Contraseña</Label>
              <div className="relative">
                <Lock className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="confirmarContrasena"
                  name="confirmarContrasena"
                  type="password"
                  placeholder="********"
                  value={formData.confirmarContrasena}
                  onChange={handleInputChange}
                  className="pl-8 bg-white/50 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="space-y-2 col-span-full">
              <Label htmlFor="rol" className="text-gray-700">Rol</Label>
              <div className="relative">
                <UserCircle className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="rol"
                  name="rol"
                  value="Vendedor"
                  readOnly
                  className="pl-8 bg-gray-100 border-gray-300 text-gray-600 cursor-not-allowed"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <BadgeCheck className="mr-2 h-5 w-5" /> Registrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}