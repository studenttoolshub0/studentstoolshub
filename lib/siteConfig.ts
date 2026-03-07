import { GraduationCap, Layout, PenTool, Search, Library, Laptop, MessageSquare, StickyNote } from "lucide-react";
import type { SiteConfig, BlogPost, NavItem, Tool } from "@/types";
import { howToImproveYourCgpaContent } from "./articles/how-to-improve-your-cgpa";
import { gpaVsCgpaContent } from "./articles/understanding-gpa-vs-cgpa";
import { studyTechniquesContent } from "./articles/best-study-techniques-for-university";
import { timeManagementContent } from "./articles/time-management-for-students";
import { choosingRightMajorContent } from "./articles/how-to-choose-the-right-major";
import { cgpaCalculatorGuideContent } from "./articles/cgpa-calculator-guide";

export const siteConfig: SiteConfig = {
    name: "StudentToolsHub",
    url: "https://studenttoolshub.site",
    description:
        "Your go-to resource for academic tools, GPA calculators, and student guidance to help you excel in your academic journey.",
    author: "StudentToolsHub Team",
    email: "studenttoolshu0@gmail.com",
    ogImage: "/og-image.png",
    links: { twitter: "https://twitter.com/studenttoolshub" },
};

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const academicTools: Tool[] = [
    {
        name: "CGPA Hub",
        description: "Cgpahub is a central hub for all academic calculators like cgpa,sgpa,universities specific calculators and more. Our top recommendation for students.",
        href: "https://cgpahub.com",
        icon: GraduationCap,
        external: true,
        nofollow: false,
    },
    {
        name: "Canva Education",
        description: "Create stunning presentations, resumes, and academic posters with professional-grade design tools for free.",
        href: "https://www.canva.com/education/",
        icon: Layout,
        external: true,
        nofollow: true,
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant that helps you eliminate grammar errors and improve the tone of your research papers.",
        href: "https://www.grammarly.com",
        icon: PenTool,
        external: true,
        nofollow: true,
    },
    {
        name: "Google Scholar",
        description: "The most comprehensive search engine for scholarly literature across all articles and academic disciplines.",
        href: "https://scholar.google.com",
        icon: Search,
        external: true,
        nofollow: true,
    },
    {
        name: "Zotero",
        description: "A free, easy-to-use tool to help you collect, organize, annotate, cite, and share your research sources.",
        href: "https://www.zotero.org",
        icon: Library,
        external: true,
        nofollow: true,
    },
    {
        name: "Coursera",
        description: "Access world-class education from top universities and companies like Google, IBM, and Stanford online.",
        href: "https://www.coursera.org",
        icon: Laptop,
        external: true,
        nofollow: true,
    },
    {
        name: "ChatGPT",
        description: "Powerful AI assistant for brainstorming, summarizing complex topics, and debugging your code projects.",
        href: "https://chatgpt.com",
        icon: MessageSquare,
        external: true,
        nofollow: true,
    },
    {
        name: "Notion",
        description: "An all-in-one workspace for students to organize lecture notes, task lists, and academic databases effectively.",
        href: "https://www.notion.so/product/notion-for-education",
        icon: StickyNote,
        external: true,
        nofollow: true,
    },
];

export const placeholderPosts: BlogPost[] = [
    {
        slug: "how-to-improve-your-cgpa",
        title: "How to Improve Your CGPA: A Practical Guide for Students",
        description: "Discover proven strategies to boost your Cumulative GPA, from study habits to course selection tips.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Academic Tips", readTime: "8 min read",
        tags: ["CGPA", "Study Tips", "Academic Success"],
        content: howToImproveYourCgpaContent,
        featured: true,
    },
    {
        slug: "understanding-gpa-vs-cgpa",
        title: "GPA vs CGPA: Understanding the Difference",
        description: "Learn the key differences between GPA and CGPA and why both matter for your academic and professional future.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Guides", readTime: "5 min read",
        tags: ["GPA", "CGPA", "Education"],
        content: gpaVsCgpaContent,
        featured: true,
    },
    {
        slug: "best-study-techniques-for-university",
        title: "10 Best Study Techniques for University Students",
        description: "Explore science-backed study methods that help you retain information better and perform well in exams.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Study Skills", readTime: "10 min read",
        tags: ["Study Tips", "University", "Learning"],
        content: studyTechniquesContent,
        featured: true,
    },
    {
        slug: "time-management-for-students",
        title: "Time Management Strategies Every Student Needs",
        description: "Master the art of balancing coursework, part-time jobs, and personal life with these time management tips.",
        date: "2026-02-22", author: "StudentToolsHub Team",
        category: "Productivity", readTime: "7 min read",
        tags: ["Time Management", "Productivity", "Students"],
        content: timeManagementContent,
    },
    {
        slug: "how-to-choose-the-right-major",
        title: "How to Choose the Right Major: A Step-by-Step Guide",
        description: "Making the right major decision can shape your entire career. Here's how to approach this choice thoughtfully.",
        date: "2026-02-21", author: "StudentToolsHub Team",
        category: "Career Guidance", readTime: "9 min read",
        tags: ["Major Selection", "Career", "University"],
        content: choosingRightMajorContent,
    },
    {
        slug: "cgpa-calculator-guide",
        title: "How to Use a CGPA Calculator Effectively",
        description: "Step-by-step guide on using online CGPA calculators to track your academic progress and plan future semesters.",
        date: "2026-02-20", author: "StudentToolsHub Team",
        category: "Tools", readTime: "6 min read",
        tags: ["CGPA Calculator", "Tools", "Academic Planning"],
        content: cgpaCalculatorGuideContent,
    },
];
