import './Contact.css';
import emailjs from '@emailjs/browser';
import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  const sendEmail = e => {
    e.preventDefault();
    let form = e.target;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.reset(); // ✅ Clear form after success
        },
        error => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section className="contact flex justify-center py-[50px]">
      {/* Contact me */}
      <div className="box">
        <div className="square" style={{ '--i': 0 }}></div>
        <div className="square" style={{ '--i': 1 }}></div>
        <div className="square" style={{ '--i': 2 }}></div>
        <div className="square" style={{ '--i': 3 }}></div>
        <div className="square" style={{ '--i': 4 }}></div>
        <div className="square" style={{ '--i': 5 }}></div>

        <div className="container w-full">
          <h2 className="text-white text-center text-3xl my-6">Contact to Direct</h2>

          <form onSubmit={sendEmail} className="form w-full">
            {/* name */}
            <div className="inputBx name">
              <input
                id="name-input"
                type="text"
                name="name"
                required
                autoComplete="name"
              />
              <span className="label-text text-white">Full Name</span>
            </div>

            {/* website */}
            <div className="inputBx password">
              <input
                id="website-input"
                type="text"
                name="website"
                required
                autoComplete="url"
              />
              <span className="label-text text-white">Website</span>
            </div>

            {/* email */}
            <div className="inputBx password">
              <input
                id="email-input"
                type="email"
                name="email"
                required
                autoComplete="email"
              />
              <span className="label-text text-white">Email</span>
            </div>

            {/* message */}
            <div>
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                className="input input-bordered mb-6 w-full h-44 rounded-lg p-3"
                name="message"
                required
                placeholder="Your message here..."
              />
            </div>

            {/* submit button */}
            <div className="form-control w-60 mb-16 lg:mb-0">
              <button
                type="submit"
                className="relative items-center justify-start inline-block px-9 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-600 to-teal-600 rounded-full group">
                <span className="absolute inset-0 border-0 group-hover:border-[33px] ease-linear duration-100 transition-all border-white rounded-full"></span>

                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>

                <span className="relative z-10 w-full text-left transition-colors duration-200 ease-in-out">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="social-login flex flex-col items-center">
          <h3>Connect via</h3>

          <div className="social-icons space-x-3 mr-11">
            <Link
              to=""
              onClick={() =>
                window.open('https://www.facebook.com/profile.php?id=61555139918509')
              }
              aria-label="Facebook">
              <FacebookIcon />
            </Link>

            <Link
              to=""
              onClick={() =>
                window.open('https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/')
              }
              aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>

            <Link
              to=""
              onClick={() => window.open('https://x.com/mdt423863')}
              aria-label="X (Twitter)">
              <XIcon />
            </Link>

            <Link
              to=""
              onClick={() => window.open('https://github.com/ittarek')}
              aria-label="GitHub">
              <GitHubIcon />
            </Link>

            <a href="tel:+8801856838251" title="+8801856838251" aria-label="Phone">
              <LocalPhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
