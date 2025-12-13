import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components2/Layout/Layout'
import Home from './components2/Home/Home'
import About from './components2/About/About'
import Contact from './components2/Contact/Contact'
import Github, { useGithubInfo } from './components2/Github/Github'

const App = () => {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github'
        loader={useGithubInfo}
        element={<Github/>}/>
    </Route>
  )
)
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
