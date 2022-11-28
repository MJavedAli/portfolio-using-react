import emoji from "react-easy-emoji";

export const greetings = {
	name: "Javed Ali",
	title: "Hi, I'm Javed",
	description:
		"I'm passionate Software Engineer having diversified experience in Software Development, Testing, DevOps and Release Management.I am an open-source Enthusiast. I love to experiment and figure out ways to improve product quality. Driven by curiosity to learn & share new skills. Loves helping to strategies and facilitate testing, working with teams to incorporate those strategies into the development phase.",
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
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [

		{
			title: "DevOps & Cloud Computing",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience in developing CI/CD pipelines using Jenkins, Github Actions and Python"),
				emoji("⚡ Experience in provisioning and managing cloud infrastructure on AWS and Azure"),
				emoji(
					"⚡ Automating cloud infrastructure using Terraform & Ansible"
				),
				emoji(
					"⚡ Experience in managing and deploying containerized applications on Kubernetes"
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
			title: "Test Engineering",
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
		{
			title: "Software Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) in Angular"
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
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "vscode-icons:file-type-angular",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Test Engineering", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Devops",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
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
			"Reduced the overall time from 90 days to 14 days for prod deployment by developing a component based staging cycle in CI pipeline",
			"Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
		],
	},
	{
		role: "Senior Associate",
		company: "Cognizant",
		companylogo: "/img/icons/common/cognizant.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
		descBullets: [
			"Reduced the overall time from 90 days to 14 days for prod deployment by developing a component based staging cycle in CI pipeline",
			"Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
		],
	},
	{
		role: "Senior Test Engineer",
		company: "HCL Technologies",
		companylogo: "/img/icons/common/hcl.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets: [
			"Reduced the overall time from 90 days to 14 days for prod deployment by developing a component based staging cycle in CI pipeline",
			"Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
		],
	},
	{
		role: "Member Technical Staff",
		company: "First American India",
		companylogo: "/img/icons/common/fai.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets: [
			"Reduced the overall time from 90 days to 14 days for prod deployment by developing a component based staging cycle in CI pipeline",
			"Identified key areas of manual regression testing of IoT platform build over Cloud & Edge and developed BDD Test Framework using Protractor, JavaScript.",
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
