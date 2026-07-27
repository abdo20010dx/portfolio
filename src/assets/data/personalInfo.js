import rms from '../images/projects/rms.png'
import staywo from '../images/projects/staywo.png'
import frusiya from '../images/projects/frusiya.png'
import satafood from '../images/projects/satafood.png'
import eradaFintech from '../images/projects/erada-fintech.png'
import aiAgentChat from '../images/projects/ai-agent-chat.png'
import ssoAdminPanel from '../images/projects/sso-admin-panel.png'
import paymentGateway from '../images/projects/payment-gateway-service.png'
import loanWorkflow from '../images/projects/loan-workflow.png'


import news1 from '../images/example/news1.png'
import news2 from '../images/example/news2.png'
import news3 from '../images/example/news3.png'
import news4 from '../images/example/news4.png'
import news5 from '../images/example/news5.png'
import news6 from '../images/example/news6.png'
import news7 from '../images/example/news7.png'
import news8 from '../images/example/news8.png'

///////////////////////////////////////
import commerce1 from '../images/example/commerce1.png'
import commerce2 from '../images/example/commerce2.png'
import commerce3 from '../images/example/commerce3.png'
import commerce4 from '../images/example/commerce4.png'
import commerce5 from '../images/example/commerce5.png'
import todograph from '../images/example/todograph.png'
//////////////////////////////////////////////
import chatai from '../images/example/cahtai.png'
//////////////////////////////////////////////
import devops1 from '../images/example/SCREENSHOT01.png'
import devops2 from '../images/example/SCREENSHOT02.png'
import devops3 from '../images/example/SCREENSHOT03.png'
import devops4 from '../images/example/SCREENSHOT04.png'
import devops5 from '../images/example/SCREENSHOT05.png'
import devops6 from '../images/example/SCREENSHOT06.png'
import devops7 from '../images/example/SCREENSHOT07.png'
import devops8 from '../images/example/SCREENSHOT08.png'
import devops9 from '../images/example/SCREENSHOT09.png'
import devops10 from '../images/example/SCREENSHOT10.png'
import devops11 from '../images/example/SCREENSHOT11.jpg'
import devops12 from '../images/example/SCREENSHOT12.jpg'
import { certificatesData } from './certificates'

const newsPics = [news7, news1, news2, news3, news4, news5, news6, news8]
const news = newsPics[Math.floor(Math.random() * newsPics.length)];
const commercePics = [commerce1, commerce2, commerce3, commerce4, commerce5]
const commerce = commercePics[Math.floor(Math.random() * commercePics.length)];
const devopsPics = [devops1, devops2, devops3, devops4, devops5, devops6, devops7, devops8, devops9, devops10, devops11, devops12]
const devops = devopsPics[Math.floor(Math.random() * devopsPics.length)];

