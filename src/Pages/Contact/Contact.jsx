import './Contact.css';
import emailjs from '@emailjs/browser';
import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Contact.css";
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
          form.reset();
        },
        error => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section className="contact flex justify-center py-16">
      <div className="box">
        {/* Animated Squares */}
        <div className="square" style={{ '--i': 0 }}></div>
        <div className="square" style={{ '--i': 1 }}></div>
        <div className="square" style={{ '--i': 2 }}></div>
        <div className="square" style={{ '--i': 3 }}></div>
        <div className="square" style={{ '--i': 4 }}></div>
        <div className="square" style={{ '--i': 5 }}></div>

        <div className="container">
          <h2 className="text-white text-center text-3xl mb-10 tracking-wide">
            Contact to Direct
          </h2>

          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name-input" className="sr-only">
                Full Name
              </label>

              <input
                id="name-input"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder=" "
                className="peer w-full bg-white/20 border border-white/20 
                rounded-xl px-4 py-3 text-white outline-none
                focus:border-white focus:bg-white/30 transition"
              />

              <span
                className="absolute left-4 top-3 text-white transition-all duration-300
              peer-focus:-translate-y-6 peer-focus:text-sm
              peer-valid:-translate-y-6 peer-valid:text-sm">
                Full Name
              </span>
            </div>

            {/* Website */}
            <div className="relative">
              <label htmlFor="website-input" className="sr-only">
                Website
              </label>

              <input
                id="website-input"
                type="text"
                name="website"
                required
                autoComplete="url"
                placeholder=" "
                className="peer w-full bg-white/20 border border-white/20 
                rounded-xl px-4 py-3 text-white outline-none
                focus:border-white focus:bg-white/30 transition"
              />

              <span
                className="absolute left-4 top-3 text-white transition-all duration-300
              peer-focus:-translate-y-6 peer-focus:text-sm
              peer-valid:-translate-y-6 peer-valid:text-sm">
                Website
              </span>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email-input" className="sr-only">
                Email
              </label>

              <input
                id="email-input"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder=" "
                className="peer w-full bg-white/20 border border-white/20 
                rounded-xl px-4 py-3 text-white outline-none
                focus:border-white focus:bg-white/30 transition"
              />

              <span
                className="absolute left-4 top-3 text-white transition-all duration-300
              peer-focus:-translate-y-6 peer-focus:text-sm
              peer-valid:-translate-y-6 peer-valid:text-sm">
                Email
              </span>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message-input" className="sr-only">
                Message
              </label>

              <textarea
                id="message-input"
                name="message"
                required
                placeholder="Your message here..."
                className="w-full h-44 bg-white/20 border border-white/20 
                rounded-xl p-4 text-white outline-none
                focus:border-white focus:bg-white/30 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 bg-gradient-to-r from-blue-600 to-teal-600
                rounded-full text-white font-medium
                hover:scale-105 transition duration-300 shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Section */}
        <div className="social-login">
          <h3>Connect via</h3>

          <div className="social-icons space-x-2 text-xl">
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

            <a href="tel:+8801856838251" aria-label="Phone">
              <LocalPhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
