import { v4 as uuid } from "uuid";

const workoutOptions = [
  {
    id: uuid(),
    embedId: "_fesO5oNcEs",
    image: "/cardio.png",
    title: "Cardio",
    description:
      "Cardio is a great way to get your heart rate up, burn calories and improve your health.",
  },
  {
    id: uuid(),
    embedId: "0zhvUV1bAVQ",
    image: "/upper.png",
    title: "Upper Body",
    description:
      "Upper body workouts are great for building strength and toning your arms, chest, and back. ",
  },
  {
    id: uuid(),
    embedId: "WUzdhcwT8uM",
    image: "/lower.png",
    title: "Lower Body",
    description:
      "Lower body workouts are great for building strength and toning your legs and glutes.",
  },
  {
    id: uuid(),
    embedId: "Eml2xnoLpYE",
    image: "/yoga_icon.png",
    title: "Yoga",
    description:
      "Yoga is a great way to improve flexibility, strength, and your overall balance.",
  },
  {
    id: uuid(),
    embedId: "C2HX2pNbUCM",
    image: "/pilates.png",
    title: "Pilates",
    description:
      "Pilates is a great way to improve core strength, flexibility, and especially posture.",
  },
  {
    id: uuid(),
    embedId: "aO1boUJhjvk",
    image: "/relax.png",
    title: "Rest",
    description:
      "Rest is an important part of any fitness routine. Make sure you recover fully.",
  },
];

export default workoutOptions;
