"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          shorturl: shortUrl,
        }),
      });

      const result = await response.json();
      if (result.error) {
        alert(result.error);
        return;
      }

      const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
setGenerated(`${host}/r/${shortUrl}`);

      setUrl("");
      setShortUrl("");

      alert(result.message || "Short URL generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while generating the short URL!");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-black">Generate your short URLs</h1>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter your URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="px-4 py-2 border-2 border-purple-400 focus:outline-purple-600 rounded text-black"
        />

        <input
          type="text"
          placeholder="Enter your preferred short URL text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          className="px-4 py-2 border-2 border-purple-400 focus:outline-purple-600 rounded text-black"
        />

        <button
          onClick={generate}
          className="bg-purple-500 rounded-lg font-bold text-white shadow-lg my-3 p-3 py-2 hover:bg-purple-600 transition"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="text-black mt-2">
          <span className="font-semibold">Your shortened URL: </span>
          <Link
            target="_blank"
            href={generated}
            className="text-purple-700 underline hover:text-purple-900"
          >
            {generated}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Shorten;
