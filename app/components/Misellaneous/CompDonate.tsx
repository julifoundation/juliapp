import React from 'react'

const notificationMethods = [
    { id: 'one', title: 'One-time' },
    { id: 'month', title: 'Monthly' },
]
const CompDonate = () => {
    return (
        <>
            <div className='relative'>
                <div className='relative'>
                    <img
                        className="w-full h-5/6 relative"
                        src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9669.png?updatedAt=1704554099758"
                        alt="juliFoundation Logo"
                    />
                </div>
                <div className="pt-10 absolute top-2 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">

                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                <div className="lg:py-24">


                                    {/* <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">A better way to</span>
                                        <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                                            ship web apps
                                        </span>
                                    </h1>
                                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit
                                        sunt amet fugiat veniam occaecat fugiat.
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                            <div className="sm:flex">
                                                <div className="min-w-0 flex-1">
                                                    <label htmlFor="email" className="sr-only">
                                                        Email address
                                                    </label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                    />
                                                </div>
                                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                                    <button
                                                        type="submit"
                                                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                    >
                                                        Start free trial
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                                Start your free 14-day trial, no credit card necessary. By providing your email, you agree to
                                                our{' '}
                                                <a href="#" className="font-medium text-white">
                                                    terms of service
                                                </a>
                                                .
                                            </p>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                            <div className="mt-24">
                                <div className="">
                                    <div className="mx-auto max-w-9xl w-full ">
                                        <div className="p-12 bg-[#FFF9F9] ">
                                            <div className="">
                                                <h3 className="text-2xl main font-semibold text-red-500 tracking-wider uppercase">
                                                    Donate Now
                                                </h3>
                                                <p className="mt-4  text-base text-[#001538] ">
                                                    Empower teens futures: Your donation transforms lives, fostering opportunities for disadvantaged youth. Join us in shaping a brighter future for Nigeria valuable resource - its teens.
                                                </p>
                                                <p className="mt-4 text-base text-[#001538]">
                                                    Imagine the impact you would make by donating—<span className='font-bold text-lg main text-[#001538]'>Are you in?</span>
                                                </p>
                                                <div>
                                                    <dl>
                                                        <dd className="flex text-base py-2 ">
                                                            <img
                                                                className="w-7 h-7"
                                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                                alt="juliFoundation"
                                                            />
                                                            <span className="ml-3 text-black ">Your contribution </span>
                                                        </dd>
                                                    </dl>
                                                    <div>
                                                        <div className="space-y-4 p-2 ">
                                                            <ul
                                                                role="list"
                                                                className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                                                            >
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-base font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦2000
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-base font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦5000
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-base font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦10000
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-base font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦20000
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-base font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦50000
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-red-700 text-xs font-bold rounded- text-red-700 bg-transparent"
                                                                            >
                                                                                ₦ Enter any Amount
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                            </ul>
                                                            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                                                {notificationMethods.map((notificationMethod) => (
                                                                    <div key={notificationMethod.id} className="flex items-center">
                                                                        <input
                                                                            id={notificationMethod.id}
                                                                            name="notification-method"
                                                                            type="radio"
                                                                            defaultChecked={notificationMethod.id === 'one'}
                                                                            className=" h-4 w-4 text-black border-gray-300"
                                                                        />
                                                                        <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-900">
                                                                            {notificationMethod.title}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <dl>
                                                        <dd className="flex text-base py-2 ">
                                                            <img
                                                                className="w-7 h-7"
                                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                                alt="juliFoundation"
                                                            />
                                                            <span className="ml-3 text-black">Payment Method</span>
                                                        </dd>
                                                    </dl>
                                                    <div>
                                                        <div className="space-y-4 p-2 ">
                                                            <ul
                                                                role="list"
                                                                className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                                                            >
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-black text-sm font-bold text-[#001538] main bg-transparent"
                                                                            >
                                                                                Pay with Paystack
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-black text-sm font-bold text-[#001538] main bg-transparent"
                                                                            >
                                                                                Pay with Transfer
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                                <li>
                                                                    <div className="space-y-4">
                                                                        <div className="aspect-w-3 aspect-h-2">
                                                                            <button
                                                                                type="button"
                                                                                className="inline-flex items-center px-8 py-2 border-2 border-black text-sm font-bold  text-[#001538] main bg-transparent"
                                                                            >
                                                                                Pay with Card
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>



                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
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

export default CompDonate