import { v4 as uuid } from "uuid";
import cardio from "../assets/cardio.png"

const itemsData = [
  //test data
  {
    id: uuid(),
    content: "Cardio",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Upper",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Lower",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Abdominal",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Legs",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Yoga",
    description: "loreum",
    icon: cardio
  },
  {
    id: uuid(),
    content: "Rest",
    description: "loreum",
    icon: cardio
  },
  
];

export default itemsData;