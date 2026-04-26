import { GraduationCap, Layout, PenTool, Search, Library, Laptop, MessageSquare, StickyNote,CalculatorIcon } from "lucide-react";
import type { SiteConfig, BlogPost, NavItem, Tool } from "@/types";
import { howToImproveYourCgpaContent } from "./articles/how-to-improve-your-cgpa";
import { gpaVsCgpaContent } from "./articles/understanding-gpa-vs-cgpa";
import { studyTechniquesContent } from "./articles/best-study-techniques-for-university";
import { timeManagementContent } from "./articles/time-management-for-students";
import { choosingRightMajorContent } from "./articles/choose-the-right-major";
import { cgpaCalculatorGuideContent } from "./articles/cgpa-calculator-guide";
import { fixGamingDeviceIssuesContent } from "./articles/how-to-fix-gaming-device-issues-pc";
import { futureOfEducationContent } from "./articles/future-of-education";
import { essentialStudentToolsContent } from "./articles/essential-student-tools";
import { academicPerformanceSkillsContent } from "./articles/academic-performance-skills";
import { ktuCgpaCalculatorContent } from "./articles/ktu-content";

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
    { label: "KTU Calculator", href: "/ktu-cgpa-calculator" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const academicTools: Tool[] = [
    {
        name: "KTU CGPA Calculator",
        description: "Calculate your KTU SGPA and CGPA instantly with auto-loaded subject templates for all 2019 scheme branches.",
        href: "/ktu-cgpa-calculator",
        icon: GraduationCap,
        external: false,
        nofollow: false,
    },
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
        name: "Fast tools wow",
        description: "All tools hub and all in one solution for students",
        href: "https://fasttoolswow.com/",
        icon: CalculatorIcon,
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
        slug: "boost-cgpa-academic-success",
        title: "How to Boost Your CGPA: The Ultimate Guide to Academic Excellence",
        description: "Discover expert-backed strategies, study secrets, and psychological hacks to skyrocket your Cumulative GPA fast.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Academic Tips", readTime: "15 min read",
        tags: ["CGPA", "Study Tips", "Academic Success"],
        content: howToImproveYourCgpaContent,
        featured: true,
    },
    {
        slug: "gpa-vs-cgpa-guide",
        title: "GPA vs CGPA: The Definitive Guide to Understanding academic performance",
        description: "Learn the critical differences between GPA and CGPA and how they impact your career and graduate school admissions.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Guides", readTime: "12 min read",
        tags: ["GPA", "CGPA", "Education"],
        content: gpaVsCgpaContent,
        featured: true,
    },
    {
        slug: "effective-study-hacks-university",
        title: "10 Best Study Techniques for University Students: Science-Backed Strategies",
        description: "Master the art of learning with proven study methods like Active Recall and Spaced Repetition to dominate your exams.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Study Skills", readTime: "18 min read",
        tags: ["Study Tips", "University", "Learning"],
        content: studyTechniquesContent,
        featured: true,
    },
    {
        slug: "student-productivity-time-management",
        title: "Mastering Time Management: A Student's Guide to Peak Productivity",
        description: "Learn how to elite students manage their time, overcome procrastination, and balance academics with life.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Productivity", readTime: "15 min read",
        tags: ["Time Management", "Productivity", "Student Life"],
        content: timeManagementContent,
    },
    {
        slug: "finding-the-perfect-college-major",
        title: "How to Choose the Right Major: A Strategic Guide to Your Academic Future",
        description: "Confused about your major? This comprehensive framework helps you align your passions with career success.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Career Planning", readTime: "16 min read",
        tags: ["Major Selection", "Career", "University Planning"],
        content: choosingRightMajorContent,
    },
    {
        slug: "mastering-cgpa-calculation",
        title: "How to Use a CGPA Calculator Effectively: A Pro Student's Guide",
        description: "Take control of your grades with predictive modeling and learn how to audit your academic standing like a pro.",
        date: "2026-03-03", author: "StudentToolsHub Team",
        category: "Guides", readTime: "14 min read",
        tags: ["CGPA", "Calculator", "Academic Tools"],
        content: cgpaCalculatorGuideContent,
    },
    {
        slug: "troubleshoot-pc-gaming-peripherals",
        title: "How to Fix Common Gaming Device Issues on PC: The Student Tech Guide",
        description: "Controller not connecting? Audio crackling? Fix your gaming hardware issues with these pro troubleshooting steps.",
        date: "2026-03-03", 
        author: "StudentToolsHub Team",
        category: "Tech Tips", 
        readTime: "18 min read",
        tags: ["Gaming", "PC Support", "Hardware Fixes"],
        content: fixGamingDeviceIssuesContent,
        featured: true,
    },
    {
        slug: "future-of-education-technology-trends",
        title: "The Digital Revolution: How Technology is Shaping the Future of Education (2026)",
        description: "Explore how AI, the Metaverse, and personalized learning are fundamentally transforming the classroom experience.",
        date: "2026-03-03",
        author: "StudentToolsHub Team",
        category: "Education Tech",
        readTime: "15 min read",
        tags: ["EdTech", "Future of Education", "AI in Learning"],
        content: futureOfEducationContent,
        featured: true,
    },
    {
        slug: "best-digital-tools-for-students",
        title: "Maximizing Academic Efficiency: The Ultimate Guide to Essential Student Tools",
        description: "Master your second brain with Notion, automate citations with Zotero, and build a high-performance academic toolkit.",
        date: "2026-03-03",
        author: "StudentToolsHub Team",
        category: "Efficiency",
        readTime: "16 min read",
        tags: ["Student Tools", "Academic Success", "Productivity Hacks"],
        content: essentialStudentToolsContent,
        featured: true,
    },
    {
        slug: "essential-skills-academic-success",
        title: "Data-Driven Academic Success: Performance Tracking and Career Future-Proofing",
        description: "Move beyond guesswork. Learn how to track your grades like a pro and why data science is the new universal skill.",
        date: "2026-03-03",
        author: "StudentToolsHub Team",
        category: "Career Strategy",
        readTime: "15 min read",
        tags: ["Academic Performance", "Data Science", "Python for Students"],
        content: academicPerformanceSkillsContent,
        featured: true,
    },
    {
        slug: "ktu-cgpa-calculator-guide-2019-scheme",
        title: "Mastering the KTU 2019 Scheme: The Ultimate CGPA Calculation Guide",
        description: "Calculate your KTU SGPA and CGPA accurately with our expert guide to the 2019 scheme grading system and mathematical formula.",
        date: "2026-03-03",
        author: "StudentToolsHub Team",
        category: "KTU Support",
        readTime: "20 min read",
        tags: ["KTU", "Engineering", "CGPA Calculator"],
        content: ktuCgpaCalculatorContent,
        featured: true,
    },
];
