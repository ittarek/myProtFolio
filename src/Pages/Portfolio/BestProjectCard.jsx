import { Award, Github, Star } from 'lucide-react';
import './Portfolio.css';

export const BestProjectCard = ({ project, ActionButton, ExternalLink }) => {
  return (
    <div className="best_project_wrapper">
      <div className="best_project_card group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-10 pointer-events-none"></div>

        {/* Award Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold text-gray-900 shadow-lg">
            <Award size={16} />
            <span>Best Project</span>
          </div>
        </div>

        {/* Rating Stars */}
        {project.rating && (
          <div className="absolute top-4 left-4 z-20 flex gap-1">
            {[...Array(project.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        )}

        {/* Image Container with Hover Scroll */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <div
            className="h-full overflow-hidden hover:overflow-y-scroll [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
            }}>
            <img
              width="200"
              height="200"
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-auto object-cover object-top min-h-full transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-8">
          {/* Category Badge */}
          {project.category && (
            <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm rounded-full font-medium mb-4">
              {project.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-blue-400 font-semibold mb-4">{project.subtitle}</p>
          )}

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm rounded-full font-medium hover:bg-blue-500/20 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
            {project.live_link && (
              <ActionButton
                href={project.live_link}
                icon={ExternalLink}
                variant="primary">
                Live Demo
              </ActionButton>
            )}

            {project.github_client && (
              <ActionButton
                href={project.github_client}
                icon={Github}
                variant="secondary">
                View Code
              </ActionButton>
            )}
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};
