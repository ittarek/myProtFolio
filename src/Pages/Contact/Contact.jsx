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
const Contact = () => {
  const info = [
    {
      title: "Location",
      info1: "Chittagong",
      info2: "Bangladesh",
    },
    {
      title: "Phone",
      info1: "+880-1856838251",
      info2: "+880-1756841144",
    },
    {
      title: "Social",
      info1: "ittarek551@gmail.com",
      info2: "FaceBook, Md Tarek",
      info3: "LinkedIn ,  IT Tarek",
    },
  ];


  const sendEmail = (e) => {
    e.preventDefault();
   let form = e.target;

    emailjs
      .sendForm(
        "service_nadywzt",
        "template_5b7cawx",
        form,
        "gwdOICZ7xweH2po52"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
};


  return (
    <Container>
      <div className="mx-10 my-5">
        <h1 className="h1 text-white text-bold text-4xl text-center mb-11">
          Contact Me
        </h1>
        <div className="lg:flex justify-between gap-14">
          <div>
            <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
              {info.map((data, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 275,
                    marginBottom: 5,
                    background: "transparent",
                  }}
                  className="border round border-purple-400"
                >
                  <CardContent>
                    <Typography variant="body2">
                      <div className=" items-center text-center text-xl ">
                        <h2 className="card-title text-slate-400">
                          {data.title}
                        </h2>
                        <p className=" text-slate-400">{data.info1}</p>
                        <p className="text-slate-400">{data.info2}</p>
                        <p className="text-slate-400">{data.info3}</p>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Tilt>
          </div>

          <form  onSubmit={sendEmail} className="mt-24">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered w-full py-2 pl-2 rounded-xl"
              />
            </div>
            <div className="lg:flex  gap-5 my-6">
              <div className="">
                <label className="label ">
                  <span className="label-text text-white">Website</span>
                </label>
                <input
                  type="text"
                  placeholder="website"
                  name="website"
                  className="input input-bordered w-full rounded-lg py-2 pl-2"
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered w-full rounded-lg py-2 pl-2"
                />
              </div>
            </div>
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

            <div className=" form-control  w-60">
              <button className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all shadow bg-[#10681fcc] rounded-full hover:bg-white group">
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
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
        </div>
      </div>
    </Container>
  );
};

export default Contact;
