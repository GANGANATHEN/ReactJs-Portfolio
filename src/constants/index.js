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
  weather,
  calci,
  tripguide,
  threejs,
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
    name: "Weather App",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/GREENGANGA/Django-Weather-App",
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
  },
  {
    name: "Portfolio",
    tags: [
      {
        name: "Reactjs",
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
    image: tripguide,
    source_code_link: "https://github.com/GREENGANGA/ReactJs-Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
