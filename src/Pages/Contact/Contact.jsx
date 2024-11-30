import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Tilt from "react-parallax-tilt";
import Container from "../../Components/Container";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {

const sendEmail = e => {
  e.preventDefault();
  let form = e.target;

  emailjs
    .sendForm("service_nadywzt", "template_5b7cawx", form, "gwdOICZ7xweH2po52")
    .then(
      result => {
        console.log(result.text);
        alert("Message sent successfully!"); // Success feedback
      },
      error => {
        console.log(error.text);
        alert("Failed to send message, please try again."); // Error feedback
      }
    );
};

  // const sendEmail = e => {
  //   e.preventDefault();
  //   let form = e.target;

  //   emailjs
  //     .sendForm(
  //       "service_nadywzt",
  //       "template_5b7cawx",
  //       form,
  //       "gwdOICZ7xweH2po52"
  //     )
  //     .then(
  //       result => {
  //         console.log(result.text);
  //       },
  //       error => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  // function show_hide_password(target) {
  //   var input = document.getElementById("password-input");
  //   if (input.getAttribute("type") == "password") {
  //     target.classList.add("view");
  //     input.setAttribute("type", "text");
  //   } else {
  //     target.classList.remove("view");
  //     input.setAttribute("type", "password");
  //   }
  //   return false;
  // }
  return (
    <section>
      {/* Contact me */}
      <section className="contact flex justify-center py-[100px]">
        <div className="box">
          <div className="square" style={{ "--i": 0 }}></div>
          <div className="square" style={{ "--i": 1 }}></div>
          <div className="square" style={{ "--i": 2 }}></div>
          <div className="square" style={{ "--i": 3 }}></div>
          <div className="square" style={{ "--i": 4 }}></div>
          <div className="square" style={{ "--i": 5 }}></div>
          <div className="container ">
            <h2 className="text-white text-center text-3xl my-6">
              Contact to Direct
            </h2>
            <form  onSubmit={sendEmail} className="form w-full">
              {/* name */}
              <div className="inputBx name  ">
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  required="required"
                />

                <span className="label-text text-white">Full Name</span>

                {/* <i className="fas fa-key"></i> */}
              </div>

              {/* website */}
              <div className="inputBx password ">
                <input
                  id="website-input"
                  type="text"
                  name="website"
                  required="required"
                />
                <span className="label-text text-white">website</span>

                {/* <i className="fas fa-key"></i> */}
              </div>

              {/* email */}
              <div className="inputBx password ">
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  required="required"
                />{" "}
          
                <span className="label-text text-white">Email</span>
                {/* <i className="fas fa-key"></i> */}
              </div>
              {/* message */}
              <div>
                <label className="label">
                  <span className="label-text text-white ">Message</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered  mb-6 w-full h-44 rounded-lg"
                  name="message"
                />
              </div>

              {/* submit button */}
              <div className=" form-control  w-60 mb-16 lg-mb-0">
                <button className="relative items-center justify-start inline-block px-9 py-3 overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group">
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>{" "}
          <div className="social-login flex flex-col  items-center">
            <h3 className="">Connect in via</h3>

            <div className="social-icons space-x-3 mr-11">
              <Link
                to=""
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61555139918509"
                  )
                }
              >
                <FacebookIcon />
              </Link>

              <Link
                to=""
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/md-tariqul-islam-ab42b61a1/"
                  )
                }
              >
                <LinkedInIcon />
              </Link>
              <Link
                to=""
                onClick={() => window.open("https://x.com/mdt423863")}
              >
                <XIcon />
              </Link>
              <Link
                to=""
                onClick={() => window.open("https://github.com/ittarek")}
              >
                <GitHubIcon />
              </Link>

              <a href="tel:+8801856838251" title="+8801856838251">
                {" "}
                <LocalPhoneIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
