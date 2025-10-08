import logo from '../assets/Footer-images/logo.png'
import footerImg from '../assets/Footer-images/footer_bg_1.png'
import sentLogo from '../assets/Footer-images/sent.svg'
import locationLogo from '../assets/Footer-images/location_icon.svg'
import socialLogo from '../assets/Footer-images/social_icon.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      delay: 100,
      once: true,
    })
  }, [])

  return (
    <footer
      className="flex flex-col items-center justify-center px-3 py-20 text-center font-jost text-base text-[#FFFFFF4D] xl:px-10"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10 border-b border-[#FFFFFF4D] pb-10 laptop:gap-14 xl:gap-28">
          <div
            className="flex w-full flex-col items-start sm:w-64 md:w-96 laptop:w-64 xl:w-72"
            data-aos="fade-down"
            data-aos-delay="80"
          >
            <img className="h-[52px] w-[52px]" src={logo} alt="viteLogo" />
            <p className="mt-7 text-start text-lg">
              Lorem sum dolor sit ame consecuin ctetur adipiscing elit, sed do
              that me eiusmod tempor in lawis
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="flex w-full flex-col items-start sm:w-auto md:w-72 laptop:w-auto laptop:items-end"
          >
            <div className="flex items-center">
              <h1 className="mr-3 text-2xl font-semibold text-[#fff]">
                Contact Info
              </h1>
              <img src={sentLogo} alt="" />
            </div>
            <ul className="mt-9 flex flex-col gap-2 text-start laptop:text-end">
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">www.digidrive.com</a>
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Email:</a>
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">chirag@pioneerpublicityindia.com</a>{' '}
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Phone: +91 85869 79010</a>
              </li>
            </ul>
          </div>
          <div
            className="= flex w-full flex-col items-start sm:w-60 md:w-96 laptop:w-auto laptop:items-end"
            data-aos="fade-down"
            data-aos-delay="120"
          >
            <div className="flex items-center">
              <h1 className="mr-3 text-2xl font-semibold text-[#fff]">
                Visit Us
              </h1>
              <img src={locationLogo} alt="" />
            </div>
            <ul className="mt-9 flex flex-col gap-2 text-start laptop:text-end">
              <li>Pioneer House - 2C/6</li>
              <li>New Rothak Road</li>
              <li>Karol Bagh, Nr. Liberty</li>
              <li>Cinema</li>
              <li>New Delhi - 110005</li>
            </ul>
          </div>
          <div
            className="flex w-full flex-col items-start sm:w-60 md:w-72 laptop:w-auto laptop:items-end"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="flex items-center">
              <h1 className="mr-3 text-2xl font-semibold text-[#fff]">
                On Socials
              </h1>
              <img className="h-4 w-4" src={socialLogo} alt="" />
            </div>

            <ul className="mt-9 flex flex-col gap-2 text-start laptop:text-end">
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Facebook</a>
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Twitter</a>
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Youtube</a>
              </li>
              <li className="transition-all duration-500 ease-in-out hover:text-[#ff7070]">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-between sm:flex-row">
          <h3>
            © Copyright 2021
            <span className="cursor-pointer transition-all duration-500 ease-in-out hover:text-[#ff7070]">
              Digi Drive
            </span>
          </h3>
          <div className="mt-5 flex w-28 justify-between sm:mt-0">
            <a
              className="transition-all duration-500 ease-in-out hover:text-[#ff7070]"
              href="#"
            >
              <i class="fa-brands fa-dribbble"></i>
            </a>
            <a
              className="transition-all duration-500 ease-in-out hover:text-[#ff7070]"
              href="#"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              className="transition-all duration-500 ease-in-out hover:text-[#ff7070]"
              href="#"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
