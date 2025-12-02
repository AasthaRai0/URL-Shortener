"use client";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <main className="min-h-screen bg-black text-gray-800 flex flex-col items-center py-16 px-6">
      
      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-4">
          About <span className="text-purple-500">BitLinks</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          BitLinks is your simple and efficient URL shortener — built to make sharing links
          faster, smarter, and easier for everyone. Whether you’re a business or an individual, 
          we help you create clean, customized short links in seconds.
        </p>
      </section>

      {/* Image + Features */}
      <section className="max-w-5xl grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center">
          <Image
            src="/vector.jpg"
            alt="About BitLinks Illustration"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-2xl font-bold text-purple-700">Why BitLinks?</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>🔗 Shorten your links instantly with custom names.</li>
            <li>📊 Manage and organize URLs in one place.</li>
            <li>💻 Built with modern tech — Next.js & MongoDB.</li>
            <li>⚡ Lightning-fast and mobile responsive.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
