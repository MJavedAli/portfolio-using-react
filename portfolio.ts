import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  Awards,
  CertificationsType,
} from './types/sections';

export const greetings: GreetingsType = {
 name: 'Javed Ali',
title: "Hi, I'm Javed",
description:
  "Principal Engineer at Oracle, driving large-scale software systems, cloud infrastructure, and intelligent automation. With over a decade of hands-on experience across distributed systems, MLOps, and enterprise DevOps, I focus on building resilient, high-performance architectures. Outside work, I’m passionate about space exploration, emerging technologies, cricket analytics, and comparative theology.",
  resumeLink:
    'https://drive.google.com/file/d/1JjuUPjCe2CrcFCiPP0Zq_yQa5R6cdtg6/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'MJavedAli',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
	url: "https://javed-ali.vercel.app/",
	linkedin: "https://www.linkedin.com/in/javedalix/",
	github: "https://github.com/MJavedAli",
	twitter: "https://twitter.com/javedalix",
	xing: "https://www.xing.com/profile/Javed_Ali10",
};

export const skillsSection: SkillsSectionType = {
title: 'What I Do',
subTitle: 'ENGINEERING SCALABLE SYSTEMS ACROSS CLOUD, AI & FULL-STACK DOMAINS',
data: [
  {
    title: 'Full Stack & Distributed Systems Engineering',
    lottieAnimationFile: '/lottie/skills/fullstack.json',
    skills: [
      emoji('⚡ Architecting scalable, high-performance web applications using React.js and Next.js'),
      emoji('⚡ Designing event-driven microservices and APIs with Python & Java stack'),
      emoji('⚡ Optimizing system reliability, latency, and throughput in distributed architectures'),
    ],

      softwareSkills: [
        {
					skillName: "Angular",
					iconifyTag: "logos:angular-icon",
				},
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
					skillName: "NodeJS",
					iconifyTag: "logos:nodejs",
				},
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud-Native Architecture & MLOps',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Architecting resilient, multi-cloud infrastructures across AWS, Azure, and OCI for enterprise-scale systems'),
        emoji('⚡ Designing infrastructure-as-code (IaC) frameworks with Terraform & Helm for high-availability, scalable deployments'),
        emoji('⚡ Implementing end-to-end CI/CD pipelines with GitHub Actions, Kubernetes, and automated observability dashboards'),
        emoji('⚡ Integrating MLOps workflows and IoT data pipelines into cloud platforms for real-time AI-driven analytics'),
      ],

      softwareSkills: [
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
      
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend & UX Engineering',
    progressPercentage: '85', // Expert in React, Angular, and complex UI/UX frameworks
  },
  {
    Stack: 'Backend & Distributed Systems',
    progressPercentage: '80', // Python microservices, Spring Boot, event-driven architectures
  },
  {
    Stack: 'Cloud & Cloud-Native Architecture',
    progressPercentage: '80', // Multi-cloud, IaC, scalable deployments, MLOps pipelines
  },
  {
    Stack: 'DevOps, MLOps & SRE',
    progressPercentage: '75', // CI/CD, automated observability, real-time AI pipelines, fault-tolerant systems
  },
];


export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Technology, West Bengal",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "July 2009 - June 2013",
    desc: "Specialized in Algorithms, Data Structures, Software Engineering, OOP, Data Mining, AI, and Machine Learning, building a strong foundation for large-scale system design and intelligent applications.",
    grade: "CGPA: 7.58 – First Class (cum laude equivalent)",
  },
  {
    schoolName: "Maria's Day School",
    subHeader: "Senior Secondary Education",
    duration: "April 2007 - March 2009",
    desc: "Focused on Physics, Chemistry, Mathematics, and Computer Science, laying the groundwork for analytical thinking and problem-solving in technology domains.",
    grade: "90.4% – Distinction",
  },
];


