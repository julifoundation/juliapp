import React from 'react'
import Nav from '@/app/components/Home/Nav'
import Footer from '@/app/components/Home/Footer'
import Header from '@/app/components/Home/Header'
import Section1 from '@/app/components/Home/Section1'
import Section2 from '@/app/components/Home/Section2'
import Section3 from '@/app/components/Home/Section3'
import Section4 from '@/app/components/Home/Section4'
import Section5 from '@/app/components/Home/Section5'
import Numbers from '@/app/components/Misellaneous/Numbers'


const page = () => {
    return (
        <>
            <Nav />
            <Header />
            <Section1 />
            <Section2 />
            <Numbers />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    )
}

export default page