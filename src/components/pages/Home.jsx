import heroImage from '../../assets/hero-images/saly.png'
import shapeOne from '../../assets/hero-images/animation_shape_1.png'
import shapeTwo from '../../assets/hero-images/animation_shape_2.png'
import arrowDown from '../../assets/hero-images/arrow_down.svg'
import PortfolioSection from '../HomeComponents/HomePortfolioSection'
import BlogSection from '../HomeComponents/BlogSection'
import breadImg from '../../assets/blog_breadcrumg_1.png'
import newsImg from '../../assets/newsletter_bg.png'

import InstagramSection from '../HomeComponents/InstagramSection'
import Footer from '../Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
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
      {/* Hero section */}
      <section className="mt-24 font-jost laptop:pt-5" id="hero">
        <div className="relative flex flex-col items-start justify-evenly pt-5 laptop:flex-row">
          <div className="w-full text-center text-[#051441] laptop:w-[800px]">
            <h1 className="text-4xl font-semibold md:text-5xl laptop:text-[58px] xl:text-7xl">
              Pioneer digital marketing agency
            </h1>
            <h3 className="mt-7 text-2xl font-semibold">Based in Pakistan.</h3>
            <button
              className="relative mt-12 border-2 border-gray-200 px-11 py-6 text-sm font-bold before:absolute before:left-0 before:top-0 before:h-1/3 before:w-1/6 before:border-l-2 before:border-t-2 before:border-black before:transition-all before:duration-500 before:content-[''] after:absolute after:bottom-0 after:right-0 after:h-1/3 after:w-1/6 after:border-b-2 after:border-r-2 after:border-black after:transition-all after:duration-500 after:content-[''] hover:before:h-full hover:before:w-full hover:after:h-full hover:after:w-full"
              onClick={() => navigate('/services')}
            >
              Let's work together
            </button>
            <div className="absolute -left-24 top-0">
              <img src={shapeOne} alt="shape-one" />
            </div>
            <div className="left-16 top-72 hidden laptop:absolute">
              <img src={shapeTwo} alt="shape-one" />
            </div>
          </div>
          <div className="max-w-full laptop:max-w-[842px]">
            <img
              className="relative max-h-full w-full object-top laptop:-top-20 laptop:max-h-[780px]"
              src={heroImage}
              alt="hero-img"
            />
          </div>
        </div>
        <div className="mt-20">
          <a href="#portfolio" className="flex justify-center">
            <img src={arrowDown} alt="arrow" className="arrow-bounce" />
          </a>
        </div>
      </section>

      {/* Portfolio section */}
      <section id="portfolio" className="font-jost">
        <PortfolioSection />
      </section>

      <section className="px-1 py-10 text-center font-jost md:px-5 md:py-28">
        <h3 className="mb-7 text-3xl font-medium text-[#051441] lg:text-4xl">
          Who we are
        </h3>
        <p className="mx-auto mb-7 w-full text-lg font-normal leading-7 text-[#7d7d7d] laptop:w-[65%]">
          Pioneer DigiDrive is the business vertical of Pioneer Publicity
          Corporation which deals in digital branding and marketing. Being an
          integrated digital marketing agency, we bring all the essential online
          visibility solutions at one platform, driving you towards digital.
        </p>
        <button
          className="duration-900 border border-[#ff7070] bg-[#ff7070] px-12 py-3 text-white transition-all ease-in-out hover:bg-white hover:text-[#ff7070]"
          onClick={() => navigate('/about')}
        >
          Read more
        </button>
      </section>

      <section className="bg-[#051441] px-5 py-28 text-center font-jost md:px-5 md:py-28">
        <h3 className="mb-7 text-3xl font-medium text-white lg:text-4xl">
          What we do
        </h3>
        <p className="mx-auto mb-7 text-lg font-normal leading-7 text-white">
          Our digital solutions are focused on enabling brands to have an edge
          over their competition.
        </p>
        <button
          className="z-2 duration-900 group relative bg-[white] px-12 py-3 hover:text-white"
          onClick={() => navigate('/services')}
        >
          <span className="relative z-10">Take a demo</span>
          <div className="-z-1 duration-900 absolute left-0 top-0 h-full w-0 bg-[#ff7070] transition-all ease-in-out group-hover:w-full"></div>
        </button>
      </section>

      <BlogSection />

      <section
        className="w-full py-32 text-center font-jost"
        style={{
          backgroundImage: `url(${breadImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h3
          className="mb-5 text-3xl font-medium text-[#051441] md:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Join our Instagram <br /> Community
        </h3>
        <p
          className="mx-auto text-lg font-normal leading-7 text-[#051441]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Latest Posts
        </p>
      </section>

      <InstagramSection />

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
          LET'S GET STARTED
        </p>
        <h3
          className="mb-10 text-2xl font-medium text-white sm:text-3xl laptop:text-5xl"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          All set to kickstart your digital journey?
        </h3>
        <button
          className="z-2 group relative w-full border border-[#ff7070] bg-[#ff7070] py-4 text-sm font-semibold text-white hover:text-[#ff7070] md:w-auto md:px-72 laptop:px-10"
          onClick={() => navigate('/')}
        >
          <span className="relative z-10 whitespace-nowrap">
            GET STARTED TODAY
          </span>
          <div className="-z-1 duration-900 absolute left-0 top-0 h-full w-0 bg-white transition-all duration-700 ease-in-out group-hover:w-full"></div>
        </button>
      </section>

      <Footer />
    </>
  )
}
