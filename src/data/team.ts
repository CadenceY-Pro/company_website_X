export type TeamMember = {
  name: string
  role: string
  linkedin: string
  image?: string
  initials: string
  photoPosition?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Tomas',
    role: 'CEO',
    linkedin: 'https://www.linkedin.com/in/tprice3/',
    image: '/team/tomas.jpg',
    initials: 'T',
  },
  {
    name: 'Marina Ilie',
    role: 'HR Manager',
    linkedin: 'https://www.linkedin.com/in/marina-ilie-00a54357/',
    image: '/team/marina.jpg',
    initials: 'MI',
  },
  {
    name: 'Dmytro',
    role: 'CTO',
    linkedin: 'https://www.linkedin.com/in/dmytro-mozalevskyi-b0640036a/',
    image: '/team/dmytro.jpg',
    initials: 'D',
  },
  {
    name: 'Stepan',
    role: 'Technical Manager',
    linkedin: 'https://www.linkedin.com/in/stepan-rabii-164703369/',
    image: '/team/stepan.jpg',
    initials: 'S',
  },
]
