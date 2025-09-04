import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Real Estate Landing Page",
    description:
      "A responsive landing page for a real estate company built with React and Tailwind CSS.",
    image: assets.realEstate,
    tags: ["React", "Tailwind CSS", "Web3 Forms"],
    demoUrl: "https://real-estate-sigma-teal.vercel.app/",
    githubUrl: "https://github.com/nicoleciriboto/REAL-ESTATE.git",
  },

  {
    id: 2,
    title: "Malaria Explorer Dashboard",
    description:
      "An interactive dashboard for exploring African malaria data built with React and Python.",
    image: assets.dashboard,
    tags: ["React", "Python", "Flask", "REST API"],
    demoUrl: "https://interactive-malaria-explorer-dashbo.vercel.app/",
    githubUrl: "https://github.com/nicoleciriboto/INTERACTIVE-MALARIA-EXPLORER-DASHBOARD.git",
  },

  {
    id: 3,
    title: "SuperFert Website",
    description:
      "A modern, user-friendly website that showcases Superfert’s fertilizer products and services.",
    image: assets.superfert,
    tags: ["React", "CSS", "Figma"],
    demoUrl: "https://superfert-website-indol.vercel.app/",
    githubUrl: "https://github.com/nicoleciriboto/SUPERFERT-WEBSITE.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <motion.div 
      className="container mx-auto max-w-5xl"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 md:text-4xl text-center">
        Featured
        <span className="text-primary"> Projects</span>
      </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: key * 0.15 }}
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

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              

              <h3 className="text-xl mb-2 font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                <a href={project.demoUrl} 
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                ><ExternalLink size={15}/></a>
                <a href={project.githubUrl} 
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                ><Github size={15}/></a>

                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
        <a className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer"
        href="https://github.com/nicoleciriboto"
        target="_blank">
            Check My GitHub <ArrowRight size={16}/> 
        </a>

        </div>
      </motion.div>
    </section>
  );
};
