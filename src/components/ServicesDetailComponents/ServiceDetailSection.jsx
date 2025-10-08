import img01 from '../../assets/Services-Detail-images/01.png'
import img02 from '../../assets/Services-Detail-images/02.png'
import img03 from '../../assets/Services-Detail-images/03.png'
import service2 from '../../assets/Services-Detail-images/single_service_7.png'
import service3 from '../../assets/Services-Detail-images/single_service_8.png'
import service4 from '../../assets/Services-Detail-images/single_service_9.png'
import ServiceDetailCard1 from './ServiceDetailCard1'
import ServiceDetailCard2 from './ServiceDetailCard2'

export default function ServiceDetailSection() {
  return (
    <>
      <ServiceDetailCard1
        img={img01}
        service={service2}
        title="Social media creatives (Images, Videos, & GIFs), Articles, and Blogs"
      />
      <ServiceDetailCard2
        img={img02}
        service={service3}
        title="Facebook & Instagram Ads"
      />
      <ServiceDetailCard1
        img={img03}
        service={service4}
        title="Twitter, LinkedIn, & Snapchat Ads
        "
      />
      <ServiceDetailCard2
        img={img02}
        service={service3}
        title="Whatsapp & SMS marketing"
      />
    </>
  )
}
