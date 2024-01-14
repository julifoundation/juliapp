import React from 'react'
import Link from 'next/link'

const Section5 = () => {
    return (
        <>
            <div className="bg-red-700 my-5">
                <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-4xl py-3 font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block main">Make a meaningful impact today <br /> by changing a child’s life.</span>
                        </h2>
                        <Link href='/donate'>
                            <div
                                className="block items-center pr-1 pb-1 absolute rounded-none bg-red-500 outline-none"
                            >
                                <div
                                    className="inline-flex items-center px-8 py-2 main -ml-1  border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                >
                                    Donate now
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-12 pl-4 pr-52  py-4 bg-red-100">
                        <div className="mt-8 xl:mt-0">
                            <h3 className="text-sm font-semibold main text-[#001538] tracking-wider uppercase">
                                Or.
                            </h3>
                            <p className="mt-4 text-base text-[#001538]">
                                Sign up as our Volunteer
                            </p>
                            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                                <div>
                                    <div className="mt-1 flex rounded-none border border-black w-full ">
                                        <div className="relative flex ">

                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                aria-placeholder='Email Address'
                                                className=" block w-full  rounded-none text-black  py-4 px-3 sm:text-sm border-gray-300 outline-none"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="-ml-px relative inline-flex items-center border border-black  space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600"
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5