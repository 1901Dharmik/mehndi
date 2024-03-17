import React, { Children } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', Link: '/',  },
  { name: 'Gallery', Link: '/gallery',},
  { name: 'My Arts', Link: '#',  },
  { name: 'Bridal Mehndi', Link: '#',},
  { name: 'Contact Me', Link: '/contect',  },
  { name: 'About Me', Link: '/about',  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({ children }) => {
  return (
    <div className="z-10 sticky top-0 bg-transparent backdrop-blur-md bg-opacity-85 bg-white shadow-sm border-b-1 border-gray-200">
      <div className="">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-8 "
                          src="/images/logo1.png"
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-tranferent  text-red-800"
                                : "text-red-700",
                              " px-3 py-2 text-md font-semibold"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}

                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-red-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>

                      {open ? (
                        <XMarkIcon className="block h-7 " aria-hidden="true" />
                      ) : (
                        <Bars3Icon
                          className="block h-7 w-7 "
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      // as="a"
                      // href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <Link to={item.Link}>
                      {item.name}
                      </Link>
                     
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
