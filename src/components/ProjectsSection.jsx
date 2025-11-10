import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Foodfactory",
    description: "A plateform to order food across the globe",
    image: "/projects/foodfactory.png",
    tags: ["Express", "React", "MongoDB","TypeScript","Stripe","Zustand","Mailtrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harsh0-0Singh/Food-factory",
  },
  {
    id: 2,
    title: "JobNest",
    description:
      "A job portal allowing people to find jobs and companies to find suitable candidates",
    image: "/projects/jobnest.png",
    tags: ["React", "Express", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com/Harsh0-0Singh/JobNest",
  },
  {
    id: 3,
    title: "Mojito",
    description:
      "A Website made with beautiful gsap aniamtions",
    image: "/projects/mojito.png",
    tags: ["React", "gsap"],
    demoUrl: "https://mojito-eosin.vercel.app/",
    githubUrl: "https://github.com/Harsh0-0Singh/Mojito",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="px-4 py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex space-x-3">
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.demoUrl}
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Harsh0-0Singh"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
