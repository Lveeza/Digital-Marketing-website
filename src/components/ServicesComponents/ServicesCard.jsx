import { NavLink } from "react-router-dom";

export default function ServicesCard({ serviceIcon, title, para }) {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-5 sm:w-[240px] md:w-[289px] xl:w-[380px]"
      data-aos="fade-down"
    >
      <NavLink to="/services-detail">
        <img className="h-[83px] w-[95px]" src={serviceIcon} alt="" />
      </NavLink>
      <a href="">
        <h4 className="text-center text-2xl font-semibold text-[#051441] transition-all duration-500 ease-out hover:text-[#ff7070]">
          {title}
        </h4>
      </a>
      <p className="text-center text-lg font-normal text-[#7d7d7d]">{para}</p>
    </div>
  )
}
