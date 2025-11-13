import { Link } from 'lucide-react';
import salaTech from '../../assets/protfolio-image/saralTech.png';
import travent from '../../assets/protfolio-image/travent.png';
import { useState } from 'react';
import './Experience.css'; // Assuming you have a CSS file for styles
const prof_experience = [
  {
    id: 1,
    title: 'Web developer Internship (Part Time)',
    company: 'SaralTech',
    location: 'Remote, India',
    duration: 'Dec 2024 - Jun 2025',
    description:
      'Led a team of developers in creating scalable web applications using Next.js. Implemented RESTful APIs and integrated third-party services, resulting in a 30% reduction in development time. Focused on front-end development, ensuring data integrity and security. Mainly worked on the front-end, ensuring responsive design and cross-browser compatibility. Collaborate with others team members to design and implement new features, resulting in a 20% increase in user engagement.',
    technologies: ['Next.js', 'TailwindCss', 'SwiperJs', 'JavaScript'],
    cirtificate_link:
      'https://drive.google.com/file/d/1-zB7JRFzsK2BVssNwqooOJBgrNhnSZfQ/view?usp=sharing',
    image: salaTech,
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
    image: travent,
  },
];

export const Experiences = () => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent my-11">
        Professional Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 ">
        {prof_experience.map(exp => (
          <div
            className={`exp_card group relative bg-gray-700 border lg:w-[25vw] p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gray-800 cursor-pointer `}
            key={exp.id}>
            {/* card header */}
            <div className="-space-y-1 mb-4">
              {/* title */}
              <h1 className="text-2xl font-bold text-white  group-hover:text-blue-300 transition-colors">
                {exp.title}
              </h1>
              <p className="text-blue-300 font-medium">
                {exp.company} , {exp.location}
              </p>
              <div className="flex items-center gap-11">
                <p>{exp.duration}</p>
                {exp.cirtificate_link && (
                  <a
                    href={exp.cirtificate_link}
                    target="_blank"
                    className="flex items-center gap-2">
                    <span className="text-blue-300">Certificate</span>
                    <Link size={15} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-200 text-md leading-relaxed font-sans">
              {exp.description}
            </p>

            {/* Hanging image that appears below card on hover */}
            <div className="hanging_image absolute left-0 right-0 top-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300  transform group-hover:translate-y-0 -translate-y-2 z-10 ">
              <div className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rotate-45"></div>
                <img
                  className="w-full max-h-64 object-contain border-2 border-blue-400 rounded-lg bg-gray-800 p-2"
                  src={exp.image}
                  alt={exp.company}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
