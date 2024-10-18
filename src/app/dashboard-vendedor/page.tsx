'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ventasMensuales = [
  { mes: 'Ene', ventas: 4000 },
  { mes: 'Feb', ventas: 3000 },
  { mes: 'Mar', ventas: 5000 },
  { mes: 'Abr', ventas: 2780 },
  { mes: 'May', ventas: 1890 },
  { mes: 'Jun', ventas: 2390 },
  { mes: 'Jul', ventas: 3490 },
  { mes: 'Ago', ventas: 4200 },
  { mes: 'Sep', ventas: 3800 },
  { mes: 'Oct', ventas: 4300 },
  { mes: 'Nov', ventas: 5200 },
  { mes: 'Dic', ventas: 6100 },
]

const ventasPorProducto = [
  { nombre: 'Producto A', ventas: 4000 },
  { nombre: 'Producto B', ventas: 3000 },
  { nombre: 'Producto C', ventas: 2000 },
  { nombre: 'Producto D', ventas: 2780 },
  { nombre: 'Producto E', ventas: 1890 },
]

const distribucionClientes = [
  { name: 'Nuevos', value: 400 },
  { name: 'Recurrentes', value: 300 },
  { name: 'Inactivos', value: 300 },
]

const rendimientoSemanal = [
  { dia: 'Lun', ventas: 4000, objetivos: 2400 },
  { dia: 'Mar', ventas: 3000, objetivos: 2210 },
  { dia: 'Mié', ventas: 2000, objetivos: 2290 },
  { dia: 'Jue', ventas: 2780, objetivos: 2000 },
  { dia: 'Vie', ventas: 1890, objetivos: 2181 },
  { dia: 'Sáb', ventas: 2390, objetivos: 2500 },
  { dia: 'Dom', ventas: 3490, objetivos: 2100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function DashboardGraficosVendedor() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Ventas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ventas Mensuales</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              ventas: {
                label: "Ventas",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ventasMensuales}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="ventas" stroke="var(--color-ventas)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ventas por Producto</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              ventas: {
                label: "Ventas",
                color: "hsl(var(--chart-2))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ventasPorProducto}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="nombre" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="ventas" fill="var(--color-ventas)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribución de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              value: {
                label: "Clientes",
                color: "hsl(var(--chart-3))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribucionClientes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distribucionClientes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rendimiento Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              ventas: {
                label: "Ventas",
                color: "hsl(var(--chart-4))",
              },
              objetivos: {
                label: "Objetivos",
                color: "hsl(var(--chart-5))",
              },
            }} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rendimientoSemanal}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="ventas" stackId="1" stroke="var(--color-ventas)" fill="var(--color-ventas)" />
                  <Area type="monotone" dataKey="objetivos" stackId="1" stroke="var(--color-objetivos)" fill="var(--color-objetivos)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}