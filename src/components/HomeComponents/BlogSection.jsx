import Blog from './Blog'
import Blog1 from '../../assets/Blog-images/blog_1.png'
import Blog2 from '../../assets/Blog-images/blog_2.png'
import Blog3 from '../../assets/Blog-images/blog_3.png'
import Blog4 from '../../assets/Blog-images/blog_4.png'
import Blog5 from '../../assets/Blog-images/blog-5.png'
import Blog6 from '../../assets/Blog-images/blog-6.png'

export default function BlogSection() {
  return (
    <section className="font-spectral laptop:px-20 px-10 py-28 text-center">
      <h4 className="text-base font-medium text-[#ff7070]">OUR STRENGTH</h4>
      <h1 className="laptop:text-5xl mt-5 text-3xl font-medium">Why us?</h1>

      <Blog
        BlogImg={Blog1}
        subTitle="DIGITAL MARKETING"
        title="One-stop-shop for all digital markiting needs"
      />
      <Blog
        BlogImg={Blog2}
        subTitle="EXPERIENCE "
        title="65 years of trust & service"
      />
      <Blog
        BlogImg={Blog3}
        subTitle="DIGITAL PRESENCE"
        title="Improved digital presence & brand awareness."
      />
      <Blog
        BlogImg={Blog4}
        subTitle="CONVERSION"
        title="Higher conversion rates"
      />
      <Blog BlogImg={Blog5} subTitle="COST " title="Cost-effective solutions" />
      <Blog
        BlogImg={Blog6}
        subTitle="CUSTOMER SUPPORT"
        title="Relentless customer support"
      />
    </section>
  )
}
