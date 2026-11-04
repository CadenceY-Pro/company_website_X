export type TeamMember = {
  name: string
  role: string
  image?: string
  initials: string
  photoPosition?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Tomas',
    role: 'CEO',
    image: '/team/tomas.jpg',
    initials: 'T',
  },
  {
    name: 'Marina Ilie',
    role: 'HR Manager',
    image: '/team/marina.jpg',
    initials: 'MI',
  },
  {
    name: 'Dmytro',
    role: 'CTO',
    image: '/team/dmytro.jpg',
    initials: 'D',
  },
  {
    name: 'Stepan',
    role: 'Technical Manager',
    image: '/team/stepan.jpg',
    initials: 'S',
  },
  {
    name: 'Kevin',
    role: 'Tech Lead',
    image: '/team/kevin.png',
    initials: 'K',
    photoPosition: '50% 18%',
  },
]
