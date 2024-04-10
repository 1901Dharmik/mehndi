import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Link } from "react-router-dom";
const navigation = {
  pages: [
    { name: "Home", Link: "/" },
    { name: "Gallery", Link: "/gallery" },
    { name: "My Arts", Link: "/My_Arts" },
    { name: "Bridal Mehndi", Link: "/Bridal_Mehndi" },
    { name: "Contact Me", Link: "/contect" },
    { name: "About Me", Link: "/about" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <p class="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
    Available In Ahmedabad 
    </p>
    <div className='z-10 sticky top-0 bg-transparent backdrop-blur-lg bg-opacity-85 bg-white shadow-sm border-b-1 border-gray-200'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden " onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-5 pt-5 ">
                  <button 
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 text-bold text-red-800 " aria-hidden="true" />
                    
                  </button>
                  <div className="ml-8 flex flex-shrink-0 items-center">
                    <Link to="/">
                    <img
                    className="h-8 w-auto"
                    src="/images/logo1.png"
                    alt="Your Company"
                  />
                    </Link>
                                
                </div>
                </div>
                

                {/* Links */}

                <div className="space-y-6 border-t border-gray-200 px-8 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root ">
                      <NavLink
                        to={page.Link}
                        className="-m-2 block p-2 font-medium text-gray-900 "
                        onClick={() => setOpen(false)}
                      >
                        {page.name}
                      </NavLink>
                      <hr className="mt-5 mr-5" />
                    </div>
                  ))}
                </div>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-8 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="/images/logo1.png"
                    alt=""
                  />

                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <NavLink
                      onClick={() => setOpen(false)}
                      key={page.name}
                      to={page.Link}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>

              {/* <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
    </>
  );
}
