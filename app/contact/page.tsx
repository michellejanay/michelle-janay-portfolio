"use client";
import type { NextPage } from "next";
import { useState } from "react";

const Form: NextPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(`${fullName} submitted a message successfully. 
    Email: ${email}
    Message: ${message}`);
  };

  return (
    <>
      <div className="flex flex-col lg:max-w-[70%] lg:m-auto">
        <h2 className="font-libre">Get in touch...</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
            setEmail("");
            setFullName("");
            setMessage("");
          }}
          className="m-4 lg:min-w-[64%] lg:mx-auto"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              autoComplete="name"
              name="full-name"
              required={true}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="py-2 px-6 m-auto bg-black m-auto my-4 text-white rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
