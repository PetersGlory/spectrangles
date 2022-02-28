import React from 'react'
import { Navbar } from '../../Components/Navbar'
import { Hero } from '../../Components/Hero'
import { Whatwedo } from '../../Components/Home/Whatwedo'
import { SectionTwo } from '../../Components/Home/SectionTwo'
import { Testimonial } from '../../Components/Home/Testimonial'
import { SectionThree } from '../../Components/Home/SectionThree'
import { Cta } from '../../Components/Home/Cta'
import { Footer } from '../../Components/Home/Footer'

export const Index = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Whatwedo />
        <SectionTwo />
        <Testimonial />
        <SectionThree />
        <Cta />
        <Footer />
    </div>
  )
}
