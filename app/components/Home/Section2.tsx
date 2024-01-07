import React from 'react'
import Link from 'next/link'
const Section2 = () => {
    return (
        <>
            <div className="relative py-16 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-red-600" />
                <div className="relative bg-red-600" >
                    <div className="relative">
                        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div className="mt-2">
                                        <h2 className="text-3xl text-white font-extrabold tracking-tight ">
                                            Our Initiatives
                                        </h2>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white pt-6">
                                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                                        <div>
                                            <h2 className="text-xl font-extrabold text-white">
                                                EDUCATE AND EMANCIPATE
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-sm leading-7 text-white">
                                                Education is the passport to the future, for tomorrow belongs to those who prepare for it today – Malcom X.
                                            </p>

                                        </div>
                                        <div>
                                            <h2 className="text-xl font-extrabold text-white">
                                                I-WIN
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-sm leading-7 text-white">
                                                This initiative is focused on providing self-developmental guidance to teens and counseling on various areas of teen development including – emotional development; peer relationship;  etc.
                                            </p>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-extrabold text-white">
                                                Leaders of Today
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-sm leading-7 text-white">
                                                Through this initiative, we provide internship opportunities to teens in organizations across various field based on their preferred career choice as well as build their excitement and interest in these fields.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-extrabold text-white">
                                                Mentor Connect
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-sm leading-7 text-white">
                                                Through this initiative, the foundation provides mentoring opportunities across various fields for teens, bringing key professionals in their field to provide career trainings and brainstorming sessions with these teens.
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-extrabold text-white">
                                                Digi-teen-ization
                                            </h2>
                                            <p className="mt-1 max-w-3xl text-sm leading-7 text-white">
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
                                                    className="inline-flex items-center px-8 py-2  -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                >
                                                    Learn more
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://ik.imagekit.io/kowe/JuliFoundation/Frame%2024.png?updatedAt=1704539717421"
                                        alt="Inbox user interface"
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