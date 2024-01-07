import Footer from '@/app/components/Home/Footer'
import Nav from '@/app/components/Home/Nav'
import Section5 from '@/app/components/Home/Section5'
import React from 'react'


const people = {
    each: [
        {
            name: 'Joy Ogiator',
            role: 'Founder',
            imageUrl: 'https://ik.imagekit.io/kowe/JuliFoundation/WhatsApp%20Image%202023-12-27%20at%2011.00%202.png?updatedAt=1704575235809',
        },
        {
            name: 'Matthew Obono',
            role: 'Product Manager',
            imageUrl: 'https://ik.imagekit.io/kowe/JuliFoundation/image%202.png?updatedAt=1704575224075',
        },
        {
            name: 'Ihewunwa Amarachi',
            role: 'Secretary',
            imageUrl: 'https://ik.imagekit.io/kowe/JuliFoundation/WhatsApp%20Image%202023-12-27%20at%2011.00%201.png?updatedAt=1704575212730',
        },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },

    ],
    // More people...
}

const page = () => {
    return (
        <>
            <Nav />
            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <h2 className="text-4xl py-3 font-extrabold tracking-tight text-gray-900">
                        Who we are
                    </h2>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div>
                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                The Juli Education Foundation is a non-governmental organization focused on empowering the Nigerian teen with skills and resources required to develop and compete favourably in our evolving society, and technology driven global community. With a failing education system, booming youth population, rising rate of unemployment and underemployment, global rate of technological advancement, and critical need for the country to empower its youth population, the foundation’s goal is to empower teens, especially dis-advantaged teens, with skills and resources that can shape them positively, develop and equip to become valuable resources to society and the country’s development.
                            </p>
                        </div>
                        <div>

                            <p className="mt-1 max-w-3xl text-sm leading-7 text-gray-900">
                                Miss Ogiator recognized the current and potential consequences this poses for the country in being unable to fully harness the resourcefulness of its teens and youth in general, and the fact that early investment is key in developing this huge wealth of resource and putting them on the right path. With personal funds and generous contributions from friends and family, she undertook various teen empowerment projects eventually leading up to the establishment of the foundation together with other passionate youth like herself.
                            </p>

                            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-900">
                                Registered in Nigeria with RC NO: 116954, the foundation operates out of its central office in Abuja, the Federal Capital, and works through local partners across the country.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                        <div className="col-span-1 flex justify-center">
                            <img className="w-full h-full" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9148.png?updatedAt=1704571571683" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-12 bg-red-700 sm:py-16 lg:py-12  lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative bg-white">
                        <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <img
                                className="w-full h-full"
                                src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9146.png?updatedAt=1704572317506"
                                alt="juliFoundation"
                            />

                        </div>
                        <div className="relative mx-auto max-w-md px-4 py-12  sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                            <div className="md:ml-auto md:w-1/2 md:pl-10">
                                <p className="text-base font-medium uppercase tracking-wider text-gray-500">
                                    MISSION STATEMENT
                                </p>
                                <h2 className="mt-2 py-2 text-gray-900 text-xl font-extrabold tracking-tight ">
                                    Activating Nigerian teens in becoming catalysts for the country’s development.
                                </h2>

                                <p className="text-base font-medium uppercase tracking-wider text-gray-500">
                                    VISION STATEMENT
                                </p>
                                <h2 className="mt-2 py-2 text-gray-900 text-xl font-extrabold tracking-tight ">
                                    Empowering 10,000 vision-driven teens by 2030 for Nigeria’s development.
                                </h2>

                                <div className="mt-8">
                                    <p className="text-base font-medium uppercase tracking-wider text-gray-500">
                                        FOCUS AREAS
                                    </p>

                                    <dl className="mt-8 space-y-3">
                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Access to Quality Education</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Mentorship and Career Coaching</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Personal Development</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Internship Opportunities</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Digital Skills Proficiency</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Science. Technology. Engineering. Mathematics (S.T.E.M)</span>
                                        </dd>
                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Citizenship, Societal Values and Rights</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-black text-xl font-bold">Sustainable Development Goals – The Role of Teens</span>
                                        </dd>

                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet the team</h2>
                        </div>
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {people.each.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <img className="object-cover shadow-lg rounded-none" src={person.imageUrl} alt="" />
                                        </div>

                                        <div className="space-y-2 flex justify-between items-center p-2  shadow-md">
                                            <div className="text-lg leading-6 font-medium space-y-1">
                                                <h3 className='font-bold'>{person.name}</h3>
                                                <p className="text-blue-900">{person.role}</p>
                                            </div>
                                            <div>
                                                <div className="flex flex-row  space-x-5">
                                                    {people.social.map((item) => (
                                                        <a key={item.name} href={item.href} className="text-blue-900 hover:text-red-500">
                                                            <span className="sr-only">{item.name}</span>
                                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
                    <div className="space-y-12">
                        <div className="space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Partners</h2>
                        </div>
                        <div className="">
                            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://ik.imagekit.io/kowe/JuliFoundation/image%203.png?updatedAt=1704575878768" alt="juliFoundation" />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://ik.imagekit.io/kowe/JuliFoundation/image%203.png?updatedAt=1704575878768" alt="juliFoundation" />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://ik.imagekit.io/kowe/JuliFoundation/image%203.png?updatedAt=1704575878768" alt="juliFoundation" />
                                    </div>
                                    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                        <img className="h-12" src="https://ik.imagekit.io/kowe/JuliFoundation/image%203.png?updatedAt=1704575878768" alt="juliFoundation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Section5 />



            <Footer />
        </>
    )
}

export default page