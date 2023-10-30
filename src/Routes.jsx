import React from 'react'
import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Login from './pages/Login'

export default function Routes() {
  return (
    <ReactRouterDomRoutes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/login" element={<Login />} />
    </ReactRouterDomRoutes>
  )
}
