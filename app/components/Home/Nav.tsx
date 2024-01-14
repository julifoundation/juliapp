'use client';
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Image from 'next/image';
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between ">
                            <div className="flex h-16">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <Image
                                            className=""
                                            src="https://ik.imagekit.io/kowe/JuliFoundation/Logo-3%201.png?updatedAt=1704529461080"
                                            alt="juliFoundation Logo"
                                            width={80}
                                            height={80}
                                            priority
                                        />
                                    </Link>
                                </div>

                            </div>
                            <div className="hidden sm:ml-6 lg:flex lg:space-x-8 items-center">
                                <Link
                                    href="about"
                                    className="border-transparent hover:main hover:border-red-500 hover:text-red-500 text-gray-900   hover:text-md  inline-flex items-center px-1  border-b-2 text-sm hover:font-medium"
                                >
                                    Who we are
                                </Link>
                                <Link
                                    href="initiative"
                                    className="border-transparent hover:main hover:border-red-500 hover:text-red-500 text-gray-900  hover:text-md  inline-flex items-center px-1 pt-1 border-b-2 text-sm hover:font-medium"
                                >
                                    Initiative
                                </Link>
                                <Link
                                    href="involved"
                                    className="border-transparent hover:main hover:border-red-500 hover:text-red-500 text-gray-900  inline-flex items-center px-1 pt-1 border-b-2 text-sm hover:font-medium"
                                >
                                    Get Involved
                                </Link>
                                <Link
                                    href="contact"
                                    className="border-transparent hover:main hover:border-red-500 hover:text-red-500  inline-flex items-center px-1 pt-1 border-b-2 text-sm hover:font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                <Link
                                    href="/"
                                    className="border-transparent main text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md "
                                >
                                    Volunteer
                                </Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-white flex text-sm:outline-none cursor-pointer ">
                                            <Link href='/donate'>
                                                <div
                                                    className="block items-center pr-1 pb-1 rounded-none bg-red-500 outline-none"
                                                >
                                                    <div
                                                        className="inline-flex items-center main px-8 py-2  -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                    >
                                                        Donate now
                                                    </div>
                                                </div>
                                            </Link>


                                        </Menu.Button>
                                    </div>
                                    {/* <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition> */}
                                </Menu>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2  text-gray-900 hover:text-gray-900 outline-none ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden h-screen ">
                        <div className="pt-2 pb-3 space-y-1 flex flex-col justify-evenly items-center h-full ">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="/about"
                                className="border-transparent hover:main py-4 hover:text-red-500 block pl-3 pr-4 pb-1 mb-2 hover:border-red-500 border-b-2  text-base font-medium"
                            >
                                Who we are
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/initiative"
                                className=" border-transparent hover:main hover:text-red-500 block pl-3 pr-4 pb-1 mb-2 text-base hover:border-red-500 border-b-2  font-medium"
                            >
                                Initiative
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/involved"
                                className="border-transparent hover:main hover:text-red-500  block pl-3 pr-4 pb-1 mb-2 hover:border-red-500 border-b-2  text-base font-medium"
                            >
                                Get Involved
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="/contact"
                                className="border-transparent hover:main hover:text-red-500  block pl-3 pr-4 pb-1 mb-2  hover:border-red-500 border-b-2  text-base font-medium"
                            >
                                Contact
                            </Disclosure.Button>


                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex flex-row justify-center items-center px-4">

                                    <div className="flex ">
                                        <Link
                                            href="/"
                                            className="border-transparent text-gray-900 main hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md "
                                        >
                                            Volunteer
                                        </Link>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="bg-white flex text-sm:outline-none cursor-pointer ">
                                                    <Link href='/donate'>
                                                        <div
                                                            className="block items-center pr-1 pb-1 rounded-none bg-red-500 outline-none"
                                                        >
                                                            <div
                                                                className="inline-flex items-center px-8 py-2 main -ml-1 -mt-1 border border-gray-300  text-base font-semibold rounded-none text-gray-700 bg-white hover:bg-gray-50 outline-none"
                                                            >
                                                                Donate now
                                                            </div>
                                                        </div>
                                                    </Link>


                                                </Menu.Button>
                                            </div>
                                            {/* <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition> */}
                                        </Menu>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav