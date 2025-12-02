"use client";
import { useState } from "react";

export default function Contact() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setComment("");
  };

  return (
    <main className="min-h-screen bg-black text-gray-800 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-2xl text-center mb-8">
        We’d love to hear your thoughts! Leave your comment below and we’ll get back to you soon.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-purple-50 shadow-md rounded-lg p-8 w-full max-w-md flex flex-col gap-4"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          rows="5"
          className="w-full p-3 border-2 border-purple-300 rounded-md focus:outline-purple-500 text-gray-700 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
