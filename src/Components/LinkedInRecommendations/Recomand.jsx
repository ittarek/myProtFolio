import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { Linkedin, Quote } from 'lucide-react';

// Sample recommendations data
const recommendations = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    company: 'SaralTech',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/johndoe',
    date: 'December 2024',
    recommendation:
      'Tariqul is an exceptional developer with outstanding skills in React and Next.js. His ability to solve complex problems and deliver high-quality code consistently impressed our team. He was instrumental in developing our venture builder platform.',
    relationship: "John was Tariqul's manager",
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    company: 'Travent',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/janesmith',
    date: 'January 2025',
    recommendation:
      'Working with Tariqul was a fantastic experience. His frontend expertise, particularly with React and Tailwind CSS, helped us deliver our booking platform ahead of schedule. He has excellent communication skills.',
    relationship: 'Jane worked directly with Tariqul',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Senior Developer',
    company: 'SaralTech',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/mikejohnson',
    date: 'November 2024',
    recommendation:
      "Tariqul is a skilled developer who consistently delivers exceptional work. His knowledge of modern web technologies made collaboration seamless. He's a team player who always goes the extra mile.",
    relationship: 'Mike worked with Tariqul on the same team',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Product Manager',
    company: 'Travent',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    date: 'October 2024',
    recommendation:
      'Tariqul demonstrated exceptional technical skills and professionalism throughout our project. His attention to detail and commitment to delivering pixel-perfect implementations made him stand out.',
    relationship: 'Sarah managed Tariqul directly',
  },
];

export const Recomand = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="text-center px-4 pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
          <Linkedin size={16} className="text-blue-400" />
          <span className="text-blue-400 font-medium">LinkedIn Recommendations</span>
        </div>

        <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6">
          What People Say
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Scroll down to see all recommendations
        </p>
      </div>

      {/* Scroll Stack Section */}
      <ScrollStack
        useWindowScroll={true}
        stackPosition="20%"
        scaleEndPosition="10%"
        itemScale={0.05}
        baseScale={0.85}
        itemStackDistance={30}
        rotationAmount={0}
        blurAmount={0}
        itemDistance={200}>
        {recommendations.map(rec => (
          <ScrollStackItem key={rec.id} itemClassName="bg-white">
            <div className="flex gap-6 h-full ">
              {/* Left: Image */}
              <div className="w-1/3 flex-shrink-0 h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={rec.image}
                  alt={rec.name}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col relative overflow-hidden">
                {/* Quote Icon */}
                <Quote
                  size={50}
                  className="absolute top-0 right-0 opacity-10 text-blue-400"
                />

                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-blue-500/30 flex-shrink-0">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                      {rec.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm line-clamp-1">
                      {rec.position} at {rec.company}
                    </p>
                    <p className="text-gray-500 text-xs">{rec.date}</p>
                  </div>

                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors flex-shrink-0"
                    aria-label={`View ${rec.name}'s LinkedIn profile`}>
                    <Linkedin size={14} />
                  </a>
                </div>

                {/* Recommendation Text */}
                <div className="flex-1 overflow-hidden">
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">
                    "{rec.recommendation}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic line-clamp-1">
                    {rec.relationship}
                  </p>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};
