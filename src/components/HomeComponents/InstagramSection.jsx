import InstagramCards from './InstagramCards'
import instaImg1 from '../../assets/Instagram-images/blog_post_1.png'
import instaImg2 from '../../assets/Instagram-images/blog_post_3.png'
import instaImg3 from '../../assets/Instagram-images/blog_post_4.png'
import instaImg4 from '../../assets/Instagram-images/blog_post_5.png'
import instaImg5 from '../../assets/Instagram-images/blog_post_6.png'
import instaImg6 from '../../assets/Instagram-images/blog_post_7.png'
import instaImg7 from '../../assets/Instagram-images/blog_post_8.png'
import instaImg8 from '../../assets/Instagram-images/blog_post_9.png'
import instaImg9 from '../../assets/Instagram-images/blog_post_11.png'

export default function InstagramSection() {
  return (
    <section className="font-jost flex items-center justify-center px-5 py-32">
      <div className="flex w-[1200px]  flex-wrap items-center justify-center gap-10 ">
        <InstagramCards
          instagramImg={instaImg1}
          title="Doloremque velit sapien labore eius lopren itna"
        />
        <InstagramCards
          instagramImg={instaImg2}
          title="Officiis similiq repell partu arie error earum conubia"
        />
        <InstagramCards
          instagramImg={instaImg3}
          title="Morbi asperiores nascetur ligula cras blanditiis"
        />
        <InstagramCards
          instagramImg={instaImg4}
          title="Why I say old chap that is spiffing jolly good a load"
        />
        <InstagramCards
          instagramImg={instaImg5}
          title="Doloremque velit sapien labore eius lopren itna"
        />
        <InstagramCards
          instagramImg={instaImg6}
          title="The new camera king is coming will rock!"
        />
        <InstagramCards
          instagramImg={instaImg7}
          title="Pay your bill to Phone to Pay Payments Bank in the world"
        />
        <InstagramCards
          instagramImg={instaImg8}
          title="The new camera king is coming will rock the town hall!"
        />
        <InstagramCards
          instagramImg={instaImg9}
          title="Doloremque velit sapien labore eius lopren itna"
        />
      </div>
    </section>
  )
}