export const personalInfo = {
  personalProfile: [
    {
      firstName: "Abdelrahman",
      lastName: "Gomaa",
      occupation: "Back-end & Full-stack Developer",
      city: "Cairo",
      country: "Egypt",
      email: "abdo20010d0@gmail.com",
      phone: "+201151761416",
      socialMediaLinks: {
        linkedInUrl: "https://www.linkedin.com/in/abdo-gomaa-672763119",
        githubUrl: "https://github.com/abdo20010dx",
      },
    },
  ],
  education: [
    {
      id: 3,
      schoolName: `Cairo University`,
      degree: `Master's Degree in Software Engineering`,
      speciality: `Thesis phase, expected graduation 2027`,
      city: "Cairo",
      year: {
        start: "2023",
        end: "present",
      },
    },
    {
      id: 2,
      schoolName: `Alexandria University`,
      degree: `Bachelor's Degree In management information systems`,
      speciality: `The Faculty of business`,
      city: "Alexandria",
      year: {
        start: "2018",
        end: "2021",
      },
    },
  ],

  jobs: [
    {
      id: "job5",
      title: "Full-stack Developer",
      company: "Erada Finance",
      type: "full-time",
      year: {
        start: "2024",
        end: "present",
      },
      city: "Cairo",
      description: [
        "Own REST API payment gateway integrations and connections with third-party payment aggregators for the company's lending platform.",
        "Contribute to xfin, an internal loan management system, supporting loan origination, guarantor, and repayment workflows.",
        "Design and build a WebSocket-powered AI agent (chat-based, LLM-integrated) that helps stakeholders analyze loan performance, user profiles, and profitability.",
        "Building backend services using Node.js, Java, and Spring Boot, and frontend applications with Angular",
        "Implementing CI/CD pipelines with Jenkins and containerizing applications with Docker",
        "Configuring Nginx for reverse proxy/load balancing and monitoring with Prometheus, Alertmanager, and Grafana",
      ],
    },
    {
      id: "job4",
      title: "Senior Backend Developer",
      company: "Sata Technology",
      type: "full-time",
      year: {
        start: "2023",
        end: "2024",
      },
      city: "Cairo",
      description: [
        "Built backend services powering a food ordering and delivery platform across 4 connected apps: customer, vendor, driver, and dashboard.",
        "Implemented live GPS order tracking, giving customers and drivers real-time visibility into delivery status.",
        "Coordinated RESTful API contracts and RabbitMQ message queuing across the vendor, driver, and dashboard teams to keep the multi-app platform consistent end-to-end.",
      ],
    },
    {
      id: "job2",
      title: "Backend Developer",
      company: "Dafa",
      type: "full-time",
      year: {
        start: "2022",
        end: "2023",
      },
      city: "Giza",
      description: [
        "Built RESTful and SOAP-based backend services for Frusiya, an equestrian ticketing and e-commerce platform.",
        "Worked on apps related to the activities of the international horse race held at King Abdulaziz Racetrack in Riyadh, Saudi Arabia. It is the richest horse race ever held, with a $20 million purse, and the main highlight race of the Saudi Cup Night.",
        "Applied secure transaction-handling practices to checkout and ticketing flows while working at a payments-focused company.",
      ],

    },
    {
      id: "job3",
      title: "Full Stack Developer (Part-time, Remote)",
      company: "Digital Zone",
      type: "part-time",
      year: {
        start: "2022",
        end: "2023",
      },
      city: "Cairo",
      description: [
        "Continued supporting Digital Zone part-time and remotely after moving into a full-time role at Dafa.",
        "Maintained and extended the restaurant management, inventory, and dashboard systems built during the earlier full-time engagement.",
        "Built a web scraping tool with automated Excel export, cutting manual data-entry work in the client's reporting process.",
      ],
    },
    {
      id: "job1",
      title: "Full Stack Developer (Full-time, Remote)",
      company: "Digital Zone",
      type: "full-time",
      year: {
        start: "2021",
        end: "2022",
      },
      city: "Cairo",
      description: [
        "Built 3 systems from scratch: a restaurant management dashboard, an inventory/stock management system, and a point-of-sale module.",
        "Delivered a multi-vendor e-commerce solution covering catalog browsing and order placement.",
        "Designed ERDs and built server-side APIs with custom third-party integrations.",
      ],
    },
  ],

  skills: {
    codingSkills: [
      {
        id: "skills1",
        category: "Front-End",
        languages: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React JS",
          "React Hooks",
          "React Router",
          "Redux",
          "REST APIs",
          "Material UI",
          "Bootstrap",
          "Next.JS"
        ],
      },
      {
        id: "skills2",
        category: "Back-End",
        languages: ["Nest.JS", "Node.JS", "Java", "Spring-Boot", "REST APIs", "GraphQl", "websocket", "RabbitMQ", "swagger"],
      },
      {
        id: "skills3",
        category: "Databases",
        languages: ["PostgreSQL", "MySql", "mongodb", "mongoose", "migration", "orm (typeorm , prisma)"],
      },
      {
        id: "skills4",
        category: "Source Control",
        languages: ["Git", "GitHub"],
      },
      {
        id: "skills5",
        category: "AI & Tools",
        languages: ["Prompt Engineering", "AI Tools"],
      },
    ],
    languages: [
      {
        id: "lang1",
        title: "Arabic",
        level: "mother tongue",
      },
      {
        id: "lang2",
        title: "English",
        level: "Professional",
      },
    ],
    softSkills: [
      `Communication`,
      `Collaboration`,
      `Problem-Solving`,
      `Organizational Skills`,
      `Time Management`,
      `Adaptability`,
    ],

    courses: certificatesData,
  },

  projects: [
    {
      title: "xfin - loan management platform",
      // proprietary employer system — no public link
      image: eradaFintech,
      description: `
      An internal loan management system supporting loan origination, guarantor, and repayment workflows for a fintech lending platform.
      My role: at Erada Finance, I contribute to xfin using Node.js, NestJS, Java/Spring Boot, and Angular.
      `,
    },
    {
      title: "Payment gateway service (Spring Boot)",
      // proprietary employer system — no public link
      image: paymentGateway,
      description: `
      A backend payment gateway service handling transaction processing and integrations with multiple third-party payment aggregators for a fintech lending platform.
      My role: at Erada Finance, I own this service's REST API integrations with third-party payment aggregators, built with Java and Spring Boot.
      `,
    },
    {
      title: "Loan workflow & case management system",
      // proprietary employer system — no public link
      image: loanWorkflow,
      description: `
      An internal system that manages the day-to-day flow of loan applications through their pipeline. Employees can accept or reject loan cases, change their status (new, under review, approved, rejected, disbursed), and reassign a case's loan officer, branch, or team leader.
      My role: at Erada Finance, I built this workflow and case management tool using Node.js/NestJS and Angular.
      `,
    },
    {
      title: "AI agent (chat) for loan & profitability analysis",
      // proprietary employer system — no public link
      image: aiAgentChat,
      description: `
      A separate chat-based AI agent app, integrated with an LLM, that lets stakeholders ask natural-language questions and get instant analysis of loan performance, user profiles, and profitability.
      My role: at Erada Finance, I designed and built this WebSocket-powered AI agent from scratch as its own application alongside the xfin platform.
      `,
    },
    {
      title: "SSO admin panel - users, authorities & screens",
      // proprietary employer system — no public link
      image: ssoAdminPanel,
      description: `
      An internal SSO (Single Sign-On) admin panel for managing users, authorities (roles/permissions), and screens across the company's internal systems, with full CRUD operations on each — add, edit, and remove users, permission sets, and the screens/actions they're granted access to.
      My role: at Erada Finance, I built this access-control panel using Node.js/NestJS and React.js.
      `,
    },
    {
      title: "restaurant management system",
      // githubUrl: "#",
      url: "http://104.248.47.7/",
      image: rms,
      description: `
      Restaurant Management System and Small and Medium Enterprises Management
      The Mofwter system is an integrated system that can meet the needs of restaurants in addition to managing small and medium-sized companies in a smooth and easy-to-use manner for customers.
      ............
      Best Solutions for All Restaurant Types
      We offer comprehensive solutions for managing restaurants of various sizes, ranging from cafes and small restaurants to large chains and upscale dining establishments. We understand the importance of effective restaurant management to achieve success and meet customer needs.
      ............
      My role: built 3 systems from scratch at Digital Zone — this restaurant management dashboard, an inventory/stock management system, and a point-of-sale module — using Node.js, NestJS, and React.js.
      `,
    },
    {
      title: "online booking hotels ,  properties ",
      // githubUrl: "#",
      url: "https://www.staywo.com/",
      image: staywo,
      description: "Online booking platform for hotels and properties — a rental property B2C provider connecting hosts with travelers so they can find and book a rental property wherever they go. My role: built booking and reservation workflows for this platform as a freelance NestJS developer at Staywo.",
    },

    {
      title: "frusiya websites for horses races in ksa",
      // githubUrl: "#",
      url: "https://www.frusiya.com/index.php?language=en",
      image: frusiya,
      description: "Frusiya is related to the activities of the international horse race held at King Abdulaziz Racetrack in Riyadh, Saudi Arabia — the richest horse race ever held, with a $20 million purse, and the main highlight race of the Saudi Cup Night. My role: at Dafa, I built RESTful and SOAP-based backend services for this equestrian ticketing and e-commerce platform, covering competition tickets, club memberships, and horse/jockey merchandise, applying secure transaction-handling practices to checkout and ticketing flows."
    },
    {
      title: "e-commerce and online food ordering company ",
      // githubUrl: "#",
      url: "https://www.sata-food.com/en",
      image: satafood,
      description: `
      It is a new, innovative and advanced technology in the food industry and supermarkets, and we deliver medicines through its basic system via smart phones.
      .............
      Why Order From Sata Food ?
      Throughout saving multiple perks for both users and providers. About users, The company displays a broad collection of restaurants, supermarkets, and pharmacies for SATA FOOD users to choose the best Moreover, spot delivery with a low cost. In addition to offering discount coupons and gifts continuously.
      .............
      My role: at Sata Technology Group, I built backend services powering this food ordering and delivery platform across 4 connected apps (customer, vendor, driver, dashboard), implemented live GPS order tracking for real-time delivery visibility, and coordinated RESTful API contracts and RabbitMQ message queuing across the vendor, driver, and dashboard teams.
              `,
    },
    {
      title: "News worldwide website | latest news | sports | national| tech | business | etc...",
      // githubUrl: "#",
      // url: "#",
      image: news,
      description: `
      using reactjs ,material ui, nextjs , nestjs , orm (typeorm) , database (postgres) , swagger api docs  for rest api,
      a world news website is a digital platform that provides timely and relevant news coverage on global events and issues, aiming to inform and engage readers from around the world.
      
      `,
    },
    {
      title: "e-commerce website where you can buy and sell and purchase orders online",
      githubUrl: "https://github.com/abdo20010dx/e-commerce-example",
      // url: "#",
      image: commerce,
      description: `
      using ejs , bootstrap ,mongoose ,mongodb , nodejs ...
      creating a sample e-commerce website where you can  buying and selling of goods, products, or services over the internet or other electronic networks. It involves conducting commercial transactions electronically, without the need for physical interactions between buyers and sellers.

`,
    },
    {
      title: "Deploy frontend , backend to aws using CI/CD tools",
      githubUrl: "https://github.com/abdo20010dx/udapeople-cicd",
      // url: "#",
      image: devops,
      description: `
      Deploy frontend , backend to aws using CI/CD tools
      DevOps ci/cd with Prometheus/ ansible / circle ci , aws / alert manager,
`,
    },
    {
      title: "sample todo graphql backend",
      githubUrl: "https://github.com/abdo20010dx/todolist",
      // url: "#",
      image: todograph,
      description: `
      using nestjs , typeorm (mysql) ,graphql docs  ...
      creating a sample todo graphql backend  

`,
    }, {
      title: "sample Chat Ai",
      githubUrl: "https://github.com/abdo20010dx/chat-ai",
      // url: "#",
      image: chatai,
      description: `
      using nestjs , ejs , bootstrap , open ai   ...
      creating a sample chat ai integration 

`,
    },



  ],
  hobbies: [
    "Technology",
    "Watching Movies",
    "Football",
    "Playstation",
    "Running",
    "Chess",
  ],
};
