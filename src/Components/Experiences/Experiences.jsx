import React from 'react'

const prof_experience = [
  {
    id: 1,
    title: 'Web developer Internshipe (Part Time)',
    company: 'SaralTech',
    location: 'Remote, India',
    duration: 'Dec 2024 - Jun 2025',
    description:
      'Led a team of developers in creating scalable web applications using Next.js. Implemented RESTful APIs and integrated third-party services, resulting in a 30% reduction in development time. Focused on front-end development, ensuring data integrity and security. Mainly worked on the front-end, ensuring responsive design and cross-browser compatibility. Collaborate with others team members to design and implement new features, resulting in a 20% increase in user engagement.',
    technologies: ['Next.js', 'TailwindCss', 'SwiperJs', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Software Developer (Full Time)',
    location: 'Remote, UAE',
    company: 'Travent',
    duration: 'Jan 2025 - Jun 2025',
    description:
      'Developed and maintained web applications using React , improving user experience and performance using TailwindCss. Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement. Mainly focused on front-end development, ensuring responsive design and cross-browser compatibility.',
    technologies: ['React', 'TailwindCss', 'JavaScript', 'CSS'],
  },
];

export const Experiences = () => {
    return (
      <div className="text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent my-11">
          Professional Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 ">
          {prof_experience.map(exp => (
            <div
              className="bg-gray-700 border lg:w-[25vw] p-4 rounded-lg shadow-lg transition-transform duration-700 group-hover:scale-110"
              key={exp.id}>
              {/* card header */}
              <div className='-space-y-1 mb-4'>
                {/* title */}
                <h1 className="text-2xl font-bold text-white  group-hover:text-blue-300 transition-colors">
                  {exp.title}
                </h1>
                <p className="text-blue-300 font-medium">
                  {exp.company} , {exp.location}
                </p>
                <p>{exp.duration}</p>
              </div>
              <p className="text-gray-200 text-md leading-relaxed font-sans">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}
