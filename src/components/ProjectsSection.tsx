
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
   imageUrl?: string; 
  status?: "completed" | "in-development";
}

const projects: Project[] = [
  {

    id: 1,
    title: "To-Do App",
    description: "A simple, user-friendly To-Do app built with HTML, CSS, and React. Add, delete, and mark tasks as completed with ease.",
    technologies: ["HTML", "CSS", "React"],
    liveUrl: "https://aaslaam.github.io/todo/",
    githubUrl: "https://github.com/aaslaam/todo",
  },
  {
    id: 2,
    title: "Calendar App",
    description: "A calendar app which helps you to add events to a specific day to keep you productive.",
    technologies: ["HTML", "CSS", "React"],
    liveUrl: "https://aaslaam.github.io/calender-js/",
    githubUrl: "https://github.com/aaslaam/calender-js",
  },
  {
    id: 3,
    title: "SIGNUM Exhibition 2022",
    description: "It is my first website which I built for my school exhibition to showcase talents of students.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/aaslaam/SIGNUM-2022",
  },

  {
    id: 4,
    title: "Digital Cloack JS",
    description: "Cloack wich tells correct time in 24 Hour format using js",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://digital-cloack-js.netlify.app/",
  },
    {
    id: 5,
    title: "Calculator",
    description: "A simple calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://brilliant-cuchufli-88e1a0.netlify.app/",
  },

  {
    id: 5,
    title: "DreamPilot",
    description: "A startup under development. Helps people find their suitable career and the most suitable jobs for them.",
    technologies: ["React", "Django"],
    status: "in-development",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, liveUrl, githubUrl, status } = project;
  
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border animate-scale-in card-hover">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {status === "in-development" && (
        <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-primary/20 text-primary mb-3">
          In Development
        </span>
      )}
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
          >
            <Github className="mr-1 h-4 w-4" />
            GitHub
          </a>
        )}
        
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-card">
      <div className="container-custom">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
