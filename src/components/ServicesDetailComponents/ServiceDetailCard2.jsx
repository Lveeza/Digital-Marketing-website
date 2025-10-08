export default function ServiceDetailCard2({ img, service, title }) {
  return (
    <div className="sm:mt-48 mt-20 flex gap-5 md:flex-row flex-col xl:w-[1140px] w-full sm:w-[540px] md:w-[720px] laptop:w-[960px]">
      <div className="md:w-[50%] w-full flex items-center justify-center" data-aos="fade-right">
        <img src={service} alt="service2" />
      </div>
      <div
        className="flex md:w-[50%] md:mt-1 mt-5 w-full flex-col items-start justify-center"
        data-aos="fade-left"
      >
        <img src={img} alt="img01" />
        <h3 className="my-5 sm:text-4xl text-2xl font-semibold text-[#051441]">{title}</h3>
        <p className="text-base leading-7 text-[#7d7d7d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doingo
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maece accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, wonder of consectetur
          adipisicing
        </p>
      </div>
    </div>
  )
}
