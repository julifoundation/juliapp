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
            linkedIn: 'https://www.linkedin.com/in/joy-ogiator/',
            bio: 'Joy is the founder and Executive Director of the foundation and extremely passionate about teen empowerment. She strongly believes that the key to a better future for Nigeria lies with equipping its teens early with skills and resources to enable them take advantage of the opportunities and resources available in developing themselves, their ideas, future and contributing meaningfully to society. A graduate of Economics from Veritas University, Joy self-funded various teen empowerment programs prior to the establishment of the foundation and is committed to providing the spark required to ignite the Nigerian teen of today and the future.'
        },
        {
            name: 'Matthew Obono',
            role: 'Product Manager',
            imageUrl: 'https://ik.imagekit.io/kowe/JuliFoundation/image%202.png?updatedAt=1704575224075',
            linkedIn: 'https://www.linkedin.com/in/matthew-obono-a05170102/',
            bio: 'Mathew first obtained a Diploma in Theatre Arts and later a Bachelor of Arts Degree in Theatre Arts in 2000 at the University of Calabar, Cross River State. He is a business man, a politician, an actor, a singer, a creative director, and an events planner. Matthew’s passionate devotion to human development is when he worked as the Director of Schools Rochas Foundation Colleges, Director Rochas Foundation Volunteer Corps, and Staff Adviser, Rochas Foundation Old Student’s Association. He has travelled over 30 African countries providing humanitarian services to less privileged children Across Africa.'

        },
        {
            name: 'Ihewunwa Amarachi',
            role: 'Secretary',
            imageUrl: 'https://ik.imagekit.io/kowe/JuliFoundation/WhatsApp%20Image%202023-12-27%20at%2011.00%201.png?updatedAt=1704575212730',
            linkedIn: 'https://www.linkedin.com/in/aihewunwa/',
            bio: 'Amarachi is a young hardworking lady, passionate about helping the less privileged. She was born on the 26th of July and graduated from the University of Portharcourt where she majored in Pure and Industrial Chemistry. Her hobbies are reading, traveling and helping the underprivileged, which made her part of the trustees of the foundation. She believes strongly that every child should have the right to be educated no matter their background and hopes to reduce illiteracy among children to the barest minimum through the foundation.'

        },
    ],
    social: [
        // {
        //     name: 'Facebook',
        //     href: '#',
        //     icon: (props: any) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
        // {
        //     name: 'Instagram',
        //     href: '#',
        //     icon: (props: any) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
        {
            name: 'Twitter',
            href: '#',
            icon: (props: any) => (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"  {...props}>
                    <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                    />
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
                    <h2 className="text-4xl py-3 font-extrabold main tracking-tight ">
                        Who we are
                    </h2>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                        <div>
                            <p className="mt-1 max-w-3xl text-base leading-7 text-[#001538]">
                                The Juli Education Foundation is a non-governmental organization focused on empowering the Nigerian teen with skills and resources required to develop and compete favourably in our evolving society, and technology driven global community. With a failing education system, booming youth population, rising rate of unemployment and underemployment, global rate of technological advancement, and critical need for the country to empower its youth population, the foundation’s goal is to empower teens, especially dis-advantaged teens, with skills and resources that can shape them positively, develop and equip to become valuable resources to society and the country’s development.
                            </p>
                        </div>
                        <div>

                            <p className="mt-1 max-w-3xl text-base leading-7 text-[#001538]">
                                Miss Ogiator recognized the current and potential consequences this poses for the country in being unable to fully harness the resourcefulness of its teens and youth in general, and the fact that early investment is key in developing this huge wealth of resource and putting them on the right path. With personal funds and generous contributions from friends and family, she undertook various teen empowerment projects eventually leading up to the establishment of the foundation together with other passionate youth like herself.
                            </p>

                            <p className="mt-2 max-w-3xl text-base leading-7 text-[#001538]">
                                Registered in Nigeria with RC NO: 116954, the foundation operates out of its central office in Abuja, the Federal Capital, and works through local partners across the country.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="my-12">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="mt-2 grid grid-cols-1 gap-0.5 ">
                        <div className="col-span-1 flex justify-center">
                            <img className="w-full h-full object-contain" src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9148.png?updatedAt=1704571571683" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-12 bg-red-700 sm:py-16 lg:py-12  lg:overflow-hidden">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative bg-white">
                        <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://ik.imagekit.io/kowe/JuliFoundation/IMG_9146.png?updatedAt=1704572317506"
                                alt="juliFoundation"
                            />

                        </div>
                        <div className="relative mx-auto max-w-md px-4 py-12  sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                            <div className="md:ml-auto md:w-1/2 md:pl-10">
                                <p className="text-base font-medium uppercase tracking-wider text-gray-500">
                                    MISSION STATEMENT
                                </p>
                                <h2 className="mt-2 py-2 text-[#001538]  main text-2xl font-extrabold tracking-tight ">
                                    Activating Nigerian teens in becoming catalysts for the country’s development.
                                </h2>

                                <p className="text-base font-medium uppercase tracking-wider text-gray-500">
                                    VISION STATEMENT
                                </p>
                                <h2 className="mt-2 py-2 text-[#001538] main text-2xl font-extrabold tracking-tight ">
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
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Access to Quality Education</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Mentorship and Career Coaching</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Personal Development</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Internship Opportunities</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Digital Skills Proficiency</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Science. Technology. Engineering. Mathematics (S.T.E.M)</span>
                                        </dd>
                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Citizenship, Societal Values and Rights</span>
                                        </dd>

                                        <dd className="flex text-base">
                                            <img
                                                className="w-7 h-7"
                                                src="https://ik.imagekit.io/kowe/JuliFoundation/60.png?updatedAt=1704550656650"
                                                alt="juliFoundation"
                                            />
                                            <span className="ml-3 text-[#001538] main text-2xl font-bold">Sustainable Development Goals – The Role of Teens</span>
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
                            <h2 className="text-3xl font-extrabold  text-[#001538] main tracking-tight sm:text-4xl">Meet the team</h2>
                        </div>
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                        >
                            {people.each.map((person) => (
                                <>
                                    <div className="relative w-96 h-96  text-white overflow-hidden cursor-pointer transition-all duration-700 card shadow-lg rounded-sm">
                                        <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:opacity-0">
                                            <li key={person.name}>
                                                <div className="space-y-4">
                                                    <div className="aspect-w-3 aspect-h-2">
                                                        <img className="object-cover shadow-lg rounded-none h-full w-full" src={person.imageUrl} alt="" />
                                                    </div>

                                                    <div className="space-y-1 flex justify-between items-center p-2 shadow-md">
                                                        <div className="text-lg  font-medium space-y-1">
                                                            <h3 className='font-bold text-[#001538] main'>{person.name}</h3>
                                                            <p className="text-[#001538]">{person.role}</p>
                                                        </div>
                                                        <div>
                                                            <div className="flex flex-row  space-x-5">
                                                                {people.social.map((item) => (
                                                                    <a key={item.name} href={item.href} className="text-[#001538] hover:text-red-500">
                                                                        <span className="sr-only">{item.name}</span>
                                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                        <div className="absolute inset-0 w-full h-full flex justify-start items-start transition-all z-10 card-back">
                                            <li key={person.name}>
                                                <div className="">
                                                    <div className="px-3 py-4">
                                                        <p className='text-[#001538] text-base'>
                                                            {person.bio}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="space-y-1 flex justify-between items-center p-2 shadow-md crax">
                                                    <div className="text-lg  font-medium space-y-1">
                                                        <h3 className='font-bold text-[#001538] main'>{person.name}</h3>
                                                        <p className="text-[#001538]">{person.role}</p>
                                                    </div>
                                                    <div>
                                                        <div className="flex flex-row  space-x-5">
                                                            {people.social.map((item) => (
                                                                <a key={item.name} href={item.href} className="text-[#001538] hover:text-red-500">
                                                                    <span className="sr-only">{item.name}</span>
                                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
                    <div className="space-y-12">
                        <div className="space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold main tracking-tight sm:text-4xl">Our partners</h2>
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