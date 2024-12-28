import React from 'react';
import {projectsData} from '../../src/utils/Data';

const Projects = () => {
  const categories = ['ALL', 'WEB DEVELOPMENT', 'APP DEVELOPMENT', 'DIGITAL ECOSYSTEM'];
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleCategoryClick = (category) => {
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const filteredProjects = projectsData.filter(project =>
    activeCategory === 'ALL' || project.category === activeCategory
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Container-fixed backgrounds */}
      <div className="absolute top-0 left-0 w-full h-2/5 bg-blue-600" />
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out ${
          isTransitioning ? 'translate-y-0' : 'translate-y-1/3'
        }`} 
      />

      {/* Content */}
      <div className="relative w-full p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-white mb-2">MY WORKS</h6>
            <h2 className="text-white text-4xl font-bold">PROJECTS</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                  ? 'bg-white text-blue-600'
                  : 'bg-transparent text-white border border-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                      <button className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;