export default function InstagramCards({ instagramImg, title }) {
  return (
    <div
      className="relative w-[350px] sm:w-[260px] md:w-[350px] laptop:w-[280px] xl:w-[350px]"
      data-aos="fade-down" >
      <a href="https://www.instagram.com/">
        <img src={instagramImg} alt="instagram-img" />
      </a>
      <h3 className="absolute left-5 top-5 flex w-16 flex-col items-center rounded-md bg-[#ff7070] px-3 py-2 text-3xl font-semibold text-white">
        25 <span className="text-sm font-normal">MAR</span>
      </h3>
      <ul className="mt-4 flex flex-row items-start text-base sm:flex-col md:flex-row md:items-center">
        <li className="text-[#7d7d7d] transition-all duration-700 hover:text-[#ff7070]">
          <a href="#hero">
            <i class="fa-solid fa-user"></i> By Justin Trada
          </a>
        </li>
        <li className="ml-10 text-[#7d7d7d] transition-all duration-700 hover:text-[#ff7070] sm:ml-0 md:ml-10">
          <a href="#hero">
            <i class="fa-solid fa-comment"></i> 03 Comments
          </a>
        </li>
      </ul>
      <h4 className="mt-3 text-2xl font-semibold leading-tight text-[#051441] transition-all duration-700 hover:text-[#ff7070]">
        <a href="#hero">{title}</a>
      </h4>
    </div>
  )
}
