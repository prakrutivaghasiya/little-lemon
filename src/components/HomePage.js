import React from 'react'
import Navbar from './Navbar'
import Specials from './Specials'
import Testimonials from './Testimonials'
import BookingPage from './BookingPage'
import About from './About'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <h1>HomePage</h1>
        <h2>Hero Section goes here...</h2>
        <Specials />
        <Testimonials />
        <BookingPage />
        <About />
        <Footer />
    </div>
  )
}

export default HomePage