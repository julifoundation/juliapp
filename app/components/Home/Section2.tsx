import React from 'react'
import Link from 'next/link'
const Section2 = () => {
    return (
        <>
            <div className="relative  overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-red-700" />
                <div className="relative bg-red-700" >
                    <div className="relative">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 py-7 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-6xl lg:mx-0 lg:px-0">
                                <div>
                                    <div className="mt-2">
                                        <h2 className="text-3xl main text-white font-extrabold tracking-tight ">
                                            Our Initiatives
                                        </h2>
                                    </div>
                                </div>
                                <div className="mt-4 border-t border-white pt-6">
                                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                                        <div className='py-4'>
                                            <h2 className="text-white">
                                                <p className="relative group">
                                                    <Link href="/initiative/#eman" className='text-xl font-extrabold main'>Educate and emancipate</Link>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                                </p>
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-base leading-7 text-white">
                                                Education is the passport to the future, for tomorrow belongs to those who prepare for it today – Malcom X.
                                            </p>

                                        </div>
                                        <div className='py-4'>

                                            <h2 className="text-white">
                                                <p className="relative group">
                                                    <Link href="/initiative/#win" className='text-xl font-extrabold main'>I-WIN</Link>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                                </p>
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-base leading-7 text-white">
                                                This initiative is focused on providing self-developmental guidance to teens and counseling on various areas of teen development including – emotional development; peer relationship;  etc.
                                            </p>
                                        </div>
                                        <div className='py-4'>
                                            <h2 className="text-white">
                                                <p className="relative group">
                                                    <Link href="/initiative/#lead" className='text-xl font-extrabold main'>Leaders of Today</Link>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                                </p>
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-base leading-7 text-white">
                                                Through this initiative, we provide internship opportunities to teens in organizations across various field based on their preferred career choice as well as build their excitement and interest in these fields.
                                            </p>
                                        </div>

                                        <div className='py-4'>
                                            <h2 className="text-white">
                                                <p className="relative group">
                                                    <Link href="/initiative/#mentor" className='text-xl font-extrabold main'>Mentor Connect</Link>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                                </p>
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-base leading-7 text-white">
                                                Through this initiative, the foundation provides mentoring opportunities across various fields for teens, bringing key professionals in their field to provide career trainings and brainstorming sessions with these teens.
                                            </p>
                                        </div>

                                        <div className='py-4'>

                                            <h2 className="text-white">
                                                <p className="relative group">
                                                    <Link href="/initiative/#digi" className='text-xl font-extrabold main hover:font-light'>Digi-teen-ization</Link>
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                                </p>
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-base leading-7 text-white">
                                                This initiative is aimed at providing computer and digital knowledge, and access to educational resources on the internet for dis-advantaged teens who otherwise will be unable to gain such skills and knowledge.
                                            </p>
                                        </div>

                                    </div>
                                    <div className="mt-6">
                                        <Link href='/about'>
                                            <div
                                                className="flex items-center absolute pr-2 pb-1  rounded-none bg-red-500 outline-none"
                                            >
                                                <div
                                                    className="inline-flex main items-center px-8 py-2  -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                >
                                                    Learn more
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="lg:pl-4 lg:-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                        className=" shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://ik.imagekit.io/kowe/JuliFoundation/Frame%2024.png?updatedAt=1704539717421"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section2