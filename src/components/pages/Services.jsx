import service1 from '../../assets/Services-images/1.png'
import service2 from '../../assets/Services-images/2.png'
import ServicesSection from '../ServicesComponents/ServicesSection'
import aboutShape1 from '../../assets/About-images/cta_icon.png'
import team from '../../assets/Services-images/meeting.svg'
import Slider from '../Slider'
import Footer from '../Footer'
import bgImg1 from '../../assets/Services-images/testimonial_icon_2.png'
import bgImg2 from '../../assets/Services-images/testimonial_icon_4.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 120,
      delay: 100,
      once: false,
    })
  }, [])
  return (
    <>
      <section className="min-h-[345px]">
        <div className="absolute top-0 -z-10 flex w-full items-center justify-center border bg-[#FFE9CC] pt-36">
          <h1
            className="mb-28 w-full whitespace-nowrap text-center font-jost text-3xl font-medium leading-tight laptop:text-5xl xl:w-[50%] pc:text-[60px]"
            data-aos="fade-down"
          >
            Promoting digital <br /> interactions while driving <br /> higher
            returns
          </h1>
          <img
            className="absolute bottom-0 left-0 h-[61px] w-[100px] md:h-[155px] md:w-[250px] xl:h-auto xl:w-auto"
            data-aos="fade-right"
            src={service1}
            alt="service1"
          />
          <img
            className="absolute -bottom-1 right-0 h-[65px] w-[100px] md:h-[155px] md:w-[250px] xl:h-auto xl:w-auto"
            data-aos="fade-left"
            src={service2}
            alt="service2"
          />
        </div>
      </section>

      <section className="mt-24 flex flex-col items-center px-3 pt-20 font-jost">
        <h3 className="mb-4 text-center text-base font-semibold tracking-wide text-[#ff7070]">
          OUR SERVICES
        </h3>
        <h1 className="text-center text-3xl font-semibold xl:text-5xl">
          Services we Provide
        </h1>
        <ServicesSection />
      </section>

      <section className="flex items-center justify-center px-2 py-10">
        <div className="relative flex max-w-[1300px] flex-col justify-center bg-[#ffeaea] px-3 py-5 sm:px-16 sm:py-20 md:flex-row">
          <div className="w-full font-jost md:w-[50%]">
            <h3
              className="mb-4 text-base font-medium tracking-wide text-[#ff7070]"
              data-aos="fade-down"
            >
              GET IN TOUCH
            </h3>
            <h1
              className="mb-7 text-2xl font-medium md:text-3xl laptop:text-4xl"
              data-aos="fade-down"
            >
              Wanna discuss on your project?
            </h1>

            <p
              className="mb-7 mt-5 font-jost text-lg leading-7 text-[#7d7d7d]"
              data-aos="fade-down"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              Attribution is appreciated and allows contributors to gain
              exposure.
            </p>
            <button
              className="z-2 duration-900 group relative border border-[#ff7070] bg-[#ff7070] px-12 py-3 font-jost text-white hover:text-[#ff7070]"
              data-aos="fade-down"
            >
              <NavLink to="/contact" className="relative z-10 tracking-wide">Start Project</NavLink>
              <div className="-z-1 absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
            </button>
          </div>
          <div
            className="flex w-full items-center md:w-[50%]"
            data-aos="fade-down"
          >
            <img className="min-h-[390px]" src={team} alt="team" />
          </div>
          <img
            className="absolute -bottom-32 -right-32 -z-10"
            src={aboutShape1}
            alt=""
          />
        </div>
      </section>
      <section className="relative mb-20 px-5 py-14">
        <h3 className="mb-4 text-center text-base font-semibold tracking-wide text-[#ff7070]" data-aos="fade-down">
          TESTIMONIALS
        </h3>
        <h1 className="text-center text-3xl font-semibold xl:text-5xl" data-aos="fade-down">
          Love from Clients
        </h1>
        <Slider />

        <img
          className="absolute bottom-0 left-0 -z-10 hidden laptop:block"
          src={bgImg1}
          alt="bgImg1"
        />
        <img
          className="absolute bottom-0 right-0 -z-10 hidden laptop:block"
          src={bgImg2}
          alt="bgImg2"
        />
      </section>

      <Footer />
    </>
  )
}
