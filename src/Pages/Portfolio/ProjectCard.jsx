import { Github, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const ProjectCard = ({  project, ActionButton, ExternalLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="project_card_wrapper group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      itemScope
      itemType="https://schema.org/CreativeWork">
      <div className="project_card relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-blue-500/50">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 z-10"></div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-20">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
              <Sparkles size={12} />
              Featured
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            width="200"
            height="200"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <h3
            className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors"
            itemProp="name">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4" itemProp="description">
            {project.subtitle}
          </p>

          {/* Description - Shows on hover */}
          <div
            className={`transition-all duration-500 mb-4 ${
              isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
            } overflow-hidden`}>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs rounded-full font-medium"
                itemProp="keywords">
                {tech}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <ActionButton href={project.live_link} icon={ExternalLink} variant="primary">
              Live Demo
            </ActionButton>

            {project.github_client && (
              <ActionButton
                href={project.github_client}
                icon={Github}
                variant="secondary">
                Code
              </ActionButton>
            )}
          </div>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-500"></div>
      </div>
    </article>
  );
};
