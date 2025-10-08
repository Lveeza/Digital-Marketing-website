import aboutOne from '../../assets/About-images/about_img_2.png'
import aboutTwo from '../../assets/About-images/about_img_3.png'
import team from '../../assets/About-images/team.svg'
import videoImg from '../../assets/About-images/video_bg_1.png'
import aboutShape1 from '../../assets/About-images/cta_icon.png'
import Footer from '../Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export function About() {
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
      <section className="mt-24 flex items-center justify-center px-3 py-0 font-jost sm:px-10 sm:py-10 md:px-0">
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row md:gap-10">
          <div className="relative h-[400px] w-full self-start sm:h-auto sm:w-[260px] md:w-[360px] laptop:w-[460px] xl:w-[560px]">
            <div className="flex justify-center">
              <img
                className="w-[235px] sm:w-auto"
                src={aboutOne}
                alt="about-1"
              />
              <img
                className="absolute left-auto top-28 w-[250px] sm:left-0 sm:w-auto md:left-10 md:top-16 laptop:left-20 laptop:top-40 xl:left-48 xl:top-44"
                src={aboutTwo}
                alt="about-2"
              />
            </div>
          </div>
          <div className="w-full py-0 sm:w-[250px] md:w-[350px] laptop:w-[450px] laptop:py-20 xl:w-[550px]">
            <h4 className="mb-6 text-base font-medium leading-10 tracking-wide text-[#ff7070]">
              ABOUT US
            </h4>
            <h1 className="mb-7 text-3xl font-normal text-[#051441] laptop:text-5xl">
              A one-stop-shop for all your digital presence needs
            </h1>
            <p className="text-base font-medium leading-7 text-[#7d7d7d]">
              Pioneer DigiDrive is the business vertical of Pioneer Publicity
              Corporation which deals in branding, advertising, and marketing.
              Being an integrated digital marketing agency, the firm is
              Pioneer's initiative to bring all the essential online visibility
              solutions at one platform to help businesses thrive by ensuring
              better brand reach and organic growth. We believe in a
              customer-first approach and don't mind going that extra mile to
              meet our clients' expectations who trust us for our dedication and
              transparency.
            </p>
            <button
              className="mt-10 border border-gray-300 px-8 py-4 font-semibold transition-all duration-500 ease-in-out hover:bg-[#ff7070] hover:text-white"
              onClick={() => navigate('/contact')}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-2 py-10">
        <div className="relative flex max-w-[1300px] flex-col justify-center bg-[#ffeaea] px-3 py-5 sm:px-16 sm:py-20 md:flex-row">
          <div className="w-full font-spectral md:w-[50%]">
            <h3 className="mb-4 text-base font-medium tracking-wide text-[#ff7070]">
              GET TO KNOW US
            </h3>
            <h1 className="mb-7 text-2xl font-medium md:text-3xl laptop:text-4xl">
              Wanna know more about us?
            </h1>
            <p
              className="font-jost text-lg leading-7 text-[#7d7d7d]"
              data-aos="fade-down"
              data-aos-delay="80"
            >
              Our team is determined to serve our clients with digital branding
              and marketing solutions developed and customized as per their
              business needs which has been the key to building and keeping the
              trust earned over 65 years. Being a prominent name in the OOH
              advertising space, we endeavor to bring the same success to our
              new as well as existing clients in this digital era by catering to
              all their digital needs under one roof.
            </p>
            <p
              className="mb-7 mt-5 font-jost text-lg leading-7 text-[#7d7d7d]"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              With a quest for modern approaches to help clients drive more
              revenue, DigiDrive is here to bring innovation to your existing
              marketing strategies, making your business future-ready and
              driving you towards digital.
            </p>
            <button
              className="z-2 duration-900 group relative border border-[#ff7070] bg-[#ff7070] px-12 py-3 font-jost text-white hover:text-[#ff7070]"
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => navigate('/team')}
            >
              <span className="relative z-10">Meet Our Team</span>
              <div className="-z-1 absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></div>
            </button>
          </div>
          <div className="flex w-full items-center md:w-[50%]">
            <img className="min-h-[390px]" src={team} alt="team" />
          </div>
          <img
            className="absolute -bottom-32 -right-32 -z-10"
            src={aboutShape1}
            alt=""
          />
        </div>
      </section>

      <section className="flex items-center justify-center px-3 py-28">
        <div className="relative flex items-center justify-center">
          <img
            className="h-282px w-[510px] md:h-[382px] md:w-[690px] laptop:h-auto laptop:w-auto"
            src={videoImg}
            alt=""
          />
          <a
            href="https://www.youtube.com/"
            className="group absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#ff7070] md:h-20 md:w-20"
          >
            <i class="fa-solid fa-play text-sm text-[#ff7070] group-hover:text-white md:text-lg"></i>
          </a>
          <div className="-z-2 circle-ani absolute h-24 w-24 rounded-full bg-white/50 transition-all duration-1000 ease-in-out"></div>
        </div>
      </section>
      <Footer />
    </>
  )
}
