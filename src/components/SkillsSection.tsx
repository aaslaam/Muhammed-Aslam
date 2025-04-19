
import { 
  Code2, 
  Palette, 
  Binary,
  FileJson,
  Database,
  Github,
  Cloud
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <Code2 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <Palette className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FileJson className="text-[#F7DF1E]" /> },
      { name: "Bootstrap", icon: <Code2 className="text-[#7952B3]" /> },
      { name: "React", icon: <Code2 className="text-[#61DAFB]" /> },
      { name: "jQuery", icon: <Code2 className="text-[#0769AD]" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <Binary className="text-[#339933]" /> },
      { name: "Python", icon: <Code2 className="text-[#3776AB]" /> },
      { name: "Django", icon: <Database className="text-[#092E20]" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <Github className="text-[#181717]" /> },
      { name: "GitLab", icon: <Github className="text-[#FCA121]" /> },
      { name: "AWS", icon: <Cloud className="text-[#232F3E]" /> },
      { name: "DigitalOcean", icon: <Cloud className="text-[#0080FF]" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 rounded-lg bg-card border border-border animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="flex items-center gap-1.5 text-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
