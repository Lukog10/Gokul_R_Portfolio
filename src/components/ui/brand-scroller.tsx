"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const techStackItems = [
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel" },
    { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
    { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi" },
    { name: "Tableau", icon: "https://cdn.simpleicons.org/tableau" }
];

const toolItems = [
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
    { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
    { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab" },
    { name: "Claude Code", icon: "https://cdn.simpleicons.org/anthropic" },
    { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" }
];

const ScrollerItem = ({ name, icon }: { name: string; icon: string }) => (
    <div className="flex items-center gap-4 px-12 py-4 transition-all duration-300 group">
        <div className="relative w-10 h-10 flex-shrink-0 transition-all duration-500">
            <Image
                src={icon}
                alt={name}
                fill
                className="object-contain"
                unoptimized
            />
        </div>
        <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {name}
        </p>
    </div>
);

export const BrandScroller = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-1-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-2-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export const BrandScrollerReverse = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-1-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-2-${idx}`} name={item.name} icon={item.icon} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
