import thumb_hiski_membership from "../assets/project-screenshots/hiski-membership-thumb.png";

import papyrus_mobile_thumb from "../assets/project-screenshots/papyrus-digital-mobile/papyrus-digital-mobile-thumb.png";
import papyrus_mobile_ss_1 from "../assets/project-screenshots/papyrus-digital-mobile/papyrus-digital-mobile-1.png";
import papyrus_mobile_ss_2 from "../assets/project-screenshots/papyrus-digital-mobile/papyrus-digital-mobile-2.png";
import papyrus_mobile_ss_3 from "../assets/project-screenshots/papyrus-digital-mobile/papyrus-digital-mobile-3.png";
import papyrus_mobile_ss_4 from "../assets/project-screenshots/papyrus-digital-mobile/papyrus-digital-mobile-4.png";

import papyrus_dashboard_thumb from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-thumb.png";
import papyrus_dashboard_ss_1 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-1.png";
import papyrus_dashboard_ss_2 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-2.png";
import papyrus_dashboard_ss_3 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-3.png";
import papyrus_dashboard_ss_4 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-4.png";
import papyrus_dashboard_ss_5 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-5.png";
import papyrus_dashboard_ss_6 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-6.png";
import papyrus_dashboard_ss_7 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-7.png";
import papyrus_dashboard_ss_8 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-8.png";
import papyrus_dashboard_ss_9 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-9.png";
import papyrus_dashboard_ss_10 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-10.png";
import papyrus_dashboard_ss_11 from "../assets/project-screenshots/papyrus-digital-dashboard/papyrus-digital-mobile-11.png";

import iboost_mobile_thumb from "../assets/project-screenshots/iboost-mobile/iboost-mobile-thumb.png";
import iboost_mobile_ss_1 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-1.png";
import iboost_mobile_ss_2 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-2.png";
import iboost_mobile_ss_3 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-3.png";
import iboost_mobile_ss_4 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-4.png";
import iboost_mobile_ss_5 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-5.png";
import iboost_mobile_ss_6 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-6.png";
import iboost_mobile_ss_7 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-7.png";
import iboost_mobile_ss_8 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-8.png";
import iboost_mobile_ss_9 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-9.png";
import iboost_mobile_ss_10 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-10.png";
import iboost_mobile_ss_11 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-11.png";
import iboost_mobile_ss_12 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-12.png";
import iboost_mobile_ss_13 from "../assets/project-screenshots/iboost-mobile/iboost-mobile-13.png";

import iboost_dashboard_thumb from "../assets/project-screenshots/iboost-dashboard/iboost-dashboard-thumb.png";
import iboost_dashboard_ss_1 from "../assets/project-screenshots/iboost-dashboard/iboost-dashboard-1.png";
import iboost_dashboard_ss_2 from "../assets/project-screenshots/iboost-dashboard/iboost-dashboard-2.png";
import iboost_dashboard_ss_3 from "../assets/project-screenshots/iboost-dashboard/iboost-dashboard-3.png";
import iboost_dashboard_ss_4 from "../assets/project-screenshots/iboost-dashboard/iboost-dashboard-4.png";

import missing_alphabet_thumb from "../assets/project-screenshots/missing-alphabet/missing-alphabet-thumb.png";
import missing_alphabet_ss_1 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-1.png";
import missing_alphabet_ss_2 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-2.png";
import missing_alphabet_ss_3 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-3.png";
import missing_alphabet_ss_4 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-4.png";
import missing_alphabet_ss_5 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-5.png";
import missing_alphabet_ss_6 from "../assets/project-screenshots/missing-alphabet/missing-alphabet-6.png";

import bubble_space_thumb from "../assets/project-screenshots/bubble-space/bubble-space-thumb.png";
import bubble_space_ss_1 from "../assets/project-screenshots/bubble-space/bubble-space-1.png";
import bubble_space_ss_2 from "../assets/project-screenshots/bubble-space/bubble-space-2.png";
import bubble_space_ss_3 from "../assets/project-screenshots/bubble-space/bubble-space-3.png";
import bubble_space_ss_4 from "../assets/project-screenshots/bubble-space/bubble-space-4.png";
import bubble_space_ss_5 from "../assets/project-screenshots/bubble-space/bubble-space-5.png";
import bubble_space_ss_6 from "../assets/project-screenshots/bubble-space/bubble-space-6.png";
import bubble_space_ss_7 from "../assets/project-screenshots/bubble-space/bubble-space-7.png";
import bubble_space_ss_8 from "../assets/project-screenshots/bubble-space/bubble-space-8.png";
import bubble_space_ss_9 from "../assets/project-screenshots/bubble-space/bubble-space-9.png";

export interface IProjects {
  id: string,
  name: string,
  projectType: string,
  description: string,
  thumbImage: string,
  thumbOrientation: string,
  videoUrl: string,
  projectUrl: string,
  techStack: string[],
  projectScreenshot: string[],
}

