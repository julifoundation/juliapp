import { ArrowCircleRightIcon, ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
const posts = [
    {
        title: 'Boost your conversion rate',
        href: '',
        category: { name: 'Article', href: '#' },
        description:
            'A visit to SOS Hermann Gmeiner School, Zanzibar,  Tanzania',
        date: 'Mar 16, 2020',
        datetime: 'Jan 18, 2023',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/image%201.png?updatedAt=1704578376775',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '',
        category: { name: 'Video', href: '#' },
        description:
            'At Government Secondary School, Koroduma, Nigeria',
        date: 'Mar 10, 2020',
        datetime: 'Feb 20, 2023',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/image%202%20(1).png?updatedAt=1704577012257',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'Improve your customer experience',
        href: '/',
        category: { name: 'Case Study', href: '#' },
        description:
            'Train a child and support a child for WAEC and Jamb Exams',
        date: 'Feb 12, 2020',
        datetime: 'April 16, 2023',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/image%203%20(1).png?updatedAt=1704577002030',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

const Section4 = () => {
    return (
        <>
            <div className="bg-red-50">
                <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6  lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <div className="text-2xl font-extrabold  main text-[#001538] sm:text-2xl">
                        <span className="block main">Are you an education or digital enthusiast?</span>
                        <p>
                            <span className="-mb-1 pb-1 text-base font-normal block text-black ">
                                Why don’t you sign up as our volunteer, together we will build our Nation.
                            </span>
                        </p>
                    </div>

                    <div className="mt-6  space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                        <div>
                            <div className="mt-1 flex rounded-none  ">
                                <div className="relative flex border border-black">

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        aria-placeholder='Email Address'
                                        className=" block  rounded-none text-black  py-4 px-3 sm:text-sm border-gray-300 outline-none"
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


            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl main tracking-tight font-extrabold text-[#001538] sm:text-4xl">Explore some of our past events</h2>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col p-4 cursor-pointer border-2 border-[#001538] rounded-none overflow-hidden hover:border-l-[#001538] hover:border-b-[#001538] hover:border-t-8  hover:border-r-8 hover:border-red-500  ">
                                <div className="hover:-ml-2 hover:-mb-6">
                                    <div className="flex-shrink-0 ">
                                        <img className="h-52 w-full object-cover" src={post.imageUrl} alt="" />
                                    </div>
                                    <div className="flex-1 bg-white py-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <div className="block mt-2">
                                                <p className="mt-3 text-base text-gray-900">{post.datetime}</p>
                                                <p className="mt-3 text-base text-gray-900">{post.description}</p>
                                            </div>
                                        </div>

                                        <div className='text-red-600 py-2 inline-flex justify-start items-center'>
                                            <p>View Gallery</p>
                                            <ArrowRightIcon className='w-9 inline-flex h-9 px-2' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4