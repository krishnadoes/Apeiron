import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './components/Landing.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Selectedworks from './components/Selectedworks.jsx'
import TransitionShowcase from './components/TransitionShowcase.jsx'
import CollectionsDivider from './components/CollectionsDivider.jsx'
import Howwework from './components/howwework.jsx'
import Faq from './components/Faq.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    element:<><Navbar/><Landing/><WhyChooseUs/><Selectedworks/><Faq/><Footer/></>
  },
  // {
  //   path:"/About",
  //   element:<><Navbar/><About/><Footer/></>
  // },
  {
    path:"/Contact",
    element:<><Navbar/><Contact/></>
  },
 
  {
    path:"/Howwework",
    element:<><Navbar/><Howwework/><Footer/></>
  },
   {
      path: "/services",          // ✅ SERVICES ROUTE ADDED
      element: (
        <>
          <Navbar />
          <Services />
          <Footer />
        </>
      )
    },
  
  ])
  
    return (
      <div className="App">
        <RouterProvider router={router}/>
  </div>
    );
  }
  
  export default App;