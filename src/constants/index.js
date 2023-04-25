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
    jll,
    freelance,
    musco,
    nucamp,
    jobit,
    tripguide,
    threejs,
    pokedex
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
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Controls System Technician",
        company_name: "JLL",
        icon: jll,
        iconBg: "#FFFFFF",
        date: "Febuarary 2023 - Present",
        points: [
            "Troubleshoot and maintain any controls issues found during a shift",
            "Develop and implement any solutions to controls issues",
            "Monitor and maintain PLC programs",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "March 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Maintenance Tech 2",
        company_name: "JLL",
        icon: jll,
        iconBg: "#FFFFFF",
        date: "June 2022 - Feburary 2023",
        points: [
            "Maintain functionality of material handling equipment during a shift",
            "Troubleshoot problems with any non-functional MHE",
            "Maintain professional conversation with Amazon Associoates",
        ],
    },
    {
        title: "Electronics Assembly Operator",
        company_name: "Musco Sports and Lighting",
        icon: musco,
        iconBg: "#FFFFFF",
        date: "November 2021 - Jun 2022",
        points: [
            "Production of electronics on various work stations",
            "Board level soldering repair work",
            "Troubleshooting board level functional issues",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "TBI",
        name: "No One",
        designation: "CFO",
        company: "Fake",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "TBI",
        name: "No One",
        designation: "COO",
        company: "Fake",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "TBI",
        name: "No One",
        designation: "CTO",
        company: "Fake",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Pokedex",
        description:
            "Fun little Pokemon application that pulls from the Pokeapi to show you a list of all the Pokemon and more information if you click on one.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: pokedex,
        source_code_link: "https://github.com/lawtonb16/pokedex",
    },
    {
        name: "NuCampSite",
        description:
            "Web application about a fictious campground made throughout the course of my time at the NuCamp coding bootcamp.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: nucamp,
        source_code_link: "https://github.com/lawtonb16/react-nucampsite",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/lawtonb16/travel_advisor",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
};
