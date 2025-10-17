import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Contact info
  const email = "ayashakhatun004@gmail.com";
  const phone = "+8801604532776";
  const whatsapp = "+8801604532776";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://my-portfolio-server-2dcfn9p45-ayasha-khatuns-projects.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong! " + data.error);
      }
    } catch (err) {
      alert("Failed to send message: " + err.message);
    }
  };

  return (
    <div id="contact" className="py-10 px-5 text-white">
      <h2 className="text-4xl text-center font-bold text-pink-500">
        Contact <span className="text-purple-600">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10 mt-6 mb-10">
  {/* Left: Contact Info */}
  <div className="md:w-1/3 bg-white/10 p-6 rounded-xl shadow-lg space-y-6">
  <h3 className="text-2xl font-bold text-purple-600 mb-4">Contact Information</h3>

  <div className="flex items-center gap-3">
    <span className="text-indigo-400 text-lg">📧</span>
    <a href={`mailto:${email}`} className="underline text-gray-700">{email}</a>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-indigo-400 text-lg">📞</span>
    <a href={`tel:${phone}`} className="underline text-gray-700">{phone}</a>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-indigo-400 text-lg">💬</span>
    <a href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="underline text-gray-700">
      Chat on WhatsApp
    </a>
  </div>
</div>


  {/* Right: Contact Form */}
  <div className="md:w-2/3">
    <h1 className="text-purple-600 font-bold text-2xl">Contact Form</h1>
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-md">
      <label className="block text-gray-300 mb-2">Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 bg-gray-200 text-black rounded"
        placeholder="Your Name"
        required
      />

      <label className="block text-gray-300 mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 bg-gray-200 text-black rounded"
        placeholder="Your Email"
        required
      />

      <label className="block text-gray-300 mb-2">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="w-full p-2 mb-4 bg-gray-200 text-black rounded"
        placeholder="Your Message"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-md hover:scale-105 transition-transform duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default Contact;
