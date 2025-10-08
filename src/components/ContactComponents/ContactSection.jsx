import ContactCard from './ContactCard'
import contactIcon1 from '../../assets/ContactImages/map.png'
import contactIcon2 from '../../assets/ContactImages/phn.png'
import contactIcon3 from '../../assets/ContactImages/mail.png'

export default function ContactSection() {
  return (
    <div className="mt-12 flex max-w-[1300px] flex-wrap justify-center gap-12">
      <ContactCard
        contactIcon={contactIcon1}
        title="Write us at:"
        para="Pioneer House - 2C/6

        New Rothak Road
        
        Karol Bagh, Nr. Liberty Cinema
        
        New Delhi - 110005"
      />
      <ContactCard
        contactIcon={contactIcon2}
        title="Connect with us at:"
        para="+91 8586979010"
      />
      <ContactCard
        contactIcon={contactIcon3}
        title="Send us your queries at:"
        para="chirag@pioneerpublicityindia.com"
      />
    </div>
  )
}
