// import { useState } from 'react'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './components/Layout/Layout'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
// import User from './components/User/User'
// import Github, { gitHubLoaderInfo } from './components/Github/Github'

// function App() {
//   const [count, setCount] = useState(0)
//   const router=createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout/>}>
//          <Route path='' element={<Home/>}/>
//          <Route path='/about' element={<About/>}/>
//          <Route path='/contact' element={<Contact/>}/>
//          <Route path='/user/:userId' element={<User/>}/>
//          <Route
//          loader={gitHubLoaderInfo} 
//          path='/github'
//          element={<Github/>}
//           />
//       </Route>
//     )
//   )

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App
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
