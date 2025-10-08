import TeamMember from './TeamMember'
import member1 from '../../assets/Team-images/round_img_1.png'
import member2 from '../../assets/Team-images/round_img_2.png'
import member3 from '../../assets/Team-images/round_img_3.png'
import member4 from '../../assets/Team-images/round_img_4.png'
import member5 from '../../assets/Team-images/round_img_5.png'
import member6 from '../../assets/Team-images/round_img_6.png'
import member7 from '../../assets/Team-images/round_img_7.png'
import member8 from '../../assets/Team-images/round_img_8.png'

export default function TeamMemberSection() {
  return (
    <div className="mt-16 flex w-[960px] flex-wrap items-center justify-center gap-5 xl:w-[1200px] xl:gap-10">
      <TeamMember
        member={member1}
        name="Jhonas Donald"
        intro="Sales Director"
      />
      <TeamMember
        member={member2}
        name="Robert Statham"
        intro="Web Developer"
      />
      <TeamMember
        member={member3}
        name="Ricky Ponting"
        intro="UI/UX Designer"
      />
      <TeamMember member={member4} name="Daviv Willium" intro="Web Developer" />
      <TeamMember member={member5} name="Daviv Willium" intro="Web Developer" />
      <TeamMember member={member6} name="Daviv Willium" intro="Web Developer" />
      <TeamMember member={member7} name="Daviv Willium" intro="Web Developer" />
      <TeamMember member={member8} name="Daviv Willium" intro="Web Developer" />
    </div>
  )
}
