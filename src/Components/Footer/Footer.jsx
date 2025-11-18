import { Link } from 'react-router-dom';
import { FaceBookIcon } from './FooterIcons/FaceBookIcon';
import { GithubIcon } from './FooterIcons/GithubIcon';
import { LinkedIn } from './FooterIcons/LinkedIn';

export const Footer = () => {
  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1-fKpAA8b0LoLpb05KTwZaHEVC2ZfECop/view?usp=sharing'
    );
  };
  return (
    <div>
      <footer className=" border-t-2 border-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link to="/" className="text-base text-gray-500 hover:text-gray-400">
                Home
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link to="/about" className="text-base text-gray-500 hover:text-gray-400">
                About
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/myProtFolio"
                className="text-base text-gray-500 hover:text-gray-400">
                Portfolio
              </Link>
            </div>
            <div className="px-5 py-2 cursor-pointer">
              <div
                onClick={handleDownload}
                className="text-base text-gray-500 hover:text-gray-400">
                Resume
              </div>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
              className="text-gray-400 hover:text-gray-400">
              <span className="sr-only">Linkedin</span>
<LinkedIn/>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/md.tariqul.islam.428023/"
              className="text-gray-400 hover:text-gray-400">
              <span className="sr-only">Facebook</span>
           <FaceBookIcon/>
            </a>

            <a
              target="_blank"
              href="https://github.com/ittarek"
              className="text-gray-400 hover:text-gray-400">
              <span className="sr-only">GitHub</span>
              <GithubIcon />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()}, Md Tariqul Islam, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
