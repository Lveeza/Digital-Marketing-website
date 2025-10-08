import { useState } from 'react'
import contactbg from '../../assets/ContactImages/contact_classic_bg.png'
import ContactSection from '../ContactComponents/ContactSection'
import Input from '../ContactComponents/Input'
import Footer from '../Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
      delay: 100,
      once: false,
    })
  }, [])

  const [submitMsg, setsubmitMsg] = useState('')
  const [input, setInput] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [error, setError] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!input.name) newErrors.name = 'come on, you have a name, dont you?'
    if (!input.phone) newErrors.phone = 'come on, you have a phone, dont you?'
    if (!input.email) newErrors.email = 'no email, no message'
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)
    ) {
      newErrors.email = 'Please enter a valid email'
      console.log('Email value:', input.email)
    }

    if (!input.message)
      newErrors.message =
        'um...yea, you have to write something to send this form.'
    else if (input.message.length < 21) {
      newErrors.message = 'thats all? really?'
    }

    setError(newErrors)

    // if all inputs are filled
    if (Object.keys(newErrors).length === 0) {
      setsubmitMsg('Your message succesfully sent !')
      setInput({ name: '', phone: '', email: '', message: '' })
    }
  }

  // clear specific error as user types
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
    if (value) {
      setError((prev) => ({ ...prev, [name]: '' }))
    }
    setsubmitMsg('')
  }
  return (
    <>
      <section className="min-h-[200px] md:min-h-[300px] xl:min-h-[500px]">
        <div
          className="absolute top-0 -z-10 flex min-h-[300px] w-full flex-col items-center justify-center border md:min-h-[350px] xl:min-h-[550px]"
          style={{
            backgroundImage: `url(${contactbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="whitespace-nowrap text-center font-jost text-[40px] font-medium leading-tight text-[#051441] laptop:text-8xl">
            Contact Us
          </h1>
          <p className="whitespace-wrap w-[280px] text-center text-xs font-normal leading-loose text-[#051441] laptop:w-[350px] laptop:text-lg laptop:leading-normal">
            Dedicated customer support for resolving branding and marketing
            queries
          </p>
        </div>
      </section>

      <section className="mt-24 flex flex-col items-center px-3 pb-32 pt-20 font-jost">
        <h3 className="mb-4 w-[90%] text-center text-[1.5rem] font-semibold tracking-wide md:w-full laptop:w-[600px]" data-aos="fade-down">
          Want to explore more about our role in shifting your business online?
        </h3>
        <h1 className="w-full text-center text-2xl font-semibold md:text-3xl laptop:w-[550px] laptop:text-5xl xl:text-5xl" data-aos="fade-down">
          Let's connect for a virtual coffee today!
        </h1>
        <ContactSection />
      </section>

      <section className="flex flex-col items-center justify-center bg-[#f7f7f7] px-3 py-32 font-jost">
        <h4 className="whitespace-nowrap text-[1.5rem] font-medium text-[#051441]" data-aos="fade-down" data-aos-delay="100">
          Have something more to convey?
        </h4>
        <h1 className="mt-5 text-3xl font-semibold text-[#051441] laptop:text-5xl" data-aos="fade-down" data-aos-delay="100">
          Drop Here!
        </h1>

        <div className="relative mt-10 w-full font-jost text-base font-normal text-[#7d7d7d] sm:w-[570px] laptop:w-[920px]">
          <form
            className="flex flex-wrap gap-5 laptop:gap-11"
            onSubmit={handleSubmit}
          >
            <Input
              input={input}
              error={error.name}
              setInput={setInput}
              setError={setError}
              type="text"
              name="name"
              value={input.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <Input
              input={input}
              error={error.phone}
              setInput={setInput}
              setError={setError}
              type="text"
              name="phone"
              placeholder="Phone"
              value={input.phone}
              onChange={handleChange}
            />
            <Input
              input={input}
              error={error.email}
              setInput={setInput}
              setError={setError}
              type="text"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
            />
            <div className="relative flex h-60 w-full flex-col">
              <textarea
                className="relative h-48 w-full px-3 py-5 text-black shadow-lg focus:outline-[#ff7070]/60 laptop:h-52"
                name="message"
                placeholder=" Message"
                value={input.message}
                onChange={handleChange}
              ></textarea>

              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-[#212529]">
                {error.message}
              </p>
            </div>
            <button
              className="w-full border border-[#ff7070] bg-[#ff7070] py-4 text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-[#ff7070]"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <p className="absolute left-1/2 mt-5 -translate-x-1/2 text-base font-semibold text-[#ff7070]">
            {submitMsg}
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-20">
        <div className="h-[450px] w-full overflow-hidden shadow-lg laptop:w-[930px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.191807650997!2d77.18821097468159!3d28.624401375674284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035555555555%3A0xa5b54c2abcc3a1cf!2sPioneer%20House!5e0!3m2!1sen!2sin!4v1728042300000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  )
}
