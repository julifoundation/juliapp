import React from 'react'

const Numbers = () => {
    return (
        <>
            <div className="my-20">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-4xl py-3 font-extrabold tracking-tight text-gray-900">
                        Our Numbers
                    </h2>
                    <div className="lg:grid lg:grid-cols-5 lg:gap-4 lg:items-center">
                        <div className='flex flex-col py-3 justify-center items-center'>
                            <h1 className="mt-4  text-9xl tracking-tight font-extrabold text-red-600 sm:mt-5 ">
                                <span className="block">25</span>
                            </h1>
                            <p className='text-lg '>
                                schools reached
                            </p>
                        </div>

                        <div className='flex flex-col  py-3 justify-center items-center'>
                            <img
                                className="w-7 h-7"
                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                alt="juliFoundation"
                            />
                        </div>

                        <div className='flex  py-3 flex-col justify-center items-center'>
                            <h1 className="mt-4 text-9xl tracking-tight font-extrabold text-blue-900  sm:mt-5 ">
                                <span className="block">1200</span>
                            </h1>
                            <p className='text-lg '>
                                beneficiaries
                            </p>
                        </div>
                        <div className='flex flex-col py-3 justify-center items-center'>
                            <img
                                className="w-7 h-7"
                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                alt="juliFoundation"
                            />
                        </div>
                        <div className='flex flex-col py-3 justify-center items-center'>
                            <h1 className="mt-4 text-9xl tracking-tight font-extrabold text-red-600 sm:mt-5 ">
                                <span className="block">28</span>
                            </h1>
                            <p className='text-lg '>
                                Projects
                            </p>
                        </div>
                        <div className='flex flex-col  py-3 justify-center items-center'>
                            <h1 className="mt-4 text-9xl tracking-tight font-extrabold text-blue-900 sm:mt-5">
                                <span className="block">300</span>
                            </h1>
                            <p className='text-lg '>
                                scholarships awarded
                            </p>
                        </div>
                        <div className='flex flex-col py-3 justify-center items-center'>
                            <img
                                className="w-7 h-7"
                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                alt="juliFoundation"
                            />
                        </div>

                        <div className='flex flex-col py-3 justify-center items-center'>
                            <h1 className="mt-4 text-9xl tracking-tight font-extrabold text-red-600 sm:mt-5">
                                <span className="block">4</span>
                            </h1>
                            <p className='text-lg '>
                                countries reached
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numbers