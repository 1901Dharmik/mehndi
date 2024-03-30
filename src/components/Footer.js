import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className=' bottom-0 left-0 w-full'>


     <div class="bg-white  sm:pt-10 ">
  <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
      {/* <!-- nav - start --> */}
      <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
      <img
                    className="h-8 w-auto"
                    src="/images/logo1.png"
                    alt="Your Company"
                  />
        {/* <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a> */}
      </nav>
      {/* <!-- nav - end -->

      <!-- social - start --> */}
      <div class="flex gap-4">
       <Link to="/" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Home</Link>
        <Link to="/gallery" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Gallery</Link>
        <Link to="/" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">My Arts</Link>
        <Link to="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Bridal Mehndi</Link>
        <Link to="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact Me</Link>
        <Link to="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About Me</Link>
      </div>
      {/* <!-- social - end --> */}
    </div>

    <div class="py-8 text-center text-sm text-gray-400">© 2021 - Heer Mehndi Art. All rights reserved.</div>
  </footer>
</div>
    </div>
  )
}

export default Footer
