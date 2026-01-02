export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend Development",
      skills: ["Python", "Flask", "Node.js", "Express", "RESTful APIs", "Server Architecture"]
    },
    {
      category: "Database & ORM",
      skills: ["SQLite", "SQLAlchemy", "Database Design", "SQL", "Data Modeling"]
    },
    {
      category: "Design & UX",
      skills: ["Figma", "Adobe Photoshop", "UX/UI Design", "Wireframing", "Prototyping", "Brand Design"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Visual Studio Code", "WordPress", "WooCommerce", "Render", "Vercel"]
    },
    {
      category: "Data & Analysis",
      skills: ["Python", "Jupyter Notebook", "IBM Watson Studio", "Data Wrangling", "Data Visualization"]
    },
    {
      category: "Integration & APIs",
      skills: ["Stripe Payment API", "Email Integration", "Third-party APIs", "Payment Processing"]
    },
    {
      category: "Soft Skills",
      skills: ["Strategic Analysis", "Research", "Stakeholder Management", "Team Collaboration", "Problem Solving", "Presentation Design"]
    }
  ];

  return (
    <section id="skills" className="bg-[var(--background)] text-[var(--foreground)] py-20 px-8">
      <div className="md:ml-64 max-w-4xl">
        
        {/* Section Title */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">SKILLS</h2>
          </div>
          
          {/* Skills Grid */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-8">
              
              {skillCategories.map((section, index) => (
                <div key={index} className="pb-6 border-b border-gray-300 last:border-b-0">
                  
                  {/* Category Title */}
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
                    {section.category}
                  </h3>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gray-100 text-[var(--foreground)] text-sm font-semibold rounded border border-gray-300 hover:bg-blue-50 hover:border-[var(--accent)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
