import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nadywzt",
        "template_5b7cawx",
        form.current,
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
    <div className="mx-10 my-5 ">
      <h1 className="h1 text-white text-bold text-4xl text-center">
        Contact Me
      </h1>
      <div className="lg:flex justify-between gap-14">
        <div>
          {info.map((data, index) => (
            <div
              key={index}
              className="card  bg-transparent border border-1 border-purple-400  my-5 hover:border hover:border-1 hover:border-red-800  hover:bg-white "
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title text-black">{data.title}</h2>
                <p className="text-black">{data.info1}</p>
                <p className="text-black">{data.info2}</p>
                <p className="text-black">{data.info3}</p>
                {/* <div className="card-actions justify-end">
                       
                        <p className="text-center">{item.value}%</p>
                      </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="">
          {/* <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label className="text-white">Name</label>
              <input type="text" name="user_name" /> <br />
              <label className="text-white">Email</label>
              <input type="email" className="my-6" name="user_email" /> <br />
              <label className="text-white">Message</label>
              <textarea name="message" />
              <input type="submit" className="text-white" value="Send" />
            </form>
          </div> */}

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="from_name"
                className="input input-bordered"
              />
            </div>
            <div className="lg:flex  gap-5">
              <div className="">
                <label className="label ">
                  <span className="label-text text-white">Website</span>
                </label>
                <input
                  type="text"
                  placeholder="website"
                  name="from_website"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="from_email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white -mb-5">Message</span>
              </label>
              <input
                type="text"
                className="input input-bordered my-6 w-full h-44"
                name="message"
              />
            </div>
            <div className="form-control mt-6 w-40">
              <button className="btn btn-primary">Send Message</button>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
