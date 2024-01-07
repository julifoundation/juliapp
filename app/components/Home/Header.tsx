'use client';
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
const Header = () => {
    return (
        <>
            <div className='relative'>
                <div className='relative'>
                    <img
                        className="w-full h-5/6"
                        src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9150.png?updatedAt=1704537941691"
                        alt="juliFoundation Logo"
                    />
                </div>
                <div className="pt-10 absolute top-44 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24 max-w-7xl">
                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">We reach, teach and ignite.</span>

                                    </h1>
                                    <p className="text-base py-4 text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                        Advancing Nigerian teens in becoming catalysts for the country’s development.
                                    </p>
                                    <div className="">
                                        <div className="">
                                            <div className="py-4 sm:flex sm:items-center">

                                                {/* Profile dropdown */}
                                                <Menu as="div" className="ml-3 relative">
                                                    <div>
                                                        <Menu.Button className="bg-white flex text-sm:outline-none cursor-pointer ">
                                                            <Link href='/donate'>
                                                                <div
                                                                    className="block items-center pr-1 pb-1  rounded-none bg-red-500 outline-none"
                                                                >
                                                                    <div
                                                                        className="inline-flex items-center px-8 py-2  -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                                    >
                                                                        Donate now
                                                                    </div>
                                                                </div>
                                                            </Link>


                                                        </Menu.Button>
                                                    </div>

                                                </Menu>
                                                <Link
                                                    href="/"
                                                    className="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-md "
                                                >
                                                    Volunteer
                                                </Link>
                                            </div>
                                        </div>
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

export default Header