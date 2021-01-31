import {
  faBrain,
  faHeartbeat,
  faLungs,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";

export const data = [
  {
    id: "1",
    name: "Asthma",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling, which is a common sign of asthma in children",
    ],
    description:
      "Asthma is a condition in which your airways narrow and swell and may produce extra mucus.",
    icon: faLungs,
    color: "orange",
  },
  {
    id: "2",
    name: "Covid 19",
    symptoms: [
      "difficulty breathing or shortness of breath",
      "chest pain or pressure",
      "loss of speech or movement",
    ],
    icon: faViruses,
    description: "COVID-19 can be characterized as a pandemic. ",
    color: "red",
  },
  {
    id: "3",
    name: "Heart Attack",
    symptoms: [
      "Chest pain or discomfort.",
      "Feeling weak, light-headed, or faint.",
      "Pain or discomfort in the jaw, neck, or back.",
    ],
    icon: faHeartbeat,
    description:
      "A heart attack occurs when the flow of blood to the heart is blocked. ",
    color: "red",
  },
  {
    id: "4",
    name: "Brain Tumor",
    symptoms: [
      "Headaches, which may be severe and worsen with activity or in the early morning.",
      "Personality or memory changes.",
      "Nausea or vomiting.",
    ],
    icon: faBrain,
    description:
      "A brain tumor is a mass or growth of abnormal cells in your brain.",
    color: "gray",
  },
];
