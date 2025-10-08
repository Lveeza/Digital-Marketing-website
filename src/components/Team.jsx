import teamBg from '../assets/Team-images/team_breadcrumg.png'
import TeamMemberSection from './TeamComponents/TeamMemberSection'
import newsImg from '../assets/newsletter_bg.png'
import bgImg1 from '../assets/Services-images/testimonial_icon_2.png'
import bgImg2 from '../assets/Services-images/testimonial_icon_4.png'
import Slider from './Slider'
import Footer from './Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export default function Team() {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
      delay: 100,
      once: true,
    })
  }, [])
  return (
    <>
      <section className="min-h-[200px] md:min-h-[300px] xl:min-h-[500px]">
        <div
          className="absolute top-0 -z-10 flex min-h-[300px] w-full flex-col items-center justify-center border md:min-h-[350px] xl:min-h-[500px]"
          style={{
            backgroundImage: `url(${teamBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="whitespace-nowrap text-center font-jost text-4xl font-medium leading-tight text-[#051441] md:text-[48px] xl:text-7xl">
            Our Team
          </h1>
        </div>
      </section>

      <section className="mt-24 flex flex-col items-center px-5 py-20 font-jost">
        <h3 className="mb-4 text-center text-base font-semibold tracking-wide text-[#ff7070]">
          OUR TEAM
        </h3>
        <h1 className="text-center text-3xl font-semibold xl:text-5xl">
          Our Expert Team
        </h1>
        <TeamMemberSection />
      </section>

      <section
        className="border border-black px-5 py-28 text-center font-jost md:px-5 md:py-28"
        style={{
          backgroundImage: `url(${newsImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p
          className="mx-auto mb-7 text-base font-semibold leading-7 text-[#ff7070]"
          data-aos="fade-down"
          data-aos-delay="150"
        >
          ASK A QUESTION
        </p>
        <h3
          className="mb-10 text-2xl font-medium text-white sm:text-3xl laptop:text-5xl"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          Didn’t get your proper answer
        </h3>
        <button
          className="z-2 group relative w-full border border-[#ff7070] bg-[#ff7070] py-4 text-sm font-semibold text-white hover:text-[#ff7070] md:w-auto md:px-72 laptop:px-20"
          onClick={() => navigate('/contact')}
        >
          <span className="relative z-10 whitespace-nowrap">Hire me</span>
          <div className="-z-1 duration-900 absolute left-0 top-0 h-full w-0 bg-white transition-all duration-700 ease-in-out group-hover:w-full"></div>
        </button>
      </section>

      <section className="relative mb-20 px-5 py-20">
        <h3
          className="mb-4 text-center text-base font-semibold tracking-wide text-[#ff7070]"
          data-aos="fade-down"
        >
          TESTIMONIALS
        </h3>
        <h1
          className="text-center text-3xl font-semibold xl:text-5xl"
          data-aos="fade-down"
        >
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
