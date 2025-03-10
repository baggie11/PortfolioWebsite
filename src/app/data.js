/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Mentorship System",
    description: "Developed a scalable mentorship platform with role-specific features using Python and Django, integrating an Inverted Index for note search, achievement updates, meeting requests, and performance tracking, optimizing efficiency and interactions.",
    demoLink: "https://github.com/baggie11/Mentorship_System.git",
    visitLink: "",
    tools: "HTML, CSS, JS, Django, MySQL",
    time: "April 2023 - Jun 2023"
  },
  {
    id: 2,
    name: "NestSense",
    description: "Set up and managed the database using Supabase, ensuring efficient data storage and retrieval. Developed the backend architecture, integrating authentication with Google Auth and leveraging Azure AI. Seamlessly integrated the backend with the frontend for smooth communication.",
    demoLink: "",
    visitLink: "https://nest-sense-ai.vercel.app/",
    tools: "Next.js, Google Auth, Azure AI, Supabase, Nodejs",
    time: "Jan 2025 - Present"
  },
  {
    id: 3,
    name: "Lit'L",
    description: "Developed a full-stack website for Litl using the MERN stack, optimizing performance, scalability, and maintainability with custom design patterns, while enhancing efficiency and user experience through streamlined operations and a robust backend.",
    demoLink: "https://github.com/CrystalFireSword/LITL-Website",
    visitLink: "",
    tools: "MERN, Git, Postman",
    time: "Nov 2023 - Present"
  },
  {
    id: 4,
    name: "Pyxis",
    description: "Developed Pyxis, an assistive app for visually challenged users, using Python, OpenCV, YOLO, and LLama. Integrated object detection, navigation, AI, and text-to-speech for a hands-free, independent navigation experience, with continuous improvements.",
    demoLink: "https://github.com/baggie11/Pyxis_Final.git",
    visitLink: "",
    tools: "OpenCV, Streamlit, YOLO, LLaMA",
    time: "May 2023 - Present"
  },
  {
    id: 5,
    name: "Hangman Game",
    description: "A fun and interactive Hangman game built with a frontend interface. You have 6 tries to guess the word correctly. If you can't guess it within the given attempts, you lose!",
    demoLink: "https://github.com/baggie11/Hangman_Game.git",
    visitLink: "https://hangman-game-tau-two.vercel.app/",
    tools: "HTML, CSS, JS"
  },
  {
    id: 6,
    name: "Language Translator",
    description: "This Language Translator app allows you to translate text or speech between multiple languages. It supports both text input and speech recognition, offering translations powered by Google Translate. Additionally, it provides text-to-speech for listening to translations in your chosen language.",
    demoLink: "https://github.com/baggie11/Mini-Projects.git",
    visitLink: "",
    tools: "Streamlit, Python"
  }
];

export const certificationsData = [
  {
    id : 1,
    name : "Programming in Java",
    issuedBy:"NPTEL",
    link : "certificates/Programming in Java.jpg"
  },
  {
    id : 2,
    name : "OpenCV Bootcamp",
    issuedBy : "OpenCV University",
    link :"certificates/OpenCV Certificate.png"
  },
  {
    id : 3,
    name : "The Modern Javascript for Beginners",
    issuedBy : "Udemy",
    link : "certificates/js.jpeg"

  },
  {
    id : 4,
    name : "SAWIT.AI Learnathon",
    issuedBy : "Guvi",
    link : "certificates/guvi.png"
  }
]

export const roles = [
  {
    id : 1,
    name : "Campus Ambassador",
    org:"Geeks for Geeks",
    description : "",
    time : "",

  }
]

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
 // { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/baggie11",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bagavati-narayanan-98484b292",
    icon: "linkedin",
    newTab: true,
  },

  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
  {
    label : "Certifications",
    link : "/certifications",
    icon : "certifications",
    newTab : false
  },
  {
    label : "Blog",
    link : "https://bagsspace.hashnode.dev/",
    icon : "blog",
    newTab : true
  }
];


