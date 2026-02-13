import React from 'react'

export const StatsSection = ({ projectData, statsRef, bestProjects }) => {
  return (
    <section className="mt-24 pt-16 border-t border-gray-800">
      <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">
            15+
          </div>
          <div className="text-gray-400">Projects Completed</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">2+</div>
          <div className="text-gray-400">Years Experience</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">10+</div>
          <div className="text-gray-400">Technologies Used</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">100%</div>
          <div className="text-gray-400">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
};
