
export default function ContactCard({ contactIcon, title, para }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 sm:w-[240px]  md:w-[289px] xl:w-[380px]" data-aos="fade-down">
      <a href="">
        <img className="" src={contactIcon} alt="contactIcon" />
      </a>
      <a href="">
        <h4 className="text-center text-2xl font-semibold text-[#051441] transition-all duration-500 ease-out hover:text-[#ff7070]">
          {title}
        </h4>
      </a>
      <p className="text-center text-lg font-normal text-[#7d7d7d]">{para}</p>
    </div>
  )
}
