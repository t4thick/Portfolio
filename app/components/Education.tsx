export default function Education() {
  return (
    <section id="education" className="bg-[var(--background)] text-[var(--foreground)] py-20 px-8">
      <div className="md:ml-64 max-w-4xl">
        
        {/* Section Title */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">EDUCATION</h2>
          </div>
          
          {/* Education Content */}
          <div className="col-span-2 space-y-12">
            
            {/* Grambling State */}
            <div className="border-b border-gray-300 pb-12">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                Grambling State University
              </h3>
              <p className="text-lg text-[var(--accent)] font-semibold mb-1">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Sophomore | Expected Graduation: May 2027
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Developing a strong foundation in software engineering, data structures, algorithms, 
                and full-stack web development. Focused on building practical applications and 
                gaining real-world experience through hands-on projects and internships.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-[var(--accent)] text-xs font-semibold rounded-full">Data Structures</span>
                <span className="px-3 py-1 bg-blue-100 text-[var(--accent)] text-xs font-semibold rounded-full">Algorithms</span>
                <span className="px-3 py-1 bg-blue-100 text-[var(--accent)] text-xs font-semibold rounded-full">Web Development</span>
                <span className="px-3 py-1 bg-blue-100 text-[var(--accent)] text-xs font-semibold rounded-full">Software Engineering</span>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-bold text-[var(--foreground)] mb-6">
                Professional Certifications & Programs
              </h4>
              
              <div className="space-y-6">
                
                {/* CodePath */}
                <div className="border-l-4 border-[var(--accent)] pl-4">
                  <p className="font-semibold text-[var(--foreground)]">CodePath - Web Development Scholar</p>
                  <p className="text-sm text-gray-600">Feb — Apr 2025</p>
                  <p className="text-gray-800 mt-2">Built responsive single-page websites with HTML, CSS, and JavaScript</p>
                </div>

                {/* IBM SkillsBuild */}
                <div className="border-l-4 border-[var(--accent)] pl-4">
                  <p className="font-semibold text-[var(--foreground)]">IBM SkillsBuild - Data Science Scholar</p>
                  <p className="text-sm text-gray-600">May — Jun 2025</p>
                  <p className="text-gray-800 mt-2">Explored data wrangling, cleaning, visualization with Python and Jupyter Notebook</p>
                </div>

                {/* Moonshot Pirates */}
                <div className="border-l-4 border-[var(--accent)] pl-4">
                  <p className="font-semibold text-[var(--foreground)]">EcoCircle - Moonshot Pirates</p>
                  <p className="text-sm text-gray-600">Jul — Aug 2025</p>
                  <p className="text-gray-800 mt-2">UX/UI Designer for sustainable habits mobile app, designed with Figma</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
