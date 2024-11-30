'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trophy, Calendar, Users, Mail } from 'lucide-react'

export default function Fut() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado', { email, message })
    setEmail('')
    setMessage('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FútbolTorneos</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#inicio" className="hover:underline">Inicio</a></li>
              <li><a href="#torneos" className="hover:underline">Torneos</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="inicio" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Organiza y Participa en Torneos de Fútbol</h2>
            <p className="text-xl mb-8">La plataforma líder para gestionar competiciones futbolísticas</p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-100">
              Comienza Ahora
            </Button>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Trophy className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Gestión de Torneos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Crea y administra torneos de fútbol con facilidad. Configura grupos, eliminatorias y más.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Programación Automática</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Genera calendarios de partidos automáticamente, optimizando tiempos y locaciones.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Gestión de Equipos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Registra equipos, jugadores y lleva un control detallado de estadísticas y resultados.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="torneos" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Próximos Torneos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Copa Verano', date: '15 de Julio, 2024', teams: 16 },
                { name: 'Liga Juvenil', date: '1 de Agosto, 2024', teams: 24 },
                { name: 'Torneo Empresarial', date: '10 de Septiembre, 2024', teams: 12 }
              ].map((torneo, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{torneo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Fecha: {torneo.date}</p>
                    <p>Equipos: {torneo.teams}</p>
                    <Button className="mt-4">Ver Detalles</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
            <Card className="max-w-md mx-auto">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 FútbolTorneos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}