import React from 'react'

const Footer = () => {
  return (
    <div className=''>
   {/* <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Proud to introduce</p>
      <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Revolutionary way to build the web</h1>
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>
        <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
      </div>
    </div>
  </div>
</div> */}

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
       <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
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
