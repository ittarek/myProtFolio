import { Award, Eye } from 'lucide-react';
import React from 'react';

export const SectionHeader = ({ header, subTitle, shortTitle, section }) => {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 mb-6">
        {section == 'myProjects' && <Eye size={16} className="text-blue-400" />}
        <span className="text-blue-400 font-medium">{shortTitle}</span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-2">
        {' '}
        {section == 'bestProjects' && <Award size={28} className="text-yellow-400" />}
        <h1
          className={`text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6   ${section == 'bestProjects' ? 'text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent' : ''} `}>
          {header}
        </h1>
        {section == 'bestProjects' && <Award size={28} className="text-yellow-400" />}
      </div>

      <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        {subTitle}
      </p>
    </div>
  );
};
