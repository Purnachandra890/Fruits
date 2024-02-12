import { v4 as uuidv4 } from "uuid";


export default function Data() {
  const fruits = [
    {
      id: uuidv4(),
      quantity: true,
      name: "Apple",
      image: "images/apple.jpg",
      benefits: {
        calories: 95,
        carbs: 25,
        fibre: 3,
        fat: 0,
        protein: 1,
      },
    },
    {
      id: uuidv4(),
      quantity: true,
      name: "Avocado",
      image: "images/avocado.jpg",
      benefits: {
        calories: 240,
        carbs: 13,
        fibre: 10,
        fat: 22,
        protein: 3,
      },
    },
    {
      id: uuidv4(),
      quantity: false,
      name: "Grapes",
      image: "images/grape.jpg",
      benefits: {
        calories: 67,
        carbs: 17,
        fibre: 0.9,
        fat: 0.4,
        protein: 0.6,
      },
    },
    {
      id: uuidv4(),
      quantity: true,
      name: "Orange",
      image: "images/orange.jpg",
      benefits: {
        calories: 73,
        carbs: 16.5,
        fibre: 2.8,
        fat: 0.2,
        protein: 1.3,
      },
    },
    {
      id: uuidv4(),
      quantity: false,
      name: "Pineapple",
      image: "images/pineapple.jpg",
      benefits: {
        calories: 50,
        carbs: 13,
        fibre: 1.4,
        fat: 0.1,
        protein: 0.5,
      },
    },
    {
      id: uuidv4(),
      quantity: false,
      name: "Strawberry",
      image: "images/strawberry.jpg",
      benefits: {
        calories: 32,
        carbs: 7.7,
        fibre: 2,
        fat: 0.3,
        protein: 0.7,
      },
    },
  ];

  return fruits;
}
