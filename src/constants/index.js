import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  mysql,
  c,
  vb,
  java,
  angular,
  mhipcor,
} from "../assets";

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
    title: "HTML",
    icon: web,
  },
  {
    title: "JavaScript",
    icon: mobile,
  },
  {
    title: "React",
    icon: backend,
  },
  {
    title: "Three Js",
    icon: threejs,
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
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "vb",
    icon: vb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "React Js",
    icon: reactjs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Embarking on a self-study journey to learn React.js is a meaningful endeavor that holds the promise of transforming my understanding of web development. With React.js as my guide, I'm diving into the world of modern front-end technology, where I'll uncover the magic of building interactive and dynamic user interfaces.",
    ],
  },
  {
    title: "Visual Basic Developer",
    company_name: "Visual Basic",
    icon: vb,
    iconBg: "#E6DEDD",
    date: "",
    points: [
        " VB.NET journey, I started with the foundations learned in school, and over time, I honed my skills by dedicated practice. I've put my expertise to work by developing a comprehensive CRUD program using Windows Forms, while seamlessly integrating either Microsoft Access or MySQL as the database backbone. This integration has significantly amplified the program's capabilities and responsiveness.",
    ],
  },
  {
    title: "Angular",
    company_name: "LEENTech Netwrok Solutions OJT (Frontend Development - Training Outline)",
    icon: angular,
    iconBg: "#383E56",
    date: "March 2022 - June 2022",
    points: [
        "learn to create the front-end of websites by coding HTML, CSS, and JavaScript and use Git to track changes and collaborate with other developers.",
        "Angular 12 learn what is angular and learn basic things about angular courses",
        "Using the CSS Framework (Bootstrap 4) and https://reqres.in/ sample REST API, create a application with the following functionalities:",
        "Basic Registration and Login",
        "List all the user with pagination",
        "Viewing user details",
        "Create a user",
        "Update a user details",
        " Each action should have a alert message.",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "c OJT (Backend Development - Training Outline)",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2022",
    points: [
        "Fundamentals of Laravel",
        "Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database", 
        "Create a Restful API and use 3rd party tools to test API",
        "Create a project to manage companies and their employees. Mini-CRM.",
    ],
  },

  {
    title: "IT-STAFF",
    company_name: "METAL HARDWARE INDUSTRIAL PRODUCT CORPORATION",
    icon: mhipcor,
    iconBg: "#E6DEDD",
    date: "October 2022 - June 2023",
    points: [
        "Installing, configuring, and maintaining computer hardware, software applications, and operating systems to ensure optimal performance and reliability.",
        "Installation, configuration, and monitoring of Closed-Circuit Television (CCTV) systems to enhance security measures within the organization. Conducting regular maintenance and troubleshooting to ensure proper functioning of the CCTV infrastructure.", 
        "Basic Printer Troubleshooting: Providing basic troubleshooting support for printers, including resolving paper jams, printer connectivity issues, and print quality problems.",
        "Troubleshooting and resolving issues related to computer peripherals such as keyboards, mouse, monitors, and speakers. Repairing or replacing faulty peripherals.",
        "Responding to user inquiries and technical issues, providing timely support and resolutions. Assisting users with software installations, network connectivity, and troubleshooting common IT problems",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Spartan Boxing and Fitness Warehouse",
    description:
      "Web-based platform that allows customers to reserve, manage memberships, and view their accounts and transactions",
    tags: [
      {
        name: "HTML 5",
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
      {
        name: "PHP",
        color: "violet-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://spartanboxing.tech/",
  },
  {
    name: "Queueing System for SHS",
    description:
      "Web-based platform that help streamline processes, ensuring that students receive services in an organized and efficient manner. Whether it's waiting to meet with a counselor, accessing the library",
    tags: [
      {
        name: "HTLM 5",
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
      {
        name: "PHP",
        color: "violet-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://spartanboxing.tech/queueing/admin/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences,  projects };
// testimonials,