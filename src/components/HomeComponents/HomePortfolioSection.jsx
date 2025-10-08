import PortfolioCard from './HomePortfolioCard'
import portfolio1 from '../../assets/Portfolio-images/portfolio_19.png'
import portfolio2 from '../../assets/Portfolio-images/portfolio_20.png'
import portfolio3 from '../../assets/Portfolio-images/portfolio_21.png'
import portfolio4 from '../../assets/Portfolio-images/portfolio_22.png'
import portfolio5 from '../../assets/Portfolio-images/portfolio_23.png'
import portfolio6 from '../../assets/Portfolio-images/portfolio_24.png'

export default function PortfolioSection() {
  return (
    <section className="mt-28 flex flex-wrap items-center justify-center gap-4">
      <PortfolioCard
        image={portfolio1}
        title="Driving you towards digital"
        subtitle="Digital Media"
      />
      <PortfolioCard
        image={portfolio2}
        title="International-standard practices ensuring faster ROI"
        subtitle="Return on Investment"
      />
      <PortfolioCard
        image={portfolio3}
        title="Online PR to best position your brand"
        subtitle="Online public relations"
      />
      <PortfolioCard
        image={portfolio4}
        title="Boosting digital presence through SEO"
        subtitle="SEO optimization"
      />
      <PortfolioCard
        image={portfolio5}
        title="Mobile &amp; web apps for flawless digital interactions"
        subtitle="Return on Investment"
      />
      <PortfolioCard
        image={portfolio6}
        title="Digital Analytics to track performance &amp; consumer behavior"
        subtitle="Return on Investment"
      />
    </section>
  )
}
