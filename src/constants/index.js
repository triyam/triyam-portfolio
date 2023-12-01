import { koyyo, samsung, strugend } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Samsung",
        icon: samsung,
        iconBg: "#000000",
        date: "June 2021 - Nov 2021",
        points: [
            "Research on resnet 18 archiecture with Larq compute engine",
            "Implemented cifar 10 dataset achieving validation accuracy of 84.95%",
        ],
    },
    {
        title: "SDE Intern",
        company_name: "Koyyo",
        icon: koyyo,
        iconBg: "#ffffff",
        date: "Nov 2021 - Mar 2022",
        points: [
            "Build and tested api on roster management using REST api and PostgreSQL",
            "Containized the product on docker and deployed it in aws ecs and ec2",
            "Made sure the smooth integration of current admin panel backend with flutter",
            "Collected number plates of vehicles and trained them on yolov4 as a part of ANPR project.",
        ],
    },
    {
        title: "Founder",
        company_name: "Strugend",
        icon: strugend,
        iconBg: "#ffffff",
        date: "Apr 2022 - Present",
        points: [
            "Crafted a smart chatbot for seamless client interactions using advanced language tech.",
            "Boosted Reliance game engagement by 65% with cutting-edge AI strategies.",
            "Collaborated with cross-functional teams to design and deploy scalable machine learning solutions, enabling real-time data analysis and visualization for stakeholders.",
            "Conducted thorough data preprocessing and feature engineering to improve model performance, achieving a 25% reduction in false positive rates and enhancing overall prediction accuracy.",
            "Researched and experimented with cutting-edge machine learning techniques, such as deep learning and reinforcement learning, to enhance the company's data-driven decision-making capabilities."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: "wa.me/919348512076?text=let's%20Talk%20More%20About",
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/triyam',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/triyam',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Juston',
        description: 'Developed a web application which can take notes, publish the notes just like notion',
        link: 'https://juston.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ecommerce Website',
        description: 'Created a full-stack Next14 ecommerce website for better for buying and selling of electronics item',
        link: 'https://e-commerce-payload-8e26543.payloadcms.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-orange',
        name: 'PromptTopia',
        description: 'Promptopia is an open-source prompting tool for modern world to discover, create and share creative prompts',
        link: 'https://prompt-topia-nqh8bx8xv-pavan2580-dmpts-projects.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Strugend',
        description: 'A consultancy website providing ai services and targeting to the market over US having a Christmas theme',
        link: 'https://strugend.com',
    }
];