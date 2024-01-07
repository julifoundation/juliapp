import React from 'react'
import Link from 'next/link'
const Section3 = () => {
    return (
        <>
            <div className="bg-red-50">
                <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6  lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                        <span className="block">The numbers do not lie. </span>
                        <p>
                            <span className="-mb-1 pb-1 text-sm font-normal block text-black ">
                                Be a part of our project by donating today.
                            </span>
                        </p>
                    </div>

                    <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
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
                    </div>
                </div>
            </div>

            <div className="my-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">

                    <div className=" -ml-6 -mt-3">
                        <img
                            className="w-7 h-7"
                            src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                            alt="juliFoundation"
                        />
                    </div>

                    <h2 className="text-4xl py-3 font-extrabold tracking-tight text-gray-900">
                        Our Goal
                    </h2>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 ">
                        <div>
                            <p className="mt-1 py-4 max-w-3xl text-sm leading-7 text-gray-900">
                                With a failing education system, booming youth population, rising rate of unemployment and underemployment, global rate of technological advancement, and critical need for the country to empower its youth population, the foundation’s goal is to empower teens, especially dis-advantaged teens, with skills and resources that can shape them positively, develop and equip to become valuable resources to society and the country’s development.
                            </p>
                            <div>
                                <ul
                                    role="list"
                                    className="space-y-2 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 sm:space-y-0 lg:gap-x-8"
                                >
                                    <li>
                                        <div className="space-y-2">
                                            <div className="">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold  text-red-700 bg-transparent"
                                                >
                                                    Access to Quality Education
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-2">
                                            <div className="aspect-w-3 aspect-h-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold text-red-700 bg-transparent"
                                                >
                                                    Personal development
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-2">
                                            <div className="">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold  text-red-700 bg-transparent"
                                                >
                                                    Internship opportunities
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-2">
                                            <div className="aspect-w-3 aspect-h-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold text-red-700 bg-transparent"
                                                >
                                                    S.T.E.M
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="space-y-2">
                                            <div className="aspect-w-3 aspect-h-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold text-red-700 bg-transparent"
                                                >
                                                    Sustainable Development Goals
                                                </button>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                            <div className="col-span-1 flex justify-center">
                                <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/Frame%2039.png?updatedAt=1704580799611" alt="julifoundation" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section3