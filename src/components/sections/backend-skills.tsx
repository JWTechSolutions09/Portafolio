"use client";
import React from "react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { SkillNames, SKILLS } from "@/data/constants";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BACKEND_SKILLS = [
  // C#/.NET Stack
  SkillNames.CSHARP,
  SkillNames.DOTNET,
  SkillNames.MVC,
  // Java/Spring Stack
  SkillNames.JAVA,
  SkillNames.SPRING,
  // Node.js/Nest Stack
  SkillNames.NODEJS,
  SkillNames.NEST,
  // Python Stack
  SkillNames.PYTHON,
  SkillNames.DJANGO,
  SkillNames.FASTAPI,
  // Databases
  SkillNames.POSTGRES,
  SkillNames.SQL_SERVER,
  SkillNames.MYSQL,
  // Cloud & Security
  SkillNames.CLOUDFLARE,
  SkillNames.AZURE_AI,
  SkillNames.JWT,
  // APIs
  SkillNames.REST_API,
];

const BackendSkillsSection = () => {
  return (
    <SectionWrapper id="backend-skills" className="w-full min-h-screen flex flex-col items-center justify-center py-20">
      <SectionHeader 
        id="backend-skills" 
        title="Backend Skills" 
        desc="Technologies and frameworks I work with on the server side"
        className="mb-12"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {BACKEND_SKILLS.map((skillName, index) => {
          const skill = SKILLS[skillName];
          if (!skill) return null;
          
          return (
            <motion.div
              key={skillName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "group relative p-6 rounded-xl border border-border",
                "bg-card hover:bg-accent/50 transition-all duration-300",
                "hover:shadow-lg hover:scale-105",
                "flex flex-col items-center justify-center gap-3",
                "min-h-[180px]"
              )}
            >
              <div 
                className="w-16 h-16 relative flex items-center justify-center"
                style={{ color: skill.color }}
              >
                <img
                  src={skill.icon}
                  alt={skill.label}
                  width={64}
                  height={64}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground text-center">
                {skill.label}
              </h3>
              
              <p className="text-sm text-muted-foreground text-center line-clamp-2">
                {skill.shortDescription}
              </p>
              
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default BackendSkillsSection;
