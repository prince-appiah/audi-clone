import { v4 as uuidv4 } from "uuid";
import meeting from "../assets/meeting.webp";
import holorider from "../assets/holorider.webp";
import racer from "../assets/racer.png";
import stadium from "../assets/stadium.jpeg";

const data = [
  {
    id: uuidv4(),
    image: meeting,
    title: "Audi Media Days: make way for the future of mobility",
    desc: "From August 25 to September 1 Audi welcomed media representatives from all over the world to its Audi Media Days in the run-up to the IAA Mobility 2021 auto show – a series of five events which, this year, focused on the company’s new strategy and sustainable solutions for the future of mobility.",
  },
  {
    id: uuidv4(),
    image: holorider,
    title: "The car as an entertainment platform",
    desc: "Audi is using virtual reality (VR) to travel back in time through the history of the Salzburg Festival. Guests will be able to visually and acoustically experience Salzburg since Mozart’s childhood in an Audi e-tron. In this context, VR technology from holoride will whisk them away into three-dimensional worlds.",
  },
  {
    id: uuidv4(),
    image: racer,
    title: "Valuable e-ra",
    desc: "After seven successful years Audi left Formula E: with two title wins, 14 victories and 47 podiums in a total of 84 races with all-electric drive.",
  },
  {
    id: uuidv4(),
    image: stadium,
    title:
      "Impressive impressions: a progressive look at the Audi Football Summit",
    desc: "Experience progress in a visual way. The Audi Football Summit became the subject matter for four sports photographers. With creative ingenuity, they interpreted events on the pitch in their own inimitable fashion.",
  },
];

export default data;
