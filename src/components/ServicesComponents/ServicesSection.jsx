import ServicesCard from './ServicesCard'
import serviceIcon1 from '../../assets/Services-images/service_icon_1.svg'
import serviceIcon2 from '../../assets/Services-images/service_icon_2.svg'
import serviceIcon3 from '../../assets/Services-images/service_icon_3.svg'
import serviceIcon4 from '../../assets/Services-images/service_icon_4.svg'
import serviceIcon5 from '../../assets/Services-images/service_icon_5.svg'
import serviceIcon6 from '../../assets/Services-images/service_icon_6.svg'
import serviceIcon7 from '../../assets/Services-images/service_icon_3.svg'

export default function ServicesSection() {
  return (
    <div className="mt-20 flex max-w-[1300px] flex-wrap justify-center gap-12">
      <ServicesCard
        serviceIcon={serviceIcon1}
        title="Social Media Marketing"
        para="Looking forward to educating and engaging your audience..."
      />

      <ServicesCard
        serviceIcon={serviceIcon2}
        title="Content Marketing"
        para="Searching for innovative ways to influence your target..."
      />
      <ServicesCard
        serviceIcon={serviceIcon3}
        title="Paid Media"
        para="Compensating for your passive sales practices made..."
      />
      <ServicesCard
        serviceIcon={serviceIcon4}
        title="Online PR + Influencer Marketing"
        para="Online PR on top of your list? Let our experts do it..."
      />
      <ServicesCard
        serviceIcon={serviceIcon5}
        title="SEO"
        para="Whether you're looking for a quick way to make your..."
      />
      <ServicesCard
        serviceIcon={serviceIcon6}
        title="Web & App Development"
        para="With digital presence becoming the need of the hour..."
      />
      <ServicesCard
        serviceIcon={serviceIcon7}
        title="Digital Marketing Analytics"
        para="Convert user behavior into actionable data with our online analytics..."
      />
    </div>
  )
}