// export const experience: ExperienceType[] = [
//   {
//     role: "Principal Engineer",
//     company: "Oracle",
//     companyLogo: "/img/icons/common/oracle.png",
//     date: "May 2024 - Present",
//     desc: "Working closely with Program Managers to make sure the test coverage is accurate and ensures all functional aspects of the code delivered have been addressed and testing is making progress with respect to the plan.",
//     descBullets: [
//       " Developed & deployed containerized action runners based on custom image for GitHub workflows on Azure Cloud and scaled up as per demand using Helm Charts",
//       "Customised workflow templates for different projects requiring special rules and reportable values",
//     ],
//   },
//     {
//       role: "Lead Software Engineer",
//       company: "Software AG",
//       companyLogo: "/img/icons/common/sag.jpg",
//       date: "Nov 2020 - Apr 2024",
//       desc: "Working closely with Program Managers to make sure the test coverage is accurate and ensures all functional aspects of the code delivered have been addressed and testing is making progress with respect to the plan.",
//       descBullets: [
//         " Developed & deployed containerized action runners based on custom image for GitHub workflows on Azure Cloud and scaled up as per demand using Helm Charts",
//         "Customised workflow templates for different projects requiring special rules and reportable values",
//       ],
//     },
//     {
//       role: "Senior Associate",
//       company: "Cognizant",
//       companyLogo: "/img/icons/common/cognizant.jpg",
//       date: "Apr 2019 – Nov 2020",
//       desc: " As a part of CoE team member played pivotal role for the development of a tool-agnostic Unified Automation Framework accommodating Selenium and Coded UI APIs.",
//       descBullets: [
//         "Integrated third-party application APIs (One-Trust & ServiceNow) for ticket processing till completion, Implemented SFTP file validation,GH page integration for code documentation",
//         "Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
//       ],
//     },
//     {
//       role: "Senior Test Engineer",
//       company: "HCL Technologies",
//       companyLogo: "/img/icons/common/hcl.jpg",
//       date: "Oct 2016 – Apr 2019",
//       desc: "Worked as Software Developer for major Telecom clients,Involved in integration and testing of real-time network technology IN, NAP, pre-paid services, charging and policy.",
//       descBullets: [
//         "Developed UI components for email and link sharing of documents and files for CMS using Angular 8, HTML, CSS, JavaScript, Bootstrap, and jQuery",
//         "Worked with axios library to make API calls to backend services and used Jasmine and Karma for unit testing",
//       ],
//     },
//     {
//       role: "Member Technical Staff",
//       company: "First American India",
//       companyLogo: "/img/icons/common/fai.jpg",
//       date: "Aug 2013 – Oct 2016",
//       desc: "Worked as MTS in RnD team for the development of a file management application of the company's internal data.",
//       descBullets: [
//         "Integrated Title and Settlement Transactions system - flagship product and business backbone of the organization supporting over 100+ other Title Products with over 20,000 internal users in over 40+ countries.",
//         "Primarily engaged in creation of re-usable and standard automation scripts and SQL Reporting Library",
//       ],
//     },
//   ];
export const experience: ExperienceType[] = [
  {
    role: "Principal Engineer",
    company: "Oracle",
    companyLogo: "/img/icons/common/oracle.png",
    date: "May 2024 - Present",
    desc: "Driving large-scale distributed system design, AI platform integration, and full-stack modernization across global cloud environments.",
    descBullets: [
      "Architected high-performance distributed systems using Python microservices and event-driven design — enabling 10x scalability under heavy analytical workloads.",
      "Drove AI-assisted DevOps observability using real-time anomaly detection and predictive scaling — cutting unplanned downtime across production clusters.",
      "Defined architectural blueprints for large-scale data ingestion pipelines integrating AI inference, API gateways, and serverless compute for cost-efficient cloud operations.",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Software AG",
    companyLogo: "/img/icons/common/sag.jpg",
    date: "Nov 2020 - Apr 2024",
    desc: "Led IoT platform engineering, MLOps architecture, and full-stack delivery for globally deployed connected intelligence systems.",
    descBullets: [
      "Designed and led the implementation of a multi-tenant IoT analytics platform ingesting millions of sensor events per minute across edge, cloud, and on-prem environments.",
      "Integrated ML-driven anomaly detection into IoT data streams, enabling predictive maintenance and adaptive alerting across industrial clients.",
      "Drove CloudOps transformation — migrated workloads to containerized infrastructure with Helm and Terraform, achieving 60% faster release cycles.",
    ],
  },
  {
    role: "Senior Associate",
    company: "Cognizant",
    companyLogo: "/img/icons/common/cognizant.jpg",
    date: "Apr 2019 – Nov 2020",
    desc: "Delivered distributed backend and AI-powered front-end platforms driving enterprise data intelligence and system scalability.",
    descBullets: [
      "Built distributed event-driven backend for large-scale enterprise platform integrating Python microservices and Kafka-based message orchestration.",
      "Engineered dynamic visualization dashboards using React and D3.js for streaming data — turning operational telemetry into actionable insights.",
      "Optimized cloud infrastructure and caching strategy, cutting response latency from 1.2s to 300ms at scale.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HCL Technologies",
    companyLogo: "/img/icons/common/hcl.jpg",
    date: "Oct 2016 – Apr 2019",
    desc: "Developed and scaled enterprise-grade full-stack and UX systems with distributed backend integrations for telecom and enterprise clients.",
    descBullets: [
      "Built rich Angular and React frontends powering telecom analytics dashboards and live service control panels with complex state management.",
      "Redesigned legacy backend APIs into modular Python and Spring Boot services, improving maintainability and horizontal scalability.",
      "Implemented caching, data-streaming, and queuing mechanisms to handle millions of concurrent network events reliably.",
    ],
  },
  {
    role: "Member Technical Staff",
    company: "First American India",
    companyLogo: "/img/icons/common/fai.jpg",
    date: "Aug 2013 – Oct 2016",
    desc: "Built distributed document and transaction management platforms and modern front-end ecosystems.",
    descBullets: [
      "Engineered distributed document processing pipeline handling millions of files daily with asynchronous job orchestration and data validation layers.",
      "Built advanced UI modules for internal users with React and Angular — optimizing data-heavy screens through virtualized rendering and state hydration.",
    ],
  },
];

  export const certificates: CertificationsType[] = [
    {
      role: "AWS Certified Solutions Architect",
      company: "AWS",
      companyLogo: "/img/CSA.png",
      desc: "see credential",
      credentialUrl: "https://www.credly.com/badges/985ba784-c5c7-4d01-9bfb-fd48d4bbf940"
    },
      {
        role: "AWS Certified Developer",
        company: "AWS",
        companyLogo: "/img/DVA.png",
        desc: "see credential",
      credentialUrl: "https://www.credly.com/badges/5674e7ee-30b7-44c1-904e-c54b79eb3424"
      },
      {
        role: "Oracle Cloud Infrastructure Foundation Associate",
        company: "Oracle",
        companyLogo: "/img/OCI.png",
        desc: "see credential",
        credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4B1F21F0F4D90584B8C6280E790EA85ABA49DBEA3FBF5275BB09E2F964EDC074"
      },
      {
        role: "GitOps - Continuous Delivery on Kubernetes with Flux",
        company: "The Linux Foundation",
        companyLogo: "/img/LFS269.png",
        desc: "see credential",
        credentialUrl: "https://www.credly.com/badges/fc33c6bb-20f4-4508-81fe-5388828a48c3"
      },
      {
        role: "DevOps and SRE Fundamentals",
        company: "The Linux Foundation",
        companyLogo: "/img/LFS261.png",
        desc: "see credential",
        credentialUrl: "https://www.credly.com/badges/f7a9e9bf-7071-46fd-91d5-d67ebd909e3b"
      },
      {
        role: "Jenkins Essentialsx",
        company: "The Linux Foundation",
        companyLogo: "/img/LFS267.png",
        desc: "see credential",
      credentialUrl: "https://www.credly.com/badges/7b3aa92f-4693-4d5e-a7a9-ccb31da990b9"
      },
      {
        role: "Implementing DevSecOps",
        company: "The Linux Foundation",
        companyLogo: "/img/LFS262.png",
        desc: "see credential",
      credentialUrl:"https://www.credly.com/badges/94552d4e-0888-460f-a8a0-153281a4962d"
      },
      {
        role: "CI/CD with Jenkins X",
        company: "The Linux Foundation",
        companyLogo: "/img/LFS268.png",
        desc: "see credential",
        credentialUrl: "https://www.credly.com/badges/ e50bfa5d-4683-403f-9f6d-699dc19f60f0"
      },
    ];
  
export const awards: Awards[] = [
    {
    name: "Oracle Vanguard Recognition 2025",
    desc: "Honored for pioneering large-scale distributed AI infrastructure and advancing enterprise cloud reliability through autonomous scaling frameworks.",
  },
  	{
		name: "Tech Interrupts Global - Winners",
		desc:
			"Won the Global Finals of Software AG's Tech Interrupts Hackathon 2021 with a team of 4 members",
	  },
	{
		name: "Tech Interrupts Global - Winners",
		desc:
			"Won the Global Finals of Software AG's Tech Interrupts Hackathon 2021 with a team of 4 members",
	},
  {
    name: "Best UI/UX Implementation – Cognizant Innovations",
    desc: "Won for delivering a unified front-end framework, reducing cognitive friction and achieving 50% faster enterprise user adoption.",
  },
	{
		name: "Software AG. UX Design Knockout, Finalist",
		desc:
			"Amongst top 6 finalists in India, May 2022 ",
	},

	{
		name: "2X HCL Spot Award",
		desc:
			"HCL Spot Award for being the top performer in the team for the month of July 2018",
	},
	
];


export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Javed Ali',
  description:
    'A passionate Full Stack Developer & Cloud Specialistr.',
  author: 'Javed Ali',
	image: "https://avatars.githubusercontent.com/u/30997178?v=4",
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Javed Ali',
    'Javed Ali',
    '@javedalix',
    'MJavedAli',
    'Portfolio',
    'Javed Portfolio ',
    'Javed Ali Portfolio',
  ],
};
