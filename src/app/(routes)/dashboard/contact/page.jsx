"use client";

import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-8 flex flex-col items-center text-center min-h-[60vh] justify-center">
      <h1 className="font-extrabold text-4xl mb-4 text-primary flex items-center gap-2">
        <Mail className="inline-block text-primary" size={32} />
        Contact <span className="text-black">TrackWise</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Have a question, suggestion, or need help? <br />
        We’d love to hear from you! Reach out anytime and our team will get back
        to you as soon as possible.
      </p>
      <div className="mb-6">
        <p className="mb-1">
          <span className="font-semibold text-primary">Email:</span>{" "}
          support@trackwise.com
        </p>
        <p>
          <span className="font-semibold text-primary">Phone:</span> +91-
          XXXXXXXXXX
        </p>
      </div>
      <form
        className="w-full max-w-md bg-slate-50 rounded-xl shadow p-6 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "Thank you for reaching out! We'll get back to you soon."
          );
        }}
      >
        <input
          type="email"
          required
          placeholder="Your email"
          className="border rounded px-3 py-2 focus:outline-primary"
        />
        <textarea
          required
          placeholder="Your message"
          className="border rounded px-3 py-2 focus:outline-primary"
          rows={3}
        />
        <button
          type="submit"
          className="bg-primary text-white rounded px-4 py-2 flex items-center justify-center gap-2 hover:bg-primary/90 transition"
        >
          <Send size={18} /> Send Message
        </button>
      </form>
      <div className="mt-8 w-full max-w-md">
        <h2 className="font-semibold text-lg mb-2 text-primary">
          Subscribe to our Newsletter
        </h2>
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Subscribed! You'll receive our latest updates.");
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="border rounded px-3 py-2 flex-1 focus:outline-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white rounded px-4 py-2 hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}