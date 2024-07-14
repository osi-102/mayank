import { useState } from "react";
// import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6b1302d6-2627-4b9b-921e-f8034aac1886");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage(
        "Hi...!!!  I GOT YOUR MESSAGE. I WILL GET BACK TO YOU SOON. THANKS"
      );
      event.target.reset(); // Reset the form
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <p className="py-6 text-center">
        Submit the form below to get in touch with me
      </p>
      <div className="flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            required
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="text-center text-teal-500 my-4">{successMessage}</div>
      )}
      {/* <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div> */}
    </div>
  );
};

export default Contact;
