export default function PortfolioCard({ image, title, subtitle }) {
  return (
    <div
      className="group relative w-[90%] overflow-hidden sm:w-[45%] lg:w-[30%]"
      data-aos="fade-up" 
    >
      <div className="relative">
        <img
          className="w-full scale-100 transform transition-transform duration-700 ease-in-out group-hover:scale-[1.1]"
          src={image}
          alt={title}
        />
        <h3 className="absolute bottom-16 left-7 text-xl font-semibold text-white group-hover:hidden sm:text-2xl pc:hidden">
          {title}
        </h3>
        <p className="absolute bottom-8 left-7 text-sm leading-7 text-white group-hover:hidden sm:text-base md:text-base pc:hidden">
          {subtitle}
        </p>
      </div>

      <div className="absolute left-0 top-0 h-full w-full bg-pink-300/50 px-7 pb-28 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 sm:pb-28">
        <div className="relative top-3/4 h-28 overflow-hidden">
          <h3 className="absolute -bottom-16 text-xl font-semibold text-white transition-all duration-700 ease-in-out group-hover:bottom-0 sm:text-2xl">
            {title}
          </h3>
        </div>
        <div className="relative top-3/4 h-8 overflow-hidden">
          <p className="absolute -bottom-10 text-sm leading-7 text-white transition-all duration-700 ease-in-out group-hover:bottom-0 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
