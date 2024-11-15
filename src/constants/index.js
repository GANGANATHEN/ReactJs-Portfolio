import {
  rjsdev,
  jadev,
  pydev,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  python,
  ibm,
  aws,
  cisco,
  redhat,
  uomcodl,
  devtown,
  eminent,
  threejs,
  appleimg,
  calci,
  ganganathan,
  sociallink,
  qrcode,
  scoreboard,
  grade,
} from "../assets";
// add a Certificate proof link
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: rjsdev,
  },
  {
    title: "Java Developer",
    icon: jadev,
  },
  {
    title: "Python Developer",
    icon: pydev,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Web Design for Beginners",
    company_name: "University of Moratuwa, Sri Lanka",
    icon: uomcodl,
    iconBg: "#F0F8FF",
    date: "Web Design Course",
  },
  {
    title: "JavaScript Essentials 1 Course",
    company_name: "Cisco Networking Academy",
    icon: cisco,
    iconBg: "#F0F8FF",
    date: "CISCO JavaScript Course",
  },
  {
    title: "Front End Web Development with React JS & JavaScript",
    company_name: "devtown",
    icon: devtown,
    iconBg: "#F0F8FF",
    date: "Bootcamp",
  },
  {
    title: "Web Developement",
    company_name: "Eminent",
    icon: eminent,
    iconBg: "#F0F8FF",
    date: "Internship Training",
  },
  {
    title: "IBM Data Science Professional Certificate",
    company_name: "Coursera",
    icon: ibm,
    iconBg: "#F0F8FF",
    date: "Data Science",
  },
  {
    title: "AWS Academy Cloud Architecting Certificate",
    company_name: "AWS Academy",
    icon: aws,
    iconBg: "#F0F8FF",
    date: "Cloud Architecting",
  },
  {
    title: "RedHat Training Certificate",
    company_name: "RedHat",
    icon: redhat,
    iconBg: "#F0F8FF",
    date: "RedHat",
  },
];

const testimonials = [
  {
    testimonial:
      "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
    name: "Waldo Emerson",
    designation: "Essayist",
    company: "An American",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "I start with the premise that the function of leadership is to produce more leaders, not more followers.",
    name: "Ralph Nader",
    designation: "Author",
    company: "An American",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Everything you’ve ever wanted is on the other side of fear.",
    name: "George Addair",
    designation: "Real-estate developer",
    company: "post Civil War Atlanta",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "iPhone 15 Pro",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "sentry",
        color: "green-text-gradient",
      },
    ],
    image: appleimg,
    source_code_link: "https://github.com/GANGANATHEN/Project_React",
    url:"https://ganganathan-pple.netlify.app",
  },
  {
    name: "Calculator",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: calci,
    source_code_link: "https://github.com/GREENGANGA/normalcalc",
    url:"https://ganganathan-calculator.netlify.app",
  },
  {
    name: "Portfolio",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ganganathan,
    source_code_link: "https://github.com/GREENGANGA/ReactJs-Portfolio",
    url:"ganganathan.netlify.app/",
  },
  {
    name: "Social Link",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sociallink,
    source_code_link: "https://github.com/GANGANATHEN/social-links-profile-main",
    url:"https://ganganathan-social-links-profile-man.netlify.app",
  },
  {
    name: "Qr code",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: qrcode,
    source_code_link: "https://github.com/GREENGANGA/qr-code-component-main",
    url:" https://ganganathan-qr-code-componant.netlify.app/",
  },
  {
    name: "score board",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: scoreboard,
    source_code_link: "https://github.com/GANGANATHEN/Score-board",
    url:"https://ganganathancricketscoreboard.netlify.app",
  },
  {
    name: "Grade Calculator",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: grade,
    source_code_link: "https://github.com/GANGANATHEN/Grade-Calculator",
    url:"https://ganganathangradecal.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
