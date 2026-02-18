import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Graduate Trainee - Software Engineer",
    company: "Brainstake",
    location: "Harare",
    period: "2025 - Present",
    description:
      "Contributed to the development and enhancement of digital solutions within the education sector, focusing on front-end functionality, user experience and system maintenance.",
    highlights: [
      "Worked on front-end development of a school management system, contributing to user-facing features.",
      "Collaborated with UI/UX designers to implement responsive and user-friendly interfaces.",
      "Updated and maintained the company website, ensuring content accuracy and usability.",
    ],
  },
  {
    id: 2,
    role: "Youth Coding Instructor",
    company: "Uncommon.org",
    location: "Harare",
    period: "2025",
    description:
      "Delivered structured coding lessons to young learners, helping them build foundational programming skills while fostering creativity, problem-solving and confidence in technology.",
    highlights: [
      "Facilitated coding lessons for school learners, focusing on programming fundamentals.",
      "Taught tools such as Scratch and WoofJS to introduce logical thinking and basic software development concepts.",
      "Developed strong communication, teaching and leadership skills through classroom engagement.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.2,
    },
  }),
};

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center gap-6 md:gap-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="gradient-border p-6 card-hover w-full md:w-1/2">
                  <div className="space-y-4">
                    {/* Role & Company */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="text-primary h-5 w-5 flex-shrink-0" />
                        <h3 className="font-semibold text-lg text-left">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="text-primary font-medium text-left ml-7">
                        {exp.company}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground ml-7">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-left ml-7">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 ml-7">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-muted-foreground text-left"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            ▪
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
