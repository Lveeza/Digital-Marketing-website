export default function TeamMember({ member, name, intro }) {
  return (
    <div
      className="flex w-[525px] flex-col items-center justify-center gap-5 sm:w-[330px] laptop:w-[210px] xl:w-[255px]"
      data-aos="fade-down"
    >
      <div className="group relative overflow-hidden rounded-full">
        <a href="#">
          <img src={member} alt="member1" />
        </a>
        <div className="absolute bottom-5 left-0 flex h-[50px] w-[255px] items-center justify-center gap-5 bg-[#ff7070] text-white transition-all duration-300 ease-linear group-hover:opacity-100 laptop:-left-28 laptop:opacity-0 laptop:group-hover:left-0">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <h4 className="text-2xl font-semibold text-[#051441]">{name}</h4>
      <p className="-mt-5 text-lg text-[#7d7d7d]">{intro}</p>
    </div>
  )
}
