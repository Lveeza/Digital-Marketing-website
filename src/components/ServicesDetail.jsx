import hero1 from '../assets/Services-Detail-images/breadcrumb_1.png'
import hero2 from '../assets/Services-Detail-images/breadcrumb_2.png'
import service1 from '../assets/Services-Detail-images/services_details.png'

import newsImg from '../assets/newsletter_bg.png'
import Footer from './Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ServiceDetailSection from './ServicesDetailComponents/ServiceDetailSection'

export default function ServicesDetail() {
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
      <section className="min-h-[500px]">
        <div className="absolute top-0 -z-10 flex h-[400px] w-full items-center justify-center border bg-[#4ee674d8] pt-36 laptop:h-[500px]">
          <h1
            className="whitespace-wrap mb-40 w-full text-center font-jost text-4xl font-medium leading-tight sm:whitespace-nowrap laptop:text-5xl xl:w-[50%] pc:text-[84px]"
            data-aos="fade-down"
          >
            Social Media Marketing
          </h1>
          <img
            className="absolute bottom-20 left-0 h-[87px] w-[100px] md:h-[219px] md:w-[250px] xl:h-auto xl:w-auto"
            data-aos="fade-right"
            src={hero1}
            alt="service1"
          />
          <img
            className="absolute -bottom-1 right-5 h-[106px] w-[100px] md:h-[266px] md:w-[250px] xl:h-auto xl:w-auto"
            data-aos="fade-left"
            src={hero2}
            alt="service2"
          />
        </div>
      </section>
      <section className="sm:mt-24 flex flex-col items-center px-3 pb-28 font-jost">
        <div className="flex xl:w-[1140px] w-full sm:w-[540px] md:w-[720px] laptop:w-[960px] flex-col items-center justify-center">
          <h1 className="mb-4 self-start md:text-5xl text-3xl font-semibold text-[#051441]">
            Social Media Marketing
          </h1>
          <p className="mb-6 text-base text-[#7d7d7d]">
            Looking forward to educating and engaging your audience through
            eye-catching SM posts? Let us take charge while you focus on the
            core business operations. Using relevant creatives, descriptions,
            headings, and hashtags, we make your blogs and social media handles
            Internet-ready, driving you towards digital.
          </p>
          <img className="w-full" src={service1} alt="service1" />
          <p className="mt-6 text-base text-[#7d7d7d]" data-aos="fade-down">
            Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed and tuande perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
        </div>

        <ServiceDetailSection />
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
          onClick={() => navigate('/contact')}
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
