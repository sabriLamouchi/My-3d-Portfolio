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
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    shoesTrunk,
    AnimeVault,
    NetflixClone,
    NextJs,
    jobit,
    sabriSaas
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
  ];
  
  export { services, technologies, experiences, testimonials, projects };