'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ParallaxScrollFeatureSection = () => {
    // Array of section data mapped to user skills
    const sections = [
        {
            id: 1,
            title: "Data Analytics",
            subtitle: "DATA SCIENCE & BI",
            description: "Specializing in exploratory data analysis, data cleansing, and statistical modeling. From building interactive BI dashboards in Tableau and Power BI to optimizing SQL databases for high-speed reporting.",
            imageUrl: '/feature/feature1.webp',
            reverse: false,
            skills: ["Data Analytics", "SQL Databases", "Tableau", "Power BI", "Exploratory Data Analysis", "Excel"]
        },
        {
            id: 2,
            title: "AI & Gen AI",
            subtitle: "INTELLIGENT AGENTS",
            description: "Developing autonomous agent workflows and prompt engineering solutions. Leveraging LangChain, Hugging Face, and Streamlit to prototype zero-trust prompt shields and RAG intelligence tools.",
            imageUrl: '/feature/feature2.webp',
            reverse: true,
            skills: ["AI Agents", "Prompt Engineering", "LangChain", "Hugging Face", "Streamlit", "RAG Systems"]
        },
        {
            id: 3,
            title: "Machine Learning",
            subtitle: "PREDICTIVE MODELING",
            description: "Designing and evaluating predictive machine learning models. Implementing regression, classification, and clustering algorithms using scikit-learn and XGBoost to solve real-world problems.",
            imageUrl: '/feature/feature3.webp',
            reverse: false,
            skills: ["Scikit-Learn", "XGBoost", "Predictive Modeling", "Regression Models", "Classification", "Clustering"]
        }
    ]

    // Create refs and animations for each section exactly as per the provided format
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];

    // Using individual hooks because mapping hooks inside a component can be tricky with React's Rules of Hooks
    // But since the count is static (3), we can do it safely or just define them.

    const scroll1 = useScroll({ target: sectionRefs[0], offset: ["start 85%", "end 15%"] }).scrollYProgress;
    const scroll2 = useScroll({ target: sectionRefs[1], offset: ["start 85%", "end 15%"] }).scrollYProgress;
    const scroll3 = useScroll({ target: sectionRefs[2], offset: ["start 85%", "end 15%"] }).scrollYProgress;

    const rawScrolls = [scroll1, scroll2, scroll3];

    // Lighter, GPU-accelerated animations to eliminate delay
    const opacityContents = rawScrolls.map(progress =>
        useTransform(progress, [0.05, 0.3, 0.7, 0.95], [0, 1, 1, 0])
    );

    const translateContents = rawScrolls.map(progress =>
        useTransform(progress, [0, 1], [80, -80])
    );

    const imageY = rawScrolls.map(progress =>
        useTransform(progress, [0, 1], [-40, 40])
    );

    const scales = rawScrolls.map(progress =>
        useTransform(progress, [0.05, 0.3, 0.7, 0.95], [0.9, 1, 1, 0.9])
    );

    return (
        <div className="relative z-20 bg-background dark:bg-black transition-colors duration-500 overflow-visible isolate">
            <div className="flex flex-col">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        ref={sectionRefs[index]}
                        className={cn(
                            "relative min-h-screen flex items-center justify-center py-40 px-6 md:px-12 lg:px-24",
                            "overflow-hidden"
                        )}
                    >
                        <div className={cn(
                            "w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-40 items-center",
                            section.reverse ? "lg:flex-row-reverse" : ""
                        )}>
                            {/* Text Content Side */}
                            <motion.div
                                style={{
                                    opacity: opacityContents[index],
                                    y: translateContents[index],
                                    willChange: "transform, opacity"
                                }}
                                className={cn(
                                    "flex flex-col space-y-10 z-20",
                                    section.reverse ? "lg:order-2" : "lg:order-1"
                                )}
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-primary/40" />
                                        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.4em] text-primary uppercase">
                                            {section.subtitle}
                                        </span>
                                    </div>
                                    <h2 className={cn(
                                        "text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-tight text-zinc-900 dark:text-white uppercase",
                                        "break-words max-w-full"
                                    )}>
                                        {section.id === 1 ? "Intelligence Systems" : section.title}
                                    </h2>
                                </div>

                                <p className="text-lg md:text-xl text-zinc-500 dark:text-white/60 max-w-xl font-normal leading-relaxed">
                                    {section.description}
                                </p>

                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {section.skills.map((skill, i) => {
                                        const colors = [
                                            'hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400',
                                            'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400',
                                            'hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-violet-400',
                                            'hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-400',
                                            'hover:bg-amber-500/20 hover:border-amber-500/50 hover:text-amber-400'
                                        ];
                                        return (
                                            <span
                                                key={skill}
                                                className={cn(
                                                    "text-[11px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 rounded-full transition-all duration-300 cursor-default bg-transparent",
                                                    colors[i % colors.length]
                                                )}
                                            >
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                style={{
                                    opacity: opacityContents[index],
                                    scale: scales[index],
                                    y: imageY[index],
                                    willChange: "transform, opacity"
                                }}
                                className={cn(
                                    "relative aspect-square w-full max-w-[600px] mx-auto z-10",
                                    section.reverse ? "lg:order-1" : "lg:order-2"
                                )}
                            >
                                <div
                                    className="relative w-full h-full group overflow-hidden bg-transparent"
                                >
                                    <Image
                                        src={section.imageUrl}
                                        alt={section.title}
                                        fill
                                        priority={index === 0} // Only prioritize first image
                                        className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-1000"
                                        sizes="(max-width: 1024px) 100vw, 600px"
                                    />
                                    {/* Replace expensive maskImage with radial gradient overlays */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,#000000_90%)] pointer-events-none" />
                                    
                                    {/* Seamless blending gradients */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background dark:from-black dark:to-black pointer-events-none opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background dark:from-black dark:to-black pointer-events-none opacity-60" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

