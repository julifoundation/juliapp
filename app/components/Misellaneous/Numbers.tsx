import React from 'react'

const Numbers = () => {
    return (
        <>
            <div className="mt-10 mb-20">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-4xl py-3 text-center lg:text-start main font-extrabold tracking-tight text-[#001538] my-7 border-b border-gray-100  ">
                        Our numbers
                    </h2>
                    <div className="bg-[#FFF9F9] p-16 rounded-md ">
                        <div className="lg:grid lg:grid-cols-5 lg:gap-4 lg:items-center">
                            <div className='flex flex-col py-3 justify-center items-center  lg:justify-start lg:items-start '>
                                <h1 className="mt-4  text-8xl  font-extrabold text-red-600 sm:mt-5 ">
                                    <span className="block main">25</span>
                                </h1>
                                <p className='text-lg '>
                                    schools reached
                                </p>
                            </div>

                            <div className='flex flex-col py-3 justify-center items-center'>
                                <img
                                    className="w-10 h-10"
                                    src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                    alt="juliFoundation"
                                />
                            </div>

                            <div className='flex flex-col justify-center items-center  lg:justify-start lg:items-start'>
                                <h1 className="mt-4 text-8xl font-extrabold main sm:mt-5 text-[#001538]  ">
                                    <span className="block main">1200</span>
                                </h1>
                                <p className='text-lg '>
                                    beneficiaries
                                </p>
                            </div>
                            <div className='flex flex-col py-3 justify-center items-center'>
                                <img
                                    className="w-10 h-10"
                                    src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                    alt="juliFoundation"
                                />
                            </div>
                            <div className='flex flex-col py-3 justify-center items-center  lg:justify-start lg:items-start'>
                                <h1 className="mt-4 text-8xl tracking-tight font-extrabold text-red-600 sm:mt-5 ">
                                    <span className="block main">28</span>
                                </h1>
                                <p className='text-lg '>
                                    Projects
                                </p>
                            </div>
                            <div className='flex flex-col  py-3 justify-center items-center  lg:justify-start lg:items-start'>
                                <h1 className="mt-4 text-8xl tracking-tight font-extrabold text-[#001538] sm:mt-5">
                                    <span className="block main">300</span>
                                </h1>
                                <p className='text-lg '>
                                    scholarships awarded
                                </p>
                            </div>
                            <div className='flex flex-col py-3 justify-center items-center'>
                                <img
                                    className="w-10 h-10"
                                    src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                    alt="juliFoundation"
                                />
                            </div>

                            <div className='flex flex-col py-3 justify-center items-center  lg:justify-start lg:items-start'>
                                <h1 className="mt-4 text-8xl tracking-tight font-extrabold text-red-600 sm:mt-5">
                                    <span className="block main">4</span>
                                </h1>
                                <p className='text-lg '>
                                    countries reached
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Numbers