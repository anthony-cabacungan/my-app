import React from 'react'
import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Community from './pages/Community'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'



export default function AppNavigator() {
  return (
    <ReactRouterDomRoutes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/profile/:username" element={<Profile />} />

    </ReactRouterDomRoutes>
  )
}
