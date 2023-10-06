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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
        setEmail("");
        setFullName("");
        setMessage("");
      }}
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
          className="bg-gray-200 p-2 rounded"
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
          className="bg-gray-200 p-2 rounded"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          required={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-200 p-2 rounded"
        />
      </div>
      <button
        className="py-2 px-6 m-auto bg-black m-auto my-4 text-white rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
