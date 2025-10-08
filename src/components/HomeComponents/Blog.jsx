export default function Blog({ BlogImg, subTitle, title }) {
  return (
    <div>
      <div className="flex h-fit max-w-full flex-col items-start justify-between border-b border-[#aeaaaa] py-8 md:flex-row md:items-center md:py-10">
        <div
          className="flex items-center"
          data-aos="fade-down" 
        >
          <img className="h-[80px] w-[80px]" src={BlogImg} alt="blog-1" />
          <div className="ml-5 flex flex-col items-start">
            <p className="mb-2 font-jost text-xs font-medium text-[#5961ff]">
              {subTitle}
            </p>
            <h1 className="z-2 group relative font-spectral text-xl text-[#051441] hover:text-white laptop:text-2xl">
              <a className="relative z-10" href="#hero">
                {title}
              </a>
              <div className="-z-1 absolute left-0 top-0 h-full w-0 bg-black transition-all duration-1000 ease-in-out group-hover:w-full"></div>
            </h1>
          </div>
        </div>
        <a
          href="#hero"
          className="mt-4 cursor-pointer font-jost text-sm font-semibold text-[#7d7d7d] transition-all ease-in-out hover:text-[#ff7070] md:mt-0"
        >
          READ MORE <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}
