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
  title: "Hi I'm Javed",
  description:
    "I'm working as Principal Engineer at Oracle .I have a diversified experience in Software Development, Cloud Computing, Automation & DevOps. I love talking about Space, Technology, Cricket & Comparative Theology",
  resumeLink:
    'https://drive.google.com/file/d/1iYh16IyCHyWwSA_zpt4eYD68XFKp_Qsj/view?usp=drive_link',
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
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
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
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
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
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Cloud Computing',
    progressPercentage: '70',
  },
  {
    Stack: 'DevOps & SRE',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
		schoolName: "University of Technology, West Bengal",
		subHeader: "Bachelor of Technology in Computer Science",
		duration: "July 2009 - June 2013",
		desc: "Data Structure and Algorithms, Software Engineering, Computer Architecture, OOPs, Data Mining, Artificial Intelligence, Machine Learning, etc.",
		grade: "CGPA: 7.58",
	},
	{
		schoolName: "Maria's Day School",
		subHeader: "Senior Secondary Education",
		duration: "April 2007 - March 2009",
		desc: "Physics, Chemistry, Mathematics, Computer Science, English, etc.",
		grade: "89.4%",
	}
];

export const experience: ExperienceType[] = [
  {
    role: "Principal Engineer",
    company: "Oracle",
    companyLogo: "/img/icons/common/oracle.png",
    date: "May 2024 - Present",
    desc: "Working closely with Program Managers to make sure the test coverage is accurate and ensures all functional aspects of the code delivered have been addressed and testing is making progress with respect to the plan.",
    descBullets: [
      " Developed & deployed containerized action runners based on custom image for GitHub workflows on Azure Cloud and scaled up as per demand using Helm Charts",
      "Customised workflow templates for different projects requiring special rules and reportable values",
    ],
  },
    {
      role: "Lead Software Engineer",
      company: "Software AG",
      companyLogo: "/img/icons/common/sag.jpg",
      date: "Nov 2020 - Apr 2024",
      desc: "Working closely with Program Managers to make sure the test coverage is accurate and ensures all functional aspects of the code delivered have been addressed and testing is making progress with respect to the plan.",
      descBullets: [
        " Developed & deployed containerized action runners based on custom image for GitHub workflows on Azure Cloud and scaled up as per demand using Helm Charts",
        "Customised workflow templates for different projects requiring special rules and reportable values",
      ],
    },
    {
      role: "Senior Associate",
      company: "Cognizant",
      companyLogo: "/img/icons/common/cognizant.jpg",
      date: "Apr 2019 – Nov 2020",
      desc: " As a part of CoE team member played pivotal role for the development of a tool-agnostic Unified Automation Framework accommodating Selenium and Coded UI APIs.",
      descBullets: [
        "Integrated third-party application APIs (One-Trust & ServiceNow) for ticket processing till completion, Implemented SFTP file validation,GH page integration for code documentation",
        "Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
      ],
    },
    {
      role: "Senior Test Engineer",
      company: "HCL Technologies",
      companyLogo: "/img/icons/common/hcl.jpg",
      date: "Oct 2016 – Apr 2019",
      desc: "Worked as Software Developer for major Telecom clients,Involved in integration and testing of real-time network technology IN, NAP, pre-paid services, charging and policy.",
      descBullets: [
        "Developed UI components for email and link sharing of documents and files for CMS using Angular 8, HTML, CSS, JavaScript, Bootstrap, and jQuery",
        "Worked with axios library to make API calls to backend services and used Jasmine and Karma for unit testing",
      ],
    },
    {
      role: "Member Technical Staff",
      company: "First American India",
      companyLogo: "/img/icons/common/fai.jpg",
      date: "Aug 2013 – Oct 2016",
      desc: "Worked as MTS in RnD team for the development of a file management application of the company's internal data.",
      descBullets: [
        "Integrated Title and Settlement Transactions system - flagship product and business backbone of the organization supporting over 100+ other Title Products with over 20,000 internal users in over 40+ countries.",
        "Primarily engaged in creation of re-usable and standard automation scripts and SQL Reporting Library",
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
		name: "Tech Interrupts Global - Winners",
		desc:
			"Won the Global Finals of Software AG's Tech Interrupts Hackathon 2021 with a team of 4 members",
	},
	{
		name: "Quarterly Award",
		desc:
			"Customer Orentation Success Award for Q2 2021",
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
