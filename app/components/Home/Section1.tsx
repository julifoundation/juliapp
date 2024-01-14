import React from 'react'
import Link from 'next/link'
const Section1 = () => {
    return (
        <>
            <div className="relative pt-16 pb-32 overflow-hidden">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                <div className="relative">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div className="py-12">
                                    <h2 className="text-3xl font-extrabold main tracking-tight text-gray-900">
                                        Who we are
                                    </h2>
                                    <p className="mt-4 text-base text-gray-900">
                                        The Juli Education Foundation is a charitable non-government organization (NGO). The Foundation aims, amongst others, to provide mentorship and career training to indigent children across the Country, eradicate illiteracy and empower teenage children to be computer literate.<br /><br />
                                        The Foundation is determined to consistently sponsor indigent children across Africa to access quality education and further aims to empower Ten Thousand (10,000) indigent children to be computer literate.
                                    </p>
                                    <div className="mt-6">
                                        <Link href='/about'>
                                            <div
                                                className="flex items-center absolute pr-2 pb-1  rounded-none bg-red-500 outline-none"
                                            >
                                                <div
                                                    className="inline-flex items-center px-8 py-2 main -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                >
                                                    Learn more
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-16 mx-5 lg:mt-0">
                            <div className=" lg:px-0 lg:m-0 lg:relative lg:h-full">
                                <img
                                    className="w-full rounded-md object-cover shadow-xl lg:h-full"
                                    src="https://ik.imagekit.io/kowe/JuliFoundation/Group%202.png?updatedAt=1704539237609"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section1