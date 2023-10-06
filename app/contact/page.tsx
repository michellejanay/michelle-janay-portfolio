"use client";
import type { NextPage } from "next";
import { useState } from "react";

const Form: NextPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const sendMessage = (): void => {
    console.log(`${formData.fullName} submitted a message successfully. 
    Email: ${formData.email}
    Message: ${formData.message}`);
    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex flex-col lg:max-w-[70%] lg:m-auto">
        <h2 className="font-libre">Get in touch...</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="m-4 lg:min-w-[64%] lg:mx-auto"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              autoComplete="name"
              name="fullName"
              required={true}
              value={formData.fullName}
              onChange={handleUserInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="email"
              name="email"
              required={true}
              value={formData.email}
              onChange={handleUserInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required={true}
              value={formData.message}
              onChange={handleUserInput}
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