export const projectsData: IProjects[] = [
  {
    id: "0",
    name: "HISKI Membership",
    projectType: "website",
    description: "A web-based membership system for Indonesian Bachelors of Literature, featuring user and admin roles. Users register, pay via a third-party gateway, and receive a unique ID based on their college. Memberships last one year, with digital cards for offline events. Admins manage fees, colleges, and past members. The system ensures secure payments, automated renewals, and a streamlined experience for members and administrators.",
    thumbImage: thumb_hiski_membership,
    thumbOrientation: "landscape",
    videoUrl: "https://www.youtube.com/watch?v=azO10FTgeDw&ab_channel=666coder",
    projectUrl: "https://hiski.or.id/keanggotaan/",
    techStack: ["ReactJs", "NodeJS", "ExpressJS", "Typescript", "MongoDB"],
    projectScreenshot: [],
  },
  {
    id: "1",
    name: "Papyrus Digital Mobile",
    projectType: "mobile",
    description: "An application for students and parents to track school expenses like tuition and building fees. It also functions as a digital wallet, allowing parents to manage their children's pocket money securely. With real-time tracking and payment integration, it ensures transparency and financial control, helping families budget effectively while promoting cashless transactions for students.",
    thumbImage: papyrus_mobile_thumb,
    thumbOrientation: "portrait",
    videoUrl: "",
    projectUrl: "",
    techStack: ["React Native", "Expo", "Typescript", "SQLite"],
    projectScreenshot: [papyrus_mobile_ss_1, papyrus_mobile_ss_2, papyrus_mobile_ss_3, papyrus_mobile_ss_4],
  },
  {
    id: "2",
    name: "Papyrus Digital Dashboard",
    projectType: "website",
    description: "An application to manage data in Papyrus Digital Mobile, including school fee management, new student registration, and student tracking throughout their education. It also records academic achievements, ensuring organized and accessible data. With an efficient and integrated system, this application enhances school administration, accuracy, and modernizes data management for better educational oversight.",
    thumbImage: papyrus_dashboard_thumb,
    thumbOrientation: "landscape",
    videoUrl: "",
    projectUrl: "",
    techStack: ["ReactJS", "Antd", "Typescript"],
    projectScreenshot: [
      papyrus_dashboard_ss_1,
      papyrus_dashboard_ss_2,
      papyrus_dashboard_ss_3,
      papyrus_dashboard_ss_4,
      papyrus_dashboard_ss_5,
      papyrus_dashboard_ss_6,
      papyrus_dashboard_ss_7,
      papyrus_dashboard_ss_8,
      papyrus_dashboard_ss_9,
      papyrus_dashboard_ss_10,
      papyrus_dashboard_ss_11,
    ],
  },
  {
    id: "3",
    name: "iBoost Mobile",
    projectType: "mobile",
    description: "Application for targeted message broadcasting via SMS, Flash SMS, SIM notifications, and WhatsApp based on a user-selected area and radius. It includes analytics to track delivery, read, and unread rates, ensuring effective communication. With custom pricing per channel and message templates for efficiency, the app simplifies bulk messaging while providing valuable insights for users.",
    thumbImage: iboost_mobile_thumb,
    thumbOrientation: "portrait",
    videoUrl: "",
    projectUrl: "",
    techStack: ["ReactNative", "Expo", "Typescript", "SQLite"],
    projectScreenshot: [
      iboost_mobile_ss_1,
      iboost_mobile_ss_2,
      iboost_mobile_ss_3,
      iboost_mobile_ss_4,
      iboost_mobile_ss_5,
      iboost_mobile_ss_6,
      iboost_mobile_ss_7,
      iboost_mobile_ss_8,
      iboost_mobile_ss_9,
      iboost_mobile_ss_10,
      iboost_mobile_ss_11,
      iboost_mobile_ss_12,
      iboost_mobile_ss_13,
    ],
  },
  {
    id: "4",
    name: "iBoost Dashboard",
    projectType: "website",
    description: "As part of iBoost Mobile, this application is for managing app settings, including payment configurations, pricing per channel, message templates, and corporate account management. It supports corporate users with multiple sub-users, offering monthly or yearly billing for message blasting, while single users are charged per use. This system ensures flexible pricing, efficient user management, and streamlined messaging operations.",
    thumbImage: iboost_dashboard_thumb,
    thumbOrientation: "landscape",
    videoUrl: "",
    projectUrl: "",
    techStack: ["ReactJS", "Antd", "Typescript"],
    projectScreenshot: [
      iboost_dashboard_ss_1,
      iboost_dashboard_ss_2,
      iboost_dashboard_ss_3,
      iboost_dashboard_ss_4
    ],
  },
  {
    id: "5",
    name: "Missing Alphabet",
    projectType: "game",
    description: "Developed my second game, and my first built entirely from scratch. Designed for children yet enjoyable for all ages, this brain-training game challenges players to identify the missing alphabet from a random sequence within a time limit. With an engaging and educational approach, it helps improve cognitive skills and letter recognition, making learning fun for kids and stimulating for adults",
    thumbImage: missing_alphabet_thumb,
    thumbOrientation: "landscape",
    videoUrl: "https://www.youtube.com/watch?v=MocBSPge_Dg",
    projectUrl: "",
    techStack: ["C#", "Unity"],
    projectScreenshot: [
      missing_alphabet_ss_1,
      missing_alphabet_ss_2,
      missing_alphabet_ss_3,
      missing_alphabet_ss_4,
      missing_alphabet_ss_5,
      missing_alphabet_ss_6,
    ],
  },
  {
    id: "6",
    name: "Bubble Space",
    projectType: "game",
    description: "My first personal project while learning to code, this casual game was built with help from Unity Asset Store for learning and free assets. Players pop meteors of the same color (three or more) to progress through 1,000+ levels. The game includes in-game purchases and ads for free items, making it both engaging and rewarding. This project helped me understand game mechanics, monetization, and Unity development.",
    thumbImage: bubble_space_thumb,
    thumbOrientation: "portrait",
    videoUrl: "https://www.youtube.com/watch?v=1-UiFuFUpsg",
    projectUrl: "",
    techStack: ["C#", "Unity"],
    projectScreenshot: [
      bubble_space_ss_1,
      bubble_space_ss_2,
      bubble_space_ss_3,
      bubble_space_ss_4,
      bubble_space_ss_5,
      bubble_space_ss_6,
      bubble_space_ss_7,
      bubble_space_ss_8,
      bubble_space_ss_9,
    ],
  },
];