import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../src/styles.css";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect } from "react";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="bag">
        <section className=" w-full px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
          <div>
            {/* <span className="block mb-4 text-xs md:text-sm text-red-700 font-medium">
           We Are
          </span> */}
            <h3 className="text-2xl md:text-5xl font-semibold">
              Committed to making your special occasion a memorable one
            </h3>
            <p className="text-base md:text-lg text-red-900 my-4 md:my-6">
              Have questions, comments, or feedback? We're here to help! Feel
              free to reach out to us using the contact information provided
              below
            </p>
            <div className="flex">
              <button className="btn-grad">
                <Link to="tel:+91%209574057264" className="">
                  Call Now
                </Link>
              </button>
              <button className="btn-grad ml-4">
                <Link to="http://wa.me/919574057264" className="">
                  Whatsapp
                </Link>
              </button>
            </div>
          </div>
          <ShuffleGrid />
        </section>
      </div>

      <section className="my-12 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                Anjali Prajapati,
              </h2>
              <p className="max-w-lg mt-3 text-md leading-relaxed text-gray-600 md:mt-8">
                As a passionate mehndi artist, I specialize in creating
                exquisite and intricate mehndi designs that add a touch of
                elegance and tradition to every occasion. With 10 Years of
                experience in the art of mehndi, I take pride in my ability to
                transform ideas into beautiful designs that exceed my clients'
                expectations.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 " />
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <Link
                  to="http://wa.me/919574057264"
                  className="transition-all duration-200 text-red-600 hover:text-red-500 underline "
                >
                  Whatsapp
                </Link>
              </p>
            </div>
            <div className="relative pb-2">
              {/* <img loading="lazy"
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt
              /> */}
              <img loading="lazy"
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 drop-shadow-lg"
                src="/images/dd1.png"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      <h3 className=" flex justify-center mx-4 align-middle text-red-600 text-3xl bg-red-100  font-semibold py-3 rounded-full">
        My Works
      </h3>
      <div className="mx-3 py-6 rounded-md bg-white">
        <h3 className="text-red-600 text-2xl font-semibold py-3">
          Bridal Mehndi
        </h3>
        <Swiper
          style={{
            "--swiper-navigation-size": "30px",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-h-screen rounded-xl "
        >
          <SwiperSlide>
            <img loading="lazy"
              src="/images/beautiful-mehndi-patterns-cover-bride-s-fingers-which-she-holds.jpg"
              alt=""
            />
          </SwiperSlide>
          {/* <SwiperSlide>
        <img loading="lazy" src="/images/dl.beatsnoop.com-high-d3ed9b934dd7067d99.jpg" alt="" />
        </SwiperSlide> */}
          <SwiperSlide>
            <img loading="lazy"
              src="/images/mehndi-designs-hands-beautiful-traditional-indian-jewelry.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy"
              src="/images/mehndi-wedding-ornament-hands-drawn-by-henna.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" src="/images/mehndi-designs-1743265.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy"
              src="/images/mehndi-designs-hands-beautiful-traditional-indian-jewelry.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <>
        <div className="ml-3 ">
          <h3 className="text-red-600 text-2xl font-semibold py-4">
            Casual Mehndi
          </h3>
          <Swiper 
            style={{
              "--swiper-pagination-color": "#c81e1e",
            }}
            // slidesPerView={4}
            spaceBetween={10}
            grabCursor={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1.2,
              },
              412: {
                slidesPerView: 1.6,
              },
              568: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper main-swiper"
          >
            <SwiperSlide>
              <img loading="lazy" src="/images/img1.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img2.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img3.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img4.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img5.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img6.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img7.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img8.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img9.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img10.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img11.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img12.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img loading="lazy" src="/images/img13.jpg" alt="" className="rounded-md" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div class="bg-[#f3f4f6] p-3">
          <h3 className="text-red-600 text-2xl font-semibold py-3">My Works</h3>
          <div class="grid xl:grid-cols-2 gap-6 sm:grid-cols-1 ">
            <Swiper
              style={{
                "--swiper-pagination-color": "#c81e1e",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[FreeMode, Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide className="rounded-md">
                <img loading="lazy"
                  src="/images/beautiful-mehndi-patterns-cover-bride-s-fingers-which-she-holds.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img loading="lazy"
                  src="/images/mehndi-designs-hands-beautiful-traditional-indian-jewelry.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img loading="lazy"
                  src="/images/mehndi-wedding-ornament-hands-drawn-by-henna.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img loading="lazy"
                  src="/images/mehndi-wedding-ornament-hands-drawn-by-henna.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img loading="lazy"
                  src="/images/mehndi-wedding-ornament-hands-drawn-by-henna.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img loading="lazy"
                  src="/images/mehndi-wedding-ornament-hands-drawn-by-henna.jpg"
                  alt=""
                  className="rounded-md"
                />
              </SwiperSlide>
            </Swiper>

            <div class="grid grid-cols-2 gap-4">
              <div
                class="bag rounded-lg border shadow-sm col-span-1 bg-[#81c784] text-white"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Best Sale
                  </h3>
                </div>
                <div class="p-6">
                
                </div>
              </div>
              <div
                class="bag2 rounded-lg border shadow-sm col-span-1 bg-[#81c784] text-white"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    New Arrival
                  </h3>
                </div>
                <div class="p-6">
               
                </div>
              </div>
              <div
                class="bag4 rounded-lg border shadow-sm col-span-1 bg-[#ffe0b2] text-white"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    New Arrival
                  </h3>
                </div>
                <div class="p-6">
             
                </div>
              </div>
              <div
                class="bag5 rounded-lg border shadow-sm col-span-1 bg-[#ffe0b2] text-white"
                data-v0-t="card"
              >
                <div class="flex flex-col space-y-1.5 p-6">
                  <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    New Arrival
                  </h3>
                </div>
                <div class="p-6">
                
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 mx-3 lg:pl-4 sm:pl-0 py-8">
        <section className=" ">
          <h3 className="text-red-600 text-2xl font-semibold py-3">Services</h3>
          <ul class="max-w-md space-y-1 text-md p-2 text-gray-800 list-disc list-inside dark:text-gray-400">
            <li className="pb-4">
              Customized mehndi designs for weddings, festivals, parties, and
              special events
            </li>
            <li className="pb-4">
              Traditional Indian, Arabic, Moroccan, and contemporary fusion
              designs
            </li>
            <li className="pb-4">
              Bridal mehndi packages tailored to individual preferences and
              themes
            </li>
            <li className="pb-4">
              Mehndi parties and group bookings for a unique and memorable
              experience
            </li>
          </ul>
        </section>
        <section className="">
          <h3 className="text-red-600 text-2xl font-semibold py-3">
            Why Choose Me?
          </h3>
          <ul class="max-w-md space-y-1 p-2 text-gray-500 list-inside dark:text-gray-400">
            <li class="flex items-center pb-4">
              <svg
                class="w-4 h-4 me-2 text-red-600 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Exceptional attention to detail and precision in design execution
            </li>
            <li class="flex items-center pb-4">
              <svg
                class="w-4 h-4 me-2 text-red-600 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Commitment to using high-quality, natural paste for safe and
              long-lasting results
            </li>
            <li class="flex items-center pb-4">
              <svg
                class="w-4 h-4 me-2 text-red-600 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Dedication to providing a personalized experience and ensuring
              client satisfaction
            </li>
            <li class="flex items-center pb-4">
              <svg
                class="w-4 h-4 me-2 text-red-600 dark:text-green-400 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Continuous learning and exploration of new techniques to stay
              updated with the latest trends in mehndi artistry
            </li>
          </ul>
        </section>
      </div>
      <section class="bg-[#f4d5d2] m-3 rounded-xl ">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div class="max-w-screen-sm mx-auto text-center">
            <h2 class="mb-4 text-3xl font-semibold leading-tight tracking-tight text-red-700 ">
              Contct Me
            </h2>
            <p class="mb-6 font-midium text-red-800 md:text-lg">
              To book your mehndi session or inquire about my services, please
              contact me. I offer flexible booking options and consultations to
              discuss your design preferences and requirements.
            </p>
            <p class="mb-6 font-midium text-[#111] md:text-lg">
              Note {""}! : I Am Available In Ahmedabad Only
            </p>
            <div className="flex justify-center">
              <button className="btn-grad">
                <Link to="tel:+91%209574057264" className="">
                  Call Now
                </Link>
              </button>
              <button className="btn-grad ml-4">
                <Link to="http://wa.me/919574057264" className="">
                  Whatsapp
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-3 pb-8 ">
        <h2 class="my-8  text-center text-2xl font-bold text-red-600 md:mb-8 lg:text-3xl xl:mb-12">
          Customer Reviews
        </h2>
        <Swiper
          style={{
            "--swiper-pagination-color": "#c81e1e",
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            568: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            {/* review - start */}
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
            {/* review - end */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
              <div>
                <span className="block text-sm font-bold md:text-base">
                  John McCulling
                </span>
                <span className="block text-sm text-gray-500">
                  August 28, 2021
                </span>
              </div>
              {/* stars - start */}
              <div className="-ml-1 flex justify-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              {/* stars - end */}
              <p className="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const squareData = [
  {
    id: 1,
    src: "/images/beautiful-mehndi-patterns-cover-bride-s-fingers-which-she-holds.jpg",
  },
  {
    id: 2,
    src: "/images/dl.beatsnoop.com-high-497a67b2094ae51617.jpg",
  },
  {
    id: 3,
    src: "/images/dl.beatsnoop.com-high-d3ed9b934dd7067d99.jpg",
  },
  {
    id: 4,
    src: "/images/IMG-20240316-WA0011.jpg",
  },
  {
    id: 5,
    src: "/images/indian-wedding-bangles-mehandi-henna-coloured-hands-with-reflective-ornament.jpg",
  },
  {
    id: 6,
    src: "/images/img-1.jpg",
  },
  {
    id: 7,
    src: "/images/IMG-20240316-WA0005.jpg",
  },
  {
    id: 8,
    src: "/images/IMG-20240316-WA0006.jpg",
  },
  {
    id: 9,
    src: "/images/IMG-20240316-WA0012.jpg",
  },
  {
    id: 10,
    src: "/images/IMG-20240316-WA0010.jpg",
  },
  {
    id: 11,
    src: "/images/IMG-20240316-WA0008.jpg",
  },
  {
    id: 12,
    src: "/images/IMG-20240316-WA0007.jpg",
  },
  // {
  //   id: 13,
  //   src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  // },
  // {
  //   id: 14,
  //   src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  // },
  // {
  //   id: 15,
  //   src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  // },
  // {
  //   id: 16,
  //   src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  // },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1 object-cover ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;
