import {
    mobile,
    backend,
    designer,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    laravel,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    php,
    threejs,
    shoesTrunk,
    AnimeVault,
    NetflixClone,
    NextJs,
    jobit,
    sabriSaas,
    freelance,
    isimg,
    petpair,
    travelGO,
    plani
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic designer",
      icon: designer,
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
      name: "Php",
      icon: php,
    },
    {
      name: "Laravel",
      icon:laravel,
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
      name: "figma",
      icon: figma,
    },
    {
      name:"NextJs",
      icon:NextJs
    }

  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "MARS 2024 - until Now",
      points: [
        "Developing and maintaining mobile application with react native .",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform which IOS and ANDROID compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "freelace",
      icon: NextJs,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using NEXT.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "software engineer",
      company_name: "ISIMG",
      icon: isimg,
      iconBg: "#E6DEDD",
      date: "oct 2023 - Present",
      points: [
        "I am currently enrolled in the esteemed software engineering program at ISIMG (Institut Supérieur d'Informatique et de Multimédia de Gabès). This renowned institution provides a conducive learning environment where I am equipped with the knowledge, skills, and resources necessary to thrive in the realm of software engineering.",
        "In addition to academic rigor, ISIMG places a strong emphasis on professional development. Through workshops, seminars, and industry collaborations, I am gaining valuable insights into industry trends, best practices, and emerging technologies. These opportunities not only augment my academic learning but also prepare me for a successful career in software engineering",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but sabri proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like sabri does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After sabri optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ShoesTrunk ",
      description:
        "e-commerce website , its allow u to buy diffrent Nike shoes ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Json APi ",
          color: "green-text-gradient",
        },
        {
          name: "Css ",
          color: "pink-text-gradient",
        },
      ],
      image: shoesTrunk,
      source_code_link: "https://github.com/sabriLamouchi/shoesTrunk-Project",
      live_link:"https://sabrilamouchi.github.io/shoesTrunk-Project/"
    },
    {
      name: "Anime Vault ",
      description:
        "Web application that enables users to search for any kind of anime and Read On it ",
      tags: [
        {
          name: "Next Js ",
          color: "text-neutral-500",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restApi",
          color: "green-text-gradient",
        },
        {
          name: "typeScript",
          color: "blue-text-gradient",
        },
      ],
      image: AnimeVault,
      source_code_link: "https://github.com/sabriLamouchi/anime-vault.git",
      live_link:"https://anime-vault-by-sabri-lamouchi.vercel.app/"
    },
    {
      name: "NetFlix-clone",
      description:
        "Web Application of netflix clone that allow the user to create an accounts to watch  movies.",
      tags: [
        {
          name: "Nextjs",
          color: "text-neutral-500",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "text-blue-400",
        },
        {
          name: "nextAuth",
          color: "text-neutral-500",
        },
        {
          name: "typeScript",
          color: "blue-text-gradient",
        },
      ],
      image: NetflixClone,
      source_code_link: "https://github.com/sabriLamouchi/Netflix-clone.git",
      live_link:""
    },
    {
      name: "Job-It",
      description:
        "mobile application that allow you to search and find a perfect job to you with your experience and technologie you have",
      tags: [
        {
          name: "react native",
          color: "text-blue-400",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sabriLamouchi/job-it-app",
      live_link:""
    },
    {
      name: "Sabri-saas",
      description:
        "Saas application that allow you to Add Notes, View Notes,  Edit Notes, Delete Notes with a monthly  subsicription with stripe ",
      tags: [
        {
          name: "Nextjs",
          color: "text-neutral-500",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "text-blue-400",
        },
        {
          name: "Kinde",
          color: "text-neutral-500",
        },
        {
          name: "typeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "blue-text-gradient",
        },
      ],
      image: sabriSaas,
      source_code_link: "https://github.com/sabriLamouchi/sabri-saas-application.git",
      live_link:"https://sabri-saas.vercel.app/"
    },
    {
      name: "pet-pair",
      description:
        "PetPair connects pet owners with compassionate caregivers in their area. Swipe through profiles, chat with potential matches, and rest assured knowing your pet is in good hands with PetPair.",
      tags: [
        {
          name: "react native",
          color: "text-blue-500",
        },
        {
          name: "expo",
          color: "text-neutral-500",
        },
      ],
      image:petpair ,
      source_code_link: "#",
      live_link:"#"
    },
    {
      name: "Plani",
      description:
        "Plani is an intuitive app that simplifies event planning and participation. With its chat-based interface, users can effortlessly create and join events, making organizing and coordinating gatherings a breeze.",
      tags: [
        {
          name: "react native",
          color: "text-blue-500",
        },
        {
          name: "expo",
          color: "text-neutral-500",
        },
      ],
      image:plani,
      source_code_link: "#",
      live_link:"#"
    },
    {
      name: "Travel Go",
      description:
        "Travel Go is your ultimate companion for hassle-free hotel bookings worldwide. With just a few taps, find and reserve the perfect accommodation in any country, whether it's a luxury resort or a cozy budget hotel.",
      tags: [
        {
          name: "react native",
          color: "text-blue-500",
        },
        {
          name: "expo",
          color: "text-neutral-500",
        },
      ],
      image:travelGO,
      source_code_link: "https://github.com/sabriLamouchi/Travel-go-React-native-app.git",
      live_link:"#"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };