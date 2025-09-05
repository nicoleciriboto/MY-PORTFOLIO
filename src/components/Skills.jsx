import { useState } from 'react';
import { assets } from '../assets/assets'
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const skills =[
    //Frontend
    {name: "HTML", category: "Frontend", img: assets.html},
    {name: "CSS", category: "Frontend", img: assets.css},
    {name: "JavaScript", category: "Frontend", img: assets.javascript},
    {name: "React", category: "Frontend", img: assets.react},
    {name: "Tailwind CSS", category: "Frontend", img: assets.tailwindcss},
    {name: "SCSS", category: "Frontend", img: assets.scss},

    //Backend
    {name: "MySQL", category: "Backend", img: assets.mysql},
    {name: "Python", category: "Backend", img: assets.python},
    {name: "Flask", category: "Backend", img: assets.flask},

    //Tools
    {name: "GitHub", category: "Tools", img: assets.github},
    {name: "Figma", category: "Tools", img: assets.figma},
    {name: "VS Code", category: "Tools", img: assets.vscode},
    {name: "Power BI", category: "Tools", img: assets.powerbi},

];

const categories = ["All", "Frontend", "Backend", "Tools"];



export const Skills = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div 
        className="container mx-auto max-w-5xl"
        >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
        {categories.map((category, key) => (
          <button key={key} 
          onClick={() => setActiveCategory(category)}
          className={cn('px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer',
          activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
          >
            {category}
          </button>
        ))}

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map ((skill, key) => (
            <motion.div 
            key={key} 
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: key * 0.08 }}
            >
              <div className="text-left mb-4 ">
              
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <img src={skill.img} alt={skill.name} className="w-8 h-8" />
              </div>

            </motion.div>
            ))}

        </div>

        </div>

        </section>
    )
}
