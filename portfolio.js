import emoji from "react-easy-emoji";

export const greetings = {
	name: "Javed Ali",
	title: "Hi, I'm Javed",
	description:
		"I'm working as a Lead Software Engineer at Software AG.I have a diversified experience in Software Development, Quality Engineering & DevOps.I am an open-source Enthusiast. I love to experiment and figure out ways to improve product quality. Driven by curiosity to learn & share new skills. I love talking about Space, Technology, Physics, Comparative Theology & Urdu as a Language",
	resumeLink:
		"https://drive.google.com/file/d/1zFYtkQNABuklmct6LejqRt3rcrcePSRE/view?usp=sharing",
};

export const openSource = {
	githubUserName: "MJavedAli",
};

export const contact = {};

export const socialLinks = {
	url: "https://www.javedali.tech",
	linkedin: "https://www.linkedin.com/in/javedalix/",
	github: "https://github.com/MJavedAli",
	twitter: "https://twitter.com/javedalix",
	xing: "https://www.xing.com/profile/Javed_Ali10",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Software Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) in Angular"
				),
				emoji(
					"⚡ Designed dynamic and browser compatible web pages using HTML5, CSS3, JavaScript, Bootstrap, Angular Material"
				),
				emoji(
					"⚡ Deliver engaging user experience through optimization of images, code and cross browser compatibility"
				),
				emoji(
					"⚡ Developed RESTful APIs for profile management, authentication, authorization , Cart,Chekout & Payment gateway integration."
				),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "vscode-icons:file-type-angular",
				},
				{
					skillName: "React",
					fontAwesomeClassname: "logos:react",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
			],
		},
		{
			title: "Cloud Infrastructure & DevOps",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience in developing CI/CD pipelines using Jenkins, Github Actions and Python"),
				emoji("⚡ Experience in provisioning and managing cloud infrastructure on AWS and Azure"),
				emoji(
					"⚡ Worked on lambda functions to aggregate data for incoming events and then stored them in DynamoDB and used them for further processing"
				),
				emoji(
					"⚡ Developing Docker Images to support Develoopment, Testing teams in their pipelines, distributed Jenkins, ElasticSearch, SonarQube, Nexus, Artifactory, etc."
				),
				emoji(
					"⚡ Utilized CloudWatch to monitor resources such as EC2, S3, RDS, EBSVolumes, etc. used alarms and monitor logs"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Terrafom",
					fontAwesomeClassname: "logos:terraform-icon",
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Helmcharts",
					fontAwesomeClassname: "logos-helm",
				}
			],
		},
		{
			title: "Quality Engineering",
			lottieAnimationFile: "/lottie/skills/qa-engineer.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Test Automation Frameworks from scratch"
				),
				emoji(
					"⚡ Building Scripts for automated testing with Selenium, Cypress, Protractor, Cucumber, TestNG, Jasmine, Chai, Jest, etc."
				),
				emoji(
					"⚡ Experience in writing test cases for REST APIs, Web Applications, Mobile Applications, and Desktop Applications"
				),
				emoji(
					"⚡ Integrated ML Analytics into the Test Automation Framework using Report Portal"
				),

			],
			softwareSkills: [
				{
					skillName: "Selenium",
					fontAwesomeClassname: "logos:selenium",
				},
				{
					skillName: "Protractor",
					fontAwesomeClassname: "vscode-icons:file-type-protractor",
				},
				{
					skillName: "Cypress",
					fontAwesomeClassname: "vscode-icons:file-type-cypress",
				},
				{
					skillName: "Cucumber",
					fontAwesomeClassname: "logos:cucumber",
				},
				{
					skillName: "Jasmine",
					fontAwesomeClassname: "logos:jasmine",
				},
				{
					skillName: "Axios",
					fontAwesomeClassname: "simple-icons:axios",
				},
				{
					skillName: "Jenkins",
					fontAwesomeClassname: "vscode-icons:file-type-jenkins",
				}
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Cloud Infrastructure",
		progressPercentage: "50",
	},
	{
		Stack: "DevOps",
		progressPercentage: "70",
	},
	{
		Stack: "Software Development", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Quality Engineering",
		progressPercentage: "80",
	},
	
];

export const educationInfo = [
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

export const experience = [
	{
		role: "Lead Software Engineer",
		company: "Software AG",
		companylogo: "/img/icons/common/sag.jpg",
		date: "Nov 2020 – Present",
		desc: "Working closely with German Test Leads to make sure the test coverage is accurate and ensures all functional aspects of the code delivered have been addressed and testing is making progress with respect to the plan.",
		descBullets: [
			" Developed & deployed containerized action runners based on custom image for GitHub workflows on Azure Cloud and scaled up as per demand using Helm Charts",
			"Customised workflow templates for different projects requiring special rules and reportable values",
		],
	},
	{
		role: "Senior Associate",
		company: "Cognizant",
		companylogo: "/img/icons/common/cognizant.jpg",
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
		companylogo: "/img/icons/common/hcl.jpg",
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
		companylogo: "/img/icons/common/fai.jpg",
		date: "Aug 2013 – Oct 2016",
		desc: "Worked as MTS in RnD team for the development of a file management application of the company's internal data.",
		descBullets: [
			"Integrated Title and Settlement Transactions system - flagship product and business backbone of the organization supporting over 100+ other Title Products with over 20,000 internal users in over 40+ countries.",
			"Primarily engaged in creation of re-usable and standard automation scripts and SQL Reporting Library",
		],
	},
];

export const projects = [
	// {
	// 	name: "developer-portfolio",
	// 	desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
	// 	github: "https://github.com/1hanzla100/developer-portfolio",
	// 	link: "https://developer-portfolio-1hanzla100.vercel.app/",
	// },
];

export const awards = [
	{
		name: "Tech Interrupts Global - Winners",
		feedback:
			"Won the Global Finals of Software AG's Tech Interrupts Hackathon 2021 with a team of 4 members",
	},
	{
		name: "Quarterly Award",
		feedback:
			"Customer Orentation Success Award for Q2 2021",
	},
	{
		name: "Super QA Award",
		feedback:
			"Received Super QA Award for finding a critical bug in the product that was causing a major issue for the customer",
	},

	{
		name: "HCL Spot Award",
		feedback:
			"HCL Spot Award for being the top performer in the team for the month of July 2018",
	},
	
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Javed Ali",
	description:
		"A passionate Software Engineer who wants to learn all tech stack.",
	author: "Javed Ali",
	image: "https://avatars.githubusercontent.com/u/30997178?v=4",
	url: "http:www.javedali.tech",
	keywords: [
		"Javed",
		"Javed Ali",
		"@javedalix",
		"javedali",
		"Portfolio",
		"Javed Portfolio ",
		"Javed Ali Portfolio",
	],
}
