import { FaHome, FaSearch, FaUser, FaCog } from "react-icons/fa";
// import { IconType } from "react-icons";
import { ReactNode } from "react";

export const navbarData = [
    {
        title: "About",
        path: "about",
    },
    {
        title: "Service",
        path: "/service",
    },
    {
        title: "Projects",
        path: "/projects",
    },
];

export const serviceData = [
    {
        name: "App Development",
        desc: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        path: "/landing/service/app.png",
    },
    {
        name: "Web Design",
        desc: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        path: "/landing/service/browser.png",
    },
    {
        name: "Graphic Designing",
        desc: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        path: "/landing/service/design.png",
    },
    {
        name: "Digital Marketing",
        desc: "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
        path: "/landing/service/marketing.png",
    },
];

interface BlogData {
    path: string;
    title: string;
    description: string;
}

export const blogsData: BlogData[] = [
    {
        title: "Realtime analytics",
        description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        path: "/landing/blogs/image1.png",
    },
    {
        title: "Realtime analytics",
        description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        path: "/landing/blogs/image2.png",
    },
    {
        title: "Realtime analytics",
        description: "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        path: "/landing/blogs/image3.png",
    },
];



export const footerData = [
    {
        title: "Company",
        links: ["About", "Features", "Works", "Career"],
    },
    {
        title: "Help",
        links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
    },
    {
        title: "Resources",
        links: ["Free eBooks!", "How to - Blog"],
    },
];

export const socialLinks = [
    { id: 1, icon: "twitter", url: "#" },
    { id: 2, icon: "facebook", url: "#" },
    { id: 3, icon: "instagram", url: "#" },
];


