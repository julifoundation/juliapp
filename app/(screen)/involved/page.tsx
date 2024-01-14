import Footer from '@/app/components/Home/Footer'
import Nav from '@/app/components/Home/Nav'
import CompDonate from '@/app/components/Misellaneous/CompDonate'
import React from 'react'


const people = [
    {
        name: '1',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/IMG_9679.png?updatedAt=1704552506115',

    },
    {
        name: '2',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/IMG_9682.png?updatedAt=1704552475378'
    },
    {
        name: '3',
        imageUrl:
            'https://ik.imagekit.io/kowe/JuliFoundation/IMG_9689.png?updatedAt=1704552462990',

    },

    // More people...
]

const page = () => {
    return (
        <div>
            <Nav />
            <div className="py-10 bg-white sm:py-12">
                <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-xl font-bold tracking-tight main text-red-600 uppercase text-center ">
                        Change a Life
                    </h1>
                    <p className="mt-1 font-bold max-w-3xl mx-auto text-4xl leading-normal text-[#001538] main text-center">
                        Get Involved
                    </p>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 ">
                    <div className="space-y-4">
                        <ul
                            role="list"
                            className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img className="object-cover shadow-lg rounded-none" src={person.imageUrl} alt="" />
                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-4 px-4 max-w-7xl sm:px-6 lg:px-8 ">
                <p className='py-2 text-[#001538]'>
                    As an individual, association, society, corporate organization, company or any other type of institution, you can make a huge impact in the life of a teen providing opportunities that would otherwise not be available for them especially the dis-advantaged. Through short-term donations, long term commitments, corporate social responsibility, and project sponsorship, you can work with the foundation in achieving its vision and empowering Nigeria’s most valuable resource critical to its development. You also get the opportunity to see the impact of your contributions on the lives of these teens, and can participate in any of our projects. Your contribution can change a destiny.
                </p>

                <h3 className='font-bold text-base text-[#001538] main'>You can provide support through:</h3>
                <ul className=' list-disc py-2 pl-6 text-[#001538]'>
                    <li>
                        One-off Donations to our various initiatives and projects. Kindly donate to the foundation through the donate button or the account information below and notify us via email or phone call so we can reach out to you
                    </li>
                    <li>
                        Long-Term Commitments. While we fully appreciate donations, long-term commitments go a long way in ensuring the sustainability of our initiatives and continued impact on teens. You can make regular contributions (weekly, monthly, and otherwise) to the foundation. Send us an email or give us a call to know how.
                    </li>
                    <li>
                        Corporate Social Responsibility. Your organization can boost its social impact by not just giving handouts, but investing in our impactful initiatives and empowering the nation’s human resource. To find out how you can partner with us, send us an email or give us a call.
                    </li>
                </ul>
                <h3 className='font-bold text-base  py-2 text-[#001538] main'>Project Sponsorship: </h3>
                <p className='py-2'>If you would rather choose to make the most impact by fully or partly funding any of our projects, kindly reach out to us and find out how your generosity can change the lives of teens across the country.</p>
                <p className='py-2'>
                    As part of our commitment to the foundation and ensuring all funds are fully deployed to our cause, no member of the team collects any salaries. Rather we contribute part of our personal resources towards the upkeep of the foundation.
                </p>

            </div>


            <CompDonate />

            <div className="pt-10 bg-red-700 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                <div className="mx-auto max-w-7xl  lg:px-8">
                    <div className="p-12  flex justify-center items-center text-center  bg-red-100">
                        <div className="">
                            <h3 className="text-base font-semibold text-[#001538] main tracking-wider uppercase">
                                Or.
                            </h3>
                            <p className="mt-4 font-bold text-lg text-[#001538]">
                                Sign up as our Volunteer
                            </p>
                            <form className="mt-4 sm:flex sm:max-w-md w-full">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    required
                                    className="appearance-none min-w-0 w-full bg-white  outline-none rounded-none shadow-sm py-2 px-4 text-base text-gray-900"
                                    placeholder="Enter your email"
                                />
                                <div className="mt-3  justify-end rounded-none sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 flex items-center justify-center border border-transparent rounded-none py-2 px-4 text-base font-medium text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default page