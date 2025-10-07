import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <div className='min-h-screen'>
         <Outlet />
         </div>
       <Footer/>
    </>
  )
}

export default Layout
