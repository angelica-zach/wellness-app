import { v4 as uuid } from "uuid";

const workoutOptions = [
  {
    id: uuid(),
    embedId: "_fesO5oNcEs",
    image: "src/assets/cardio.png",
    title: "Cardio",
    description:
      "Cardio is a great way to get your heart rate up and burn calories. Try a cardio workout to get your blood pumping and your body moving.",
  },
  {
    id: uuid(),
    embedId: "0zhvUV1bAVQ",
    image: "src/assets/upper.png",
    title: "Upper Body",
    description:
      "Upper body workouts are great for building strength and toning your arms, chest, and back. Try an upper body workout to get started.",
  },
  {
    id: uuid(),
    embedId: "WUzdhcwT8uM",
    image: "src/assets/lower.png",
    title: "Lower Body",
    description:
      "Lower body workouts are great for building strength and toning your legs and glutes. Try a lower body workout to get started.",
  },
  {
    id: uuid(),
    embedId: "Eml2xnoLpYE",
    image: "src/assets/yoga_icon.png",
    title: "Yoga",
    description:
      "Yoga is a great way to improve flexibility, strength, and balance. Try a yoga workout to get started.",
  },
  {
    id: uuid(),
    embedId: "C2HX2pNbUCM",
    image: "src/assets/pilates.png",
    title: "Pilates",
    description:
      "Pilates is a great way to improve core strength, flexibility, and posture. Try a pilates workout to get started.",
  },
  {
    id: uuid(),
    embedId: "aO1boUJhjvk",
    image: "src/assets/relax.png",
    title: "Rest",
    description:
      "Rest is an important part of any fitness routine. Make sure to take time to rest and recover.",
  },
];

export default workoutOptions;
