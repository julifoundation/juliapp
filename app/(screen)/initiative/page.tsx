import Footer from '@/app/components/Home/Footer'
import Nav from '@/app/components/Home/Nav'
import React from 'react'
import Link from 'next/link'
import Section5 from '@/app/components/Home/Section5'


const page = () => {
    return (
        <>
            <Nav />
            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-4xl py-3 font-extrabold tracking-tight text-gray-900">
                        Our Initiatives
                    </h2>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                EDUCATE AND EMANCIPATE
                            </h2>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                Education is the passport to the future, for tomorrow belongs to those who prepare for it today – Malcom X.
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                Through this initiative, the foundation provides academic financial support to dis-advantaged teenagers especially bright students who due to financial constraints, have to drop out of school. Our goal is to prevent our bright young minds from ending up on the street or engaging in other unproductive activities rather than being educated to contribute meaningfully to the development of the nation.
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                The foundation by working with public secondary schools across the country reaches out to financially constrained students and enrolls them in schools up through scholarships until graduation from the secondary school. Academic performances are regularly evaluated to assess their progress, and additional support also provided through our other initiatives for the self-development of these teens in becoming beneficial to society.
                            </p>
                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9700.png?updatedAt=1704547610168" alt="julifoundation" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9691.png?updatedAt=1704548133700" alt="julifoundation" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                I-WIN
                            </h2>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                The truest success is but the development of self – Charles Atlas.                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                There is a need to develop just not the brain, but the mind and heart of teens. Beyond academic knowledge, other aspects of self-development for teens are usually left to their peers, the internet, environment, and other external sources of influence. Teens without any form of positive guidance become easily influenced by such external factors which easily shape their mindset, perspectives, behavior and consequent actions.
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                This initiative is focused on providing self-developmental guidance to teens and counseling on various areas of teen development including – emotional development; peer relationship; breaking bad habits; reading culture; youth rights; societal values; drug abuse; culture; financial management; sustainable development goals; etc. The aim is to provide exposure and education beyond academics to shape the mind of the teen positively, and guide them appropriately.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">

                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                LEADERS OF TODAY
                            </h2>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                Internships and work experience are a proven method of getting your foot in the door, and launching you career aspiration.
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                Through this initiative, we provide internship opportunities to teens in organizations across various field based on their preferred career choice. The goal is to provide basic introduction to the teen on workplace experience, and build their excitement and interest in these fields. The aim is also to encourage them to research more on these career fields, and understand the evolution of career decisions. We reach out to various organizations to provide basic internship opportunities for these teens and education on their business and non-business areas, and are arranged based on the holiday timeframe of the student while also ensuring they have considerable spare time to enjoy their holidays. They can typically last from one week to one month.
                            </p>

                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9666.png?updatedAt=1704548272240" alt="julifoundation" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9696.png?updatedAt=1704548355480" alt="julifoundation" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                MENTOR CONNECT
                            </h2>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                The delicate balance of mentoring is not creating them in your own image, but giving them the opportunity to create themselves – Steven Spielberg
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                Teens face significant challenges in career development due to a lack of guidance, leading them astray through peer influence, internet content, and societal pressures. The economic climate has shifted parental focus away from mentoring, leaving teens to navigate their futures independently. The Foundation addresses this by offering mentoring across diverse fields, involving professionals who conduct career training, assessments, and one-on-one sessions to guide teens toward informed career choices. In a parallel initiative, internships serve as a crucial gateway to kickstart career aspirations. The program offers teens opportunities aligned with their chosen fields, aiming to provide workplace exposure, foster interest, and encourage further research into their career paths. These internships, ranging from one week to one month, are strategically scheduled during holidays, allowing teens to balance learning and leisure.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                DIGI-TEEN-IZATION
                            </h2>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                The internet is becoming the town square for the global village of tomorrow – Bill Gates.
                            </p>
                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                The internet serves as a vast resource for teens, fostering assimilation of information, global exposure, and the development of digital skills essential in todays tech-driven world. While Nigeria experiences increased mobile phone penetration, granting easier internet access, this advantage is predominantly for urban teens with resource accessibility. Recognizing the growing demand for computer literacy in employment, this initiative targets disadvantaged teens. Operating across three levels, it offers CT001: Basic computer skills for those with no prior knowledge, CT002: Advanced training for those with basic skills, and CT003: Specialized training for teens aspiring for ICT careers, including software development, Oracle and Java Language Development, and other advanced digital skills.
                            </p>

                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9690.png?updatedAt=1704548775247" alt="julifoundation" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Section5 />
            <Footer />
        </>

    )
}

export default page