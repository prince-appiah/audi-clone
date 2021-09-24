import { v4 as uuidv4 } from "uuid";
import company from "../assets/company.webp";
import models from "../assets/models.webp";
import progress from "../assets/progress.webp";
import experience from "../assets/experience.webp";

const data = [
  {
    id: uuidv4(),
    image: company,
    title: "Company",
  },
  {
    id: uuidv4(),
    image: models,
    title: "Models",
  },
  {
    id: uuidv4(),
    image: progress,
    title: "Careers",
  },
  {
    id: uuidv4(),
    image: experience,
    title: "Experience Audi",
  },
];

export default data;
