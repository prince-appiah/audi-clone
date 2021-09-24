import { v4 as uuidv4 } from 'uuid'
import assessment1 from '../assets/assessment1.webp'
import assessment2 from '../assets/assessment2.webp'
import assessment3 from '../assets/assessment3.webp'

const data = [
  {
    id: uuidv4(),
    image: assessment1,
    title:
      'Assessment of the first half of 2021',
    desc:
      "A healthy result after six months: Jürgen Rittersberger, Board Member for Finance and Legal Affairs, puts the key figures into context.",
  },
  {
    id: uuidv4(),
    image: assessment2,
    title: "A firm eye on the electric and digital future",
    desc:
      'The first 100 days as Audi Chief Financial Officer: Jürgen Rittersberger talks about his priorities and how Audi is preparing for the future.',
  },
  {
    id: uuidv4(),
    image:assessment3,
    title: 'The Culture Drive - in tune with the city',
    desc:
      "It all begins with a first step: FC Bayern Munich have switched their car fleet to electric vehicles. Together with Audi, FC Bayern is demonstrating its commitment to a more sustainable future in the city with the aim of inspiring and positively influencing Munich's citizens.",
  },
]

export default data
